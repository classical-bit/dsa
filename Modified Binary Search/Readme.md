# Modified Binary Search Problems

## Easy to Medium Difficulty

* **Binary Search:**
    * Given a sorted (in ascending order) integer array `nums` of `n` elements and a `target` value, write a function to search `target` in `nums`. If `target` exists, then return its index otherwise return `-1`.
* **Ceiling of a Number:**
    * Given a sorted array of numbers and a target key, find the ceiling of the key in the array. The ceiling of the key is the smallest element in the array greater than or equal to the key.
* **Floor of a Number:**
    * Given a sorted array of numbers and a target key, find the floor of the key in the array. The floor of the key is the greatest element in the array smaller than or equal to the key.
* **Next Letter:**
    * Given a sorted array of lowercase letters `letters` and a target letter `target`, find the smallest element in the array that is larger than the given target. Letters also wrap around.

## Medium to Hard Difficulty

* **Find First and Last Position of Element in Sorted Array:**
    * Given an array of integers `nums` sorted in non-decreasing order, find the starting and ending position of a given `target` value.
    * If `target` is not found in the array, return `[-1, -1]`.
* **Search in a Sorted Array of Unknown Size:**
    * Given an integer array sorted in ascending order, write a function to search `target` in `nums`. However, the size of the array is unknown to you. You may only access the array using an `ArrayReader` interface, where `ArrayReader.get(k)` returns the element of the array at index `k` (0-indexed).
* **Search in Rotated Sorted Array:**
    * Given a rotated sorted array `nums`, find the index of a given `target` value.
    * You may assume no duplicate exists in the array.
* **Search in Rotated Sorted Array II:**
    * This is the same as above, but now, there are duplicates allowed in the array.
* **Find Peak Element:**
    * A peak element is an element that is strictly greater than its neighbors. Given an integer array `nums`, find a peak element, and return its index. The array may contain multiple peaks, in that case return the index to any of the peaks is fine.
* **Find the Smallest Letter Greater Than Target:**
    * Given a sorted array of characters letters and a target character target, find the smallest character in the array that is larger than target.

## Tips for Practice

* **Understand the Core Binary Search:**
    * Make sure you have a strong grasp of the basic binary search algorithm.
* **Modify Conditions:**
    * Pay close attention to how the conditions for moving the left and right pointers need to be modified for each problem.
* **Handle Edge Cases:**
    * Consider edge cases like empty arrays, single-element arrays, and target values outside the array's range.
* **Visualize the Search Space:**
    * Drawing diagrams can help you visualize how the search space is being narrowed down.
* **Be Aware of Integer Overflow:**
    * When calculating the middle index, use `mid = left + (right - left) / 2` to avoid potential integer overflow.
* **Duplicates:**
    * When dealing with duplicates, be prepared for the worst case time complexity to sometimes degrade to O(n).