# Cyclic Sort Problems

## Easy to Medium Difficulty

* **Cyclic Sort:**
    * Given an array `nums` containing `n` distinct numbers in the range `[1, n]`, sort it in-place using the Cyclic Sort algorithm.
* **Find the Missing Number:**
    * Given an array `nums` containing `n` distinct numbers in the range `[0, n]`, return the only number in the range that is missing from the array.
* **Find All Numbers Disappeared in an Array:**
    * Given an array `nums` of `n` integers where `nums[i]` is in the range `[1, n]`, return an array of all the integers in the range `[1, n]` that do not appear in `nums`.
* **Find the Duplicate Number:**
    * Given an array `nums` containing `n + 1` integers where each integer is in the range `[1, n]` inclusive.
    * There is only **one repeated number** in `nums`, return *this repeated number*.
    * You must solve the problem without modifying the array `nums` and uses only constant extra space. (Cyclic sort is one way to solve this, but other solutions exist also.)

## Medium to Hard Difficulty

* **Find All Duplicates in an Array:**
    * Given an array `nums` of `n` integers where each integer is in the range `[1, n]`, return an array of all the integers that appear twice.
* **First Missing Positive:**
    * Given an unsorted integer array `nums`, return the smallest missing positive integer.
* **Set Mismatch:**
    * You are given an integer array `nums` where `nums[i]` is in the range `[1, n]`. You have one element of `nums` repeated exactly once, while an element in the range `[1, n]` is missing.
    * Return an array `[repeated, missing]` where `repeated` is the repeated number and `missing` is the missing number.

## Tips for Practice

* **Range Check:** Cyclic Sort works best when the numbers in the array are within a specific range, typically `[1, n]` or `[0, n]`.
* **Index Mapping:** Understand how to map each number to its correct index.
* **In-Place Swaps:** Cyclic Sort relies on in-place swaps to move elements to their correct positions.
* **Handling Duplicates:** Pay attention to how duplicates affect the algorithm and how to handle them.
* **Edge Cases:** Consider cases with empty arrays, arrays with duplicate elements, and arrays with missing elements.
* **Visualize:** Drawing the array and the swaps can help you understand the algorithm's flow.