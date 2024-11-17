package main

import (
	"fmt"
	"strconv"
)

const fizz, buzz = "Fizz", "Buzz"
const fizzbuzz = fizz + buzz

// FizzBuzz関数
func FizzBuzz(numbers []int) []string {
	result := make([]string, 0, len(numbers))

	for _, n := range numbers {
		switch {
		case isFizzBuzz(n): // 3の倍数かつ5の倍数
			result = append(result, fizzbuzz)
		case isFizz(n): // 3の倍数
			result = append(result, fizz)
		case isBuzz(n): // 5の倍数
			result = append(result, buzz)
		default:
			result = appendNum(result, n)
		}
	}

	return result
}

// 3の倍数かつ5の倍数かを判定する関数
func isFizzBuzz(n int) bool { return n%3 == 0 && n%5 == 0 }

// 3の倍数かを判定する関数
func isFizz(n int) bool { return n%3 == 0 }

// 5の倍数かを判定する関数
func isBuzz(n int) bool { return n%5 == 0 }

// 数字を文字列として追加する関数
func appendNum(s []string, n int) []string { return append(s, strconv.Itoa(n)) }

func main() {
	ret := FizzBuzz([]int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20})
	fmt.Printf("%v\n", ret)
}