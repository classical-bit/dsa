# Backtracking Problems

## Easy to Medium Difficulty

1. [ ] **Permutations:**
    * Given an array `nums` of distinct integers, return all the possible permutations. You can return the answer in any order.
2. [ ] **Combinations:**
    * Given two integers `n` and `k`, return all possible combinations of `k` numbers chosen from the range `[1, n]`.
    * You may return the answer in any order.
3. [ ] **Subsets:**
    * Given an integer array `nums` of unique elements, return all possible subsets (the power set).
    * The solution set must not contain duplicate subsets. Return the solution in any order.
4. [ ] **Generate Parentheses:**
    * Given `n` pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

## Medium to Hard Difficulty

1. [ ] **N-Queens:**
    * The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.
    * Given an integer n, return all distinct solutions to the n-queens puzzle.
2. [ ] **Sudoku Solver:**
    * Write a program to solve a Sudoku puzzle by filling the empty cells.
    * A sudoku solution must satisfy all of the following rules:
        * Each of the digits 1-9 must occur exactly once in each row.
        * Each of the digits 1-9 must occur exactly once in each column.
        * Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
    * Empty cells are indicated by the character '.'.
3. [ ] **Combination Sum:**
    * Given an array of distinct integers `candidates` and a target integer `target`, return a list of all unique combinations of `candidates` where the chosen numbers sum to `target`.
    * You may return the combinations in any order.
    * The same number may be chosen from `candidates` an unlimited number of times.
4. [ ] **Combination Sum II:**
    * Given a collection of candidate numbers (`candidates`) and a target number (`target`), find all unique combinations in `candidates` where the candidate numbers sum to `target`.
    * Each number in `candidates` may only be used once in one combination.
    * Note: The solution set must not contain duplicate combinations.
5. [ ] **Word Search:**
    * Given an `m x n` board of characters and a string `word`, return `true` if `word` exists in the board.
    * The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring.
    * The same letter cell may not be used more than once in a word.
6. [ ] **Palindrome Partitioning:**
    * Given a string `s`, partition `s` such that every substring of the partition is a palindrome. Return all possible palindrome partitions of `s`.

## Tips for Practice

* **Recursive Structure:**
    * Backtracking is inherently recursive. Understand how to break down the problem into smaller subproblems.
* **Choice Tree:**
    * Visualize the problem as a choice tree, where each node represents a choice and each path represents a potential solution.
* **State Tracking:**
    * Keep track of the current state of the solution (e.g., the current permutation, the current board configuration).
* **Constraints and Pruning:**
    * Identify the constraints that the solution must satisfy and use them to prune the search space.
* **Base Cases:**
    * Define clear base cases that terminate the recursion.
* **Backtracking Step:**
    * Understand the backtracking step, which involves undoing a choice and exploring other possibilities.
* **Edge Cases:**
    * Consider edge cases like empty inputs, invalid inputs, and cases with no solutions.
* **Time and Space Complexity:**
    * Analyze the time and space complexity of your solutions. Backtracking solutions often have exponential time complexity.
* **Visualization:**
    * Drawing the choice tree and tracing the recursive calls can help you understand the algorithm's flow.
* **Optimization:**
    * Look for opportunities to optimize the search space by pruning branches early.
