# Two Pointers Problems

## Easy to Medium Difficulty

1. **Two Sum II - Input Array Is Sorted:**
    * Given a 1-indexed array of integers `numbers` that is already *sorted in non-decreasing order*, find two numbers such that they add up to a specific `target` number. Let these two numbers be `numbers[index1]` and `numbers[index2]` where `1 <= index1 < index2 <= numbers.length`.
    * Return the indices of the two numbers, `index1` and `index2`, *added by one* as an integer array `[index1, index2]` of length 2.
2. **Remove Duplicates from Sorted Array:**
    * Given a sorted array `nums`, remove the duplicates *in-place* such that each element appears only once and returns the new length.
    * Do not allocate extra space for another array; you must do this by modifying the input array *in-place* with O(1) extra memory.
3. **Valid Palindrome:**
    * Given a string `s`, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
4. **Sort Colors:**
    * Given an array `nums` with `n` objects colored red, white, or blue, sort them *in-place* so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
    * We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
5. **Reverse String:**
    * Write a function that reverses a string. The input string is given as an array of characters `s`.
    * Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

## Medium to Hard Difficulty

1. **3Sum:**
    * Given an integer array `nums`, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`.
    * Notice that the solution set must not contain duplicate triplets.
2. **3Sum Closest:**
    * Given an integer array `nums` of length `n` and an integer `target`, find three integers in `nums` such that their sum is closest to `target`.
    * Return the sum of the three integers. You may assume that each input would have exactly one solution.
3. **Container With Most Water:**
    * Given `n` non-negative integers `a1, a2, ..., an`, where each represents a point at coordinate `(i, ai)`. `n` vertical lines are drawn such that the two endpoints of the line `i` are at `(i, ai)` and `(i, 0)`.
    * Find two lines that together with the x-axis form a container, such that the container contains the most water.
    * Notice that you may not slant the container.
4. **Trapping Rain Water:**
    * Given `n` non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
5. **Subarrays with K Different Integers:**
    * Given an integer array `nums` and an integer `k`, return the number of good subarrays of `nums`.
    * A good subarray is a subarray `nums[i..j]` such that the number of different integers in `nums[i..j]` is exactly `k`.

## Tips for Practice

* **Sorted Input:** Two Pointers often excels with sorted data. Remember to sort when needed.
* **Direction Matters:** Consider if your pointers should move inwards, outwards, or in the same direction.
* **Conditions:** Clearly define the conditions for moving each pointer.
* **Edge Cases:** Pay attention to edge cases like empty arrays or invalid input.
* **Visualize:** Drawing diagrams can help you understand pointer movement.
