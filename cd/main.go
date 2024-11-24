package main

import (
	"encoding/json"
	"log"
	"net/http"
)

func helloHandler(w http.ResponseWriter, r *http.Request) {
	// クエリパラメータ "name" を取得
	name := r.URL.Query().Get("name")

	// "name" が設定されていない場合は 400 Bad Request を返す
	if name == "" {
		http.Error(w, "Bad Request", http.StatusBadRequest)
		return
	}

	// レスポンスメッセージを作成
	response := map[string]string{
		"message": "Hello, " + name + "!",
	}

	// Content-Type を application/json に設定
	w.Header().Set("Content-Type", "application/json")

	// JSONエンコードしてレスポンスに書き込む
	if err := json.NewEncoder(w).Encode(response); err != nil {
		http.Error(w, "Internal Server Error", http.StatusInternalServerError)
	}
}

func main() {
	// "/hello" パスにハンドラーを登録
	http.HandleFunc("/hello", helloHandler)

	// サーバーを起動
	log.Println("サーバーをポート8000で起動します...")
	if err := http.ListenAndServe(":8000", nil); err != nil {
		log.Fatalf("サーバー起動エラー: %v", err)
	}
}
