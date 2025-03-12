# Bitwise XOR Problems

## Easy to Medium Difficulty

1. **Single Number:**
    * Given a non-empty array of integers `nums`, every element appears twice except for one. Find that single one.
    * You must implement a solution with a linear runtime complexity and use only constant extra space.
2. **Single Number II:**
    * Given an integer array `nums` where every element appears three times except for one, which appears exactly once. Find the single element and return it.
3. **Missing Number:**
    * Given an array `nums` containing `n` distinct numbers in the range `[0, n]`, return the only number in the range that is missing from `nums`.
4. **XOR Sum of All Subsets:**
    * Given an array of integers `nums`, return the XOR sum of all subsets of `nums`.

## Medium to Hard Difficulty

1. **Find Two Non-overlapping Sub-arrays Each With Target Sum:**
    * Given an array of integers `arr` and an integer `target`.
    * You have to find two non-overlapping sub-arrays of `arr` each with sum `target`.
    * Return the minimum sum of the lengths of the two sub-arrays. If you cannot find such two sub-arrays, return `-1`.
2. **Maximum XOR of Two Numbers in an Array:**
    * Given an integer array `nums`, return the maximum result of `nums[i] XOR nums[j]`, where `0 ≤ i ≤ j < n`.
3. **Maximum XOR With an Element From Array:**
    * You are given an array `nums` consisting of non-negative integers. You are also given a `queries` array, where `queries[i] = [xi, mi]`.
    * The answer to the `i`-th query is the maximum bitwise XOR of `xi` and any element of `nums` that does not exceed `mi`. If all elements in `nums` are greater than `mi`, then the answer is `-1`.
    * Return an integer array `answer` where `answer.length == queries.length` and `answer[i]` is the answer to the `i`-th query.
4. **Count Triplets That Can Form Two Arrays of Equal XOR:**
    * Given an array of integers `arr`, return the number of triplets `(i, j, k)` such that `i < j <= k` and `arr[i] ^ arr[i+1] ^ ... ^ arr[j-1] == arr[j] ^ arr[j+1] ^ ... ^ arr[k]`.

## Tips for Practice

* **XOR Properties:**
    * Understand the properties of XOR, such as `a ^ 0 = a`, `a ^ a = 0`, and `a ^ b ^ a = b`.
    * XOR is commutative and associative.
* **Bit Manipulation:**
    * Be comfortable with bit manipulation techniques, such as bit masking, shifting, and checking individual bits.
* **Prefix XOR:**
    * Prefix XOR arrays can be useful for efficiently calculating XOR sums of subarrays.
* **Tries:**
    * Tries are often used for problems involving finding maximum XOR values.
* **Edge Cases:**
    * Consider edge cases like empty arrays, arrays with single elements, and arrays with all duplicate elements.
* **Visualization:**
    * Drawing bit patterns and visualizing XOR operations can help you understand the process.
* **Mathematical Thinking:**
    * Many XOR problems require some mathematical insight to discover the optimal solution.
