# Memoization/Tabulation Problems (Dynamic Programming Techniques)

## Easy to Medium Difficulty

* **Fibonacci Number:**
    * Calculate the nth Fibonacci number using both memoization and tabulation.
* **Climbing Stairs:**
    * Find the number of distinct ways to climb `n` stairs using memoization and tabulation.
* **Coin Change:**
    * Determine the fewest number of coins needed to make up a given amount using memoization and tabulation.
* **Maximum Subarray:**
    * Find the contiguous subarray with the largest sum using tabulation (Kadane's Algorithm can be considered a space-optimized tabulation).

## Medium to Hard Difficulty

* **Longest Common Subsequence (LCS):**
    * Find the length of the longest common subsequence of two strings using memoization and tabulation.
* **Longest Increasing Subsequence (LIS):**
    * Find the length of the longest increasing subsequence of an array using memoization and tabulation.
* **0/1 Knapsack Problem:**
    * Solve the 0/1 knapsack problem using memoization and tabulation.
* **Unbounded Knapsack (Coin Change II):**
    * Find the number of combinations that make up a given amount using memoization and tabulation.
* **Edit Distance:**
    * Find the minimum number of operations to convert one string to another using memoization and tabulation.
* **Word Break:**
    * Determine if a string can be segmented into a space-separated sequence of dictionary words using memoization and tabulation.
* **Maximum Product Subarray:**
    * Find the contiguous subarray with the largest product using tabulation.

## Tips for Practice

* **Memoization (Top-Down):**
    * Use recursion with a memoization table (e.g., a dictionary or array) to store the results of subproblems.
    * Check the memoization table before making recursive calls to avoid recomputation.
* **Tabulation (Bottom-Up):**
    * Build up the solution iteratively, starting from the base cases.
    * Fill a table (e.g., a 2D array) in a specific order, using the results of previously computed subproblems.
* **Identify Overlapping Subproblems:**
    * Recognize when subproblems are being solved repeatedly, indicating that DP is applicable.
* **Define the State:**
    * Clearly define the state variables that represent the subproblems.
* **Formulate the Recurrence Relation:**
    * Express the solution to a subproblem in terms of solutions to smaller subproblems.
* **Base Cases:**
    * Identify the base cases that can be solved directly.
* **Space Optimization:**
    * In some cases, you can optimize the space complexity of tabulation by using only a few variables instead of a full table.
* **Understand the Trade-offs:**
    * Memoization is often easier to implement but may have higher overhead due to recursive calls.
    * Tabulation is usually more efficient but may require more careful planning of the iteration order.
* **Visualize the DP Table:**
    * Drawing the DP table and tracing the dependencies can help you understand the solution.
* **Understand the Problem Constraints:**
    * Knowing the input size and constraints helps in choosing the appropriate DP approach.