package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"os"
	"sync"
)

type User struct {
	Name string `json:"name"`
	Age  int    `json:"age"`
}

var (
	users []User
	mu    sync.Mutex
)

func loadUsers() {
	file, err := os.Open("db.json")
	if err != nil {
		users = []User{}
		return
	}
	defer file.Close()
	json.NewDecoder(file).Decode(&users)
}

func saveUsers() {
	file, _ := os.Create("db.json")
	defer file.Close()
	json.NewEncoder(file).Encode(users)
}

func getUsers(w http.ResponseWriter, _ *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	mu.Lock()
	defer mu.Unlock()
	json.NewEncoder(w).Encode(users)
}

func addUser(w http.ResponseWriter, r *http.Request) {
	var user User
	if err := json.NewDecoder(r.Body).Decode(&user); err != nil || user.Name == "" || user.Age < 0 {
		http.Error(w, "Invalid input", http.StatusBadRequest)
		return
	}
	mu.Lock()
	defer mu.Unlock()
	users = append(users, user)
	saveUsers()
	w.WriteHeader(http.StatusCreated)
}

func main() {
	loadUsers()
	http.HandleFunc("/users", func(w http.ResponseWriter, r *http.Request) {
		if r.Method == http.MethodGet {
			getUsers(w, r)
		} else if r.Method == http.MethodPost {
			addUser(w, r)
		} else {
			http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		}
	})
	fmt.Println("Server running on http://localhost:8080")
	http.ListenAndServe(":8080", nil)
}
