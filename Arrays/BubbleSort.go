package main

func bubbleSort(arr []int) []int {
	for i := 0; i < len(arr)-1; i++ {
		for j := 0; j < len(arr)-i-1; j++ {
			if arr[j] > arr[j+1] {
				arr[j], arr[j+1] = arr[j+1], arr[j]
			}
		}
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
// 	sortedArr := bubbleSort(unsortedArr)
// 	fmt.Println("Hello, world!")
// 	printArr(sortedArr)
// }
