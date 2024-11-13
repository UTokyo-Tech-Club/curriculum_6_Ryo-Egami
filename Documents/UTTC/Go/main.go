package main

import (
	"fmt"
	"sort"
	"strconv"
	"strings"
)

// 文字列を整数の配列に変換する関数
func convertStringToIntArray(m string) []int {
	// カンマで文字列を分割
	strNums := strings.Split(m, ",")
	var nums []int
	// 各文字列を整数に変換
	for _, str := range strNums {
		// 余分な空白を除去
		str = strings.TrimSpace(str)
		num, err := strconv.Atoi(str)
		if err != nil {
			// エラー処理（整数に変換できない場合はスキップ）
			continue
		}
		nums = append(nums, num)
	}
	return nums
}

// 各整数の出現回数を数える関数
func countNumberFrequency(a []int) map[int]int {
	frequency := make(map[int]int)
	for _, num := range a {
		frequency[num]++
	}
	return frequency
}

// 整数の合計をsにする方法が何通りあるかを数える関数
func countCardCombinations(a []int, s int) int {
	dp := make([]int, s+1)
	dp[0] = 1

	for _, num := range a {
		for sum := s; sum >= num; sum-- {
			dp[sum] += dp[sum-num]
		}
	}

	if dp[s] > 0 {
		return dp[s]
	} else {
		return -1
	}
}

// map[int]intのkeyとvalueをkeyの昇順に出力する関数
func printMapKeyAndValue(m map[int]int) {
	// キーを取得してソート
	var keys []int
	for k := range m {
		keys = append(keys, k)
	}
	sort.Ints(keys)
	// ソートされたキーでマップを出力
	for _, k := range keys {
		fmt.Printf("%d %d\n", k, m[k])
	}
}

func main() {
	var m string
	var s int

	// 標準入力から文字列と整数を読み取る
	fmt.Scan(&m)
	fmt.Scan(&s)

	a := convertStringToIntArray(m)
	frequencyCount := countNumberFrequency(a)
	combinationCount := countCardCombinations(a, s)

	printMapKeyAndValue(frequencyCount)
	fmt.Println(combinationCount)
}
