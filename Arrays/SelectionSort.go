package main

func selectionSort(arr []int) []int {
	for i := 0; i < len(arr)-1; i++ {
		minIdx := i

		for j := i + 1; j < len(arr); j++ {
			if arr[j] < arr[minIdx] {
				minIdx = j
			}
		}

		arr[i], arr[minIdx] = arr[minIdx], arr[i]
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
// 	sortedArr := selectionSort(unsortedArr)
// 	fmt.Println("Hello, world!")
// 	printArr(sortedArr)
// }
