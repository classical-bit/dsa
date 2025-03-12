# Subsets Problems

## Easy to Medium Difficulty

* **Subsets:**
    * Given an integer array `nums` of unique elements, return all possible subsets (the power set).
    * The solution set must not contain duplicate subsets. Return the solution in any order.
* **Subsets II:**
    * Given an integer array `nums` that may contain duplicates, return all possible subsets (the power set).
    * The solution set must not contain duplicate subsets. Return the solution in any order.
* **Combinations:**
    * Given two integers `n` and `k`, return all possible combinations of `k` numbers chosen from the range `[1, n]`.
    * You may return the answer in any order.

## Medium to Hard Difficulty

* **Permutations:**
    * Given an array `nums` of distinct integers, return all the possible permutations. You can return the answer in any order.
* **Permutations II:**
    * Given a collection of numbers, `nums`, that might contain duplicates, return all possible unique permutations *in any order*.
* **Combination Sum:**
    * Given an array of distinct integers `candidates` and a target integer `target`, return a list of all unique combinations of `candidates` where the chosen numbers sum to `target`.
    * You may return the combinations in any order.
    * The same number may be chosen from `candidates` an unlimited number of times.
* **Combination Sum II:**
    * Given a collection of candidate numbers (`candidates`) and a target number (`target`), find all unique combinations in `candidates` where the candidate numbers sum to `target`.
    * Each number in `candidates` may only be used once in one combination.
    * Note: The solution set must not contain duplicate combinations.
* **Palindrome Partitioning:**
    * Given a string `s`, partition `s` such that every substring of the partition is a palindrome. Return all possible palindrome partitions of `s`.
* **Generate Parentheses:**
    * Given `n` pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

## Tips for Practice

* **Recursion:**
    * Many subset problems are best solved using recursion.
    * Understand how to build up subsets by making choices at each step.
* **Backtracking:**
    * Backtracking is often used in conjunction with recursion to explore all possible combinations.
    * Learn how to backtrack when a choice leads to an invalid solution.
* **Bit Manipulation:**
    * For subsets of unique elements, bit manipulation can be used to generate all possible subsets efficiently.
* **Handling Duplicates:**
    * When dealing with duplicates, pay attention to how to avoid generating duplicate subsets.
    * Sorting the input array and using conditional logic can help.
* **Combinations vs. Permutations:**
    * Understand the difference between combinations (order doesn't matter) and permutations (order matters).
* **Base Cases:**
    * Clearly define the base cases for your recursive functions.
* **Visualize:**
    * Drawing recursion trees or visualizing the choices being made can help you understand the process.