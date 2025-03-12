# Dynamic Programming (DP) Problems

## Easy to Medium Difficulty

1. **Fibonacci Number:**
    * The Fibonacci numbers, commonly denoted `F(n)` form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1.
    * Given `n`, calculate `F(n)`.
2. **Climbing Stairs:**
    * You are climbing a staircase. It takes `n` steps to reach the top.
    * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
3. **Coin Change:**
    * You are given an integer array `coins` representing coins of different denominations and an integer `amount` representing a total amount of money.
    * Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return `-1`.
4. **Maximum Subarray:**
    * Given an integer array `nums`, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

## Medium to Hard Difficulty

1. **Longest Common Subsequence (LCS):**
    * Given two strings `text1` and `text2`, return the length of their longest common subsequence. If there is no common subsequence, return 0.
2. **Longest Increasing Subsequence (LIS):**
    * Given an integer array `nums`, return the length of the longest strictly increasing subsequence.
3. **0/1 Knapsack Problem:**
    * Given weights and values of `n` items, put these items in a knapsack of capacity `W` to get the maximum total value in the knapsack. You cannot break an item, either pick the complete item, or don’t pick it (0-1 property).
4. **Unbounded Knapsack (Coin Change II):**
    * You are given an integer array `coins` representing coins of different denominations and an integer `amount` representing a total amount of money.
    * Return the number of combinations that make up that amount.
5. **Edit Distance:**
    * Given two strings `word1` and `word2`, return the minimum number of operations required to convert `word1` to `word2`.
    * You have the following three operations permitted on a word:
        * Insert a character
        * Delete a character
        * Replace a character
6. **Word Break:**
    * Given a string `s` and a dictionary of strings `wordDict`, return `true` if `s` can be segmented into a space-separated sequence of one or more dictionary words.
7. **Maximum Product Subarray:**
    * Given an integer array `nums`, find the contiguous subarray within an array (containing at least one number) which has the largest product.

## Tips for Practice

* **Identify Overlapping Subproblems:**
    * DP is suitable for problems where the same subproblems are solved repeatedly.
* **Define the State:**
    * Clearly define the state variables that represent the subproblems.
* **Formulate the Recurrence Relation:**
    * Express the solution to a subproblem in terms of solutions to smaller subproblems.
* **Memoization (Top-Down):**
    * Store the results of subproblems in a table (e.g., a dictionary or array) to avoid recomputation.
* **Tabulation (Bottom-Up):**
    * Build up the solution iteratively, starting from the base cases.
* **Base Cases:**
    * Identify the base cases that can be solved directly.
* **Space Optimization:**
    * Sometimes, you can optimize the space complexity by using only a few variables instead of a full table.
* **Visualize the DP Table:**
    * Drawing the DP table and tracing the dependencies can help you understand the solution.
* **Understand the Problem Constraints:**
    * Knowing the input size and constraints helps in choosing the appropriate DP approach.
