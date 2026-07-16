package main

import "fmt"

func insertionSort(arr []int) []int {
	for i := 1; i < len(arr); i++ {
		key := arr[i]
		j := i - 1

		for j >= 0 && arr[j] > key {
			arr[j+1] = arr[j]
			j = j - 1
		}

		arr[j+1] = key
	}
	return arr
}

// func printArr(arr []int) {
// 	for _, elm := range arr {
// 		fmt.Println(elm)
// 	}
// }

// func main() {
// 	unsortedArr := []int{1, 4, 2, 3, 5, 1}
// 	sortedArr := insertionSort(unsortedArr)
// 	fmt.Println("Hello, world!")
// 	printArr(sortedArr)
// }
