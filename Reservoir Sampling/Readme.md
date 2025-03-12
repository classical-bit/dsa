# Reservoir Sampling Problems

## Easy to Medium Difficulty

1. [ ] **Random Pick Index:**
    * Given an array of integers `nums`, design a data structure to pick a random index of the given target number.
    * Implement the `Solution` class:
        * `Solution(int[] nums)` Initializes the object with the array `nums`.
        * `int pick(int target)` Picks a random index `i` from `nums` where `nums[i] == target`. If there are multiple valid i's, then each index should have an equal probability of being returned.

## Medium to Hard Difficulty

1. [ ] **Linked List Random Node:**
    * Given a singly linked list, return a random node's value from the linked list.
    * Implement the `Solution` class:
        * `Solution(ListNode head)` Initializes the object with the head of the singly-linked list `head`.
        * `int getRandom()` Returns a random node's value from the linked list. Each node must have the same probability of being chosen.
2. [ ] **Random Pick with Weight:**
    * You are given a 0-indexed array of positive integers `w` representing the weights of `n` indices.
    * Choose an index in the range `[0, n - 1]` (inclusive) with probability proportional to its weight.
    * Implement the `Solution` class:
        * `Solution(int[] w)` Initializes the object with the array `w`.
        * `int pickIndex()` Returns a randomly chosen index in the range `[0, n - 1]` (inclusive).

## Tips for Practice

* **Streaming Data:**
    * Reservoir sampling is primarily used when dealing with streaming data or data sets that are too large to fit into memory.
* **Uniform Random Selection:**
    * The goal is to ensure that each element has an equal probability of being selected.
* **Maintaining a Reservoir:**
    * Understand how to maintain a reservoir of `k` elements (where `k` is the sample size) while processing the stream.
* **Random Replacement:**
    * Learn how to randomly replace elements in the reservoir with elements from the stream.
* **Probability Calculation:**
    * Pay attention to the probability calculations involved in selecting and replacing elements.
* **Edge Cases:**
    * Consider edge cases like empty streams, streams with single elements, and cases where the sample size is larger than the stream size.
* **Time and Space Complexity:**
    * Analyze the time and space complexity of your solutions. Reservoir sampling typically has linear time complexity and constant space complexity.
* **Applications:**
    * Reservoir sampling has applications in data sampling, log analysis, and distributed systems.
* **Visualization:**
    * Tracing the element selections and replacements can help you understand the algorithm's flow.
