# Sliding Window Problems

## Easy to Medium Difficulty

1. **Maximum Sum Subarray of Size K:**
    * Given an array of integers and a window size `k`, find the maximum sum of any contiguous subarray of size `k`.
    * This is a fundamental sliding window problem.
2. **Longest Substring with K Distinct Characters:**
    * Given a string and an integer `k`, find the length of the longest substring with at most `k` distinct characters.
3. **Longest Substring Without Repeating Characters:**
    * Given a string, find the length of the longest substring without repeating characters.
4. **Minimum Size Subarray Sum:**
    * Given an array of positive integers and a target sum `s`, find the minimum length of a contiguous subarray whose sum is greater than or equal to `s`.
5. **Fruits into Baskets:**
    * Given an array of characters where each character represents a type of fruit, you are given two baskets and your goal is to put maximum number of fruits in each basket. The only condition is that each basket can have only one type of fruit. You can start with any fruit, but once you’ve started, you can’t skip a fruit.

## Medium to Hard Difficulty

1. **Permutation in String:**
    * Given two strings `s1` and `s2`, return `true` if `s2` contains a permutation of `s1`, or `false` otherwise.
2. **Find All Anagrams in a String:**
    * Given two strings `s` and `p`, return an array of all the start indices of `p`'s anagrams in `s`.
3. **Longest Repeating Character Replacement:**
    * Given a string `s` and an integer `k`, you can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most `k` times.
    * Return the length of the longest substring containing the same letter you can get after performing the above operations.
4. **Sliding Window Maximum:**
    * Given an array of integers `nums`, there is a sliding window of size `k` which is moving from the very left of the array to the very right. You can only see the `k` numbers in the window. Each time the sliding window moves right by one position. Return the maximum of the sliding window.
5. **Minimum Window Substring:**
    * Given two strings `s` and `t`, return the minimum window in `s` which will contain all the characters in `t`. If there is no such window, return the empty string "".

## Tips for Practice

* **Visualize:** Draw out the sliding window as it moves through the array or string.
* **Understand the Conditions:** Pay close attention to the conditions for expanding and shrinking the window.
* **Data Structures:** Consider using hash maps or dictionaries to efficiently track character frequencies or other relevant data.
* **Edge Cases:** Always think about edge cases, such as empty arrays or strings, or invalid window sizes.
