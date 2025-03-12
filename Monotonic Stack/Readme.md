# Monotonic Stack/Queue Problems

## Easy to Medium Difficulty

* **Next Greater Element I:**
    * You are given two integer arrays `nums1` and `nums2` where `nums1` is a subset of `nums2`.
    * For each element `nums1[i]`, find the next greater element in the corresponding location of `nums2`.
    * The next greater element of a number `x` in `nums2` is the first greater number to its right in `nums2`. If it does not exist, return `-1` for this number.
* **Next Greater Element II:**
    * Given a circular integer array `nums` (i.e., the next element of `nums[nums.length - 1]` is `nums[0]`), return the next greater number for every element in `nums`.
    * The next greater number of a number `x` is the first greater number to its traversing-order next appearance in the array, which means you could search circularly to find its next greater number. If it doesn't exist, return `-1` for this number.
* **Daily Temperatures:**
    * Given an array of integers `temperatures` represents the daily temperatures, return an array `answer` such that `answer[i]` is the number of days you have to wait after the `i`th day to get a warmer temperature. If there is no future day for which this is possible, keep `answer[i] == 0` instead.

## Medium to Hard Difficulty

* **Largest Rectangle in Histogram:**
    * Given an array of integers `heights` representing the histogram's bar height where the width of each bar is `1`, return the area of the largest rectangle in the histogram.
* **Sliding Window Maximum:**
    * You are given an array of integers `nums`, there is a sliding window of size `k` which is moving from the very left of the array to the very right.
    * You can only see the `k` numbers in the window. Each time the sliding window moves right by one position.
    * Return the maximum of the sliding window.
* **Trapping Rain Water:**
    * Given `n` non-negative integers representing an elevation map where the width of each bar is `1`, compute how much water it can trap after raining.
* **Remove K Digits:**
    * Given a non-negative integer `num` represented as a string, remove `k` digits from the number so that the new number is the smallest possible.
    * Note:
        * The length of `num` is less than `10002` and will be ≥ `k`.
        * The given `num` does not contain any leading zero.
* **Sum of Subarray Minimums:**
    * Given an array of integers `arr`, find the sum of `min(b)`, where `b` ranges over every (contiguous) subarray of `arr`.
    * Since the answer may be very large, return the answer modulo `10^9 + 7`.

## Tips for Practice

* **Monotonicity:**
    * Understand the concept of maintaining a monotonically increasing or decreasing sequence in the stack or queue.
* **Stack vs. Queue:**
    * Choose the appropriate data structure based on the problem requirements. Stacks are often used for finding next greater/smaller elements, while queues are used for sliding window problems.
* **Element Removal:**
    * Know when to pop elements from the stack or queue to maintain the monotonicity.
* **Index Tracking:**
    * Often, you need to store the indices of elements in the stack or queue to calculate distances or perform other operations.
* **Edge Cases:**
    * Consider empty arrays, arrays with duplicate elements, and other boundary conditions.
* **Time and Space Complexity:**
    * Analyze the time and space complexity of your solutions. Monotonic stack/queue solutions often have linear time complexity.
* **Visualization:**
    * Drawing diagrams of the stack or queue and tracing the element insertions and removals can help you understand the algorithm's flow.