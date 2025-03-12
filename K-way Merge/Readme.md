# K-way Merge Problems

## Easy to Medium Difficulty

* **Merge k Sorted Lists:**
    * Given an array of `k` linked-lists `lists`, each linked-list is sorted in ascending order.
    * Merge all the linked-lists into one sorted linked-list and return it.
* **Merge k Sorted Arrays:**
    * Given a 2D array of `k` sorted arrays, merge them into one sorted array.

## Medium to Hard Difficulty

* **Merge k Sorted Streams:**
    * Given `k` sorted streams, merge them into one sorted stream. This is a variation where the entire arrays might not be loaded into memory.
* **Find K Pairs with Smallest Sums:**
    * You are given two integer arrays `nums1` and `nums2` sorted in ascending order and an integer `k`.
    * Define a pair `(u, v)` which consists of one element from the first array and one element from the second array.
    * Find `k` pairs `(u1, v1), (u2, v2), ..., (uk, vk)` with the smallest sums.
* **Kth Smallest Element in a Sorted Matrix:**
    * Given an `n x n` matrix where each of the rows and columns are sorted in ascending order, return the `k`th smallest element in the matrix.
    * Note that it is the `k`th smallest element in the sorted order, not the `k`th distinct element.
* **Super Ugly Number:**
    * Write a program to find the `n`th super ugly number.
    * Super ugly numbers are positive numbers whose all prime factors are in the given prime list `primes`.

## Tips for Practice

* **Priority Queues (Min-Heaps):**
    * Priority queues are essential for efficiently tracking the smallest elements from each list or array.
    * Understand how to use priority queues with custom comparators for different data types.
* **Linked Lists vs. Arrays:**
    * Be prepared to handle both linked lists and arrays as input.
    * Adjust your code based on the data structure being used.
* **Stream Processing:**
    * For stream problems, focus on processing elements incrementally without loading the entire dataset into memory.
* **K-way Merge Logic:**
    * Understand the core logic of repeatedly extracting the smallest element and advancing the corresponding pointer or iterator.
* **Edge Cases:**
    * Consider empty lists or arrays, invalid `k` values, and other boundary conditions.
* **Time and Space Complexity:**
    * Pay attention to the time and space complexity of your solutions, especially when dealing with large datasets.
    * Typically O(N log k) time complexity, where N is the total number of elements.
* **Visualization:**
    * Drawing diagrams of the lists or arrays and the priority queue can help visualize the merging process.