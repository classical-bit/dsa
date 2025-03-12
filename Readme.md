# Data Structures and Algorithms (DSA) Patterns

## Core Patterns

1. [ ] [**Sliding Window:**](https://github.com/classical-bit/dsa/tree/main/Sliding%20Window)
    * Used for problems involving finding subarrays or substrings that meet certain criteria.
    * It involves maintaining a "window" of elements and moving it through the data structure.
    * Useful for optimization, reducing time complexity.
2. [ ] [**Two Pointers:**](https://github.com/classical-bit/dsa/tree/main/Two%20Pointers)
    * Employs two pointers to traverse a data structure, often from opposite ends.
    * Effective for problems involving sorted arrays or linked lists, such as finding pairs or triplets.
    * Helps optimize solutions by reducing unnecessary iterations.
3. [ ] [**Fast and Slow Pointers:**](https://github.com/classical-bit/dsa/tree/main/Two%20PointersFast%20and%20Slow%20Pointers)
    * Also known as the "Hare and Tortoise" algorithm.
    * Uses two pointers that move at different speeds.
    * Commonly used for detecting cycles in linked lists and finding the middle element.
4. [ ] [**Merge Intervals:**](https://github.com/classical-bit/dsa/tree/main/Merge%20Intervals)
    * Deals with problems involving overlapping intervals.
    * Focuses on merging, inserting, or finding intersections of intervals.
    * Useful in scheduling and time-management applications.
5. [ ] [**Cyclic Sort:**](https://github.com/classical-bit/dsa/tree/main/Cyclic%20Sort)
    * Specifically designed for problems involving arrays with numbers in a given range.
    * Leverages the fact that the numbers' indices can be used to sort them efficiently.
    * Helpful for finding missing numbers, duplicate numbers, etc.
6. [ ] [**Tree Traversal (BFS and DFS):**](https://github.com/classical-bit/dsa/tree/main/Tree%20Traversal)
    * **Breadth-First Search (BFS):** Explores a tree level by level, using a queue.
    * **Depth-First Search (DFS):** Explores a tree branch by branch, using a stack (or recursion).
    * Essential for solving tree-related problems, such as finding paths, searching for nodes, and traversing levels.
7. [ ] [**Top K Elements:**](https://github.com/classical-bit/dsa/tree/main/Top%20K%20Elements)
    * Used when you need to find the top "k" largest or smallest elements in a dataset.
    * Often involves using heaps or priority queues.
8. [ ] [**Modified Binary Search:**](https://github.com/classical-bit/dsa/tree/main/Modified%20Binary%20Search)
    * Adaptations of the classic binary search algorithm to solve variations of search problems.
    * Useful for finding the ceiling, floor, or other variations of a target value in a sorted array.
9. [ ] [**Subsets:**](https://github.com/classical-bit/dsa/tree/main/Subsets)
    * Focuses on generating all possible subsets of a given set.
    * Often involves recursive or iterative approaches.

## Intermediate Patterns
10. [ ] [**K-way Merge:**](https://github.com/classical-bit/dsa/tree/main/K-way%20Merge)
    * This pattern is used when you have multiple sorted lists or arrays that need to be merged into a single sorted list.
    * It often utilizes a min-heap to efficiently track the smallest elements from each list.
    * Useful in situations like merging sorted files or processing data streams.
11. [ ] [**Topological Sort:**](https://github.com/classical-bit/dsa/tree/main/Topological%20Sort)
    * Specifically for directed acyclic graphs (DAGs).
    * It produces a linear ordering of vertices such that for every directed edge from vertex A to vertex B, vertex A comes before vertex B in the ordering.
    * Essential for tasks like scheduling dependencies or resolving build orders.
12. [ ] [**Bitwise XOR:**](https://github.com/classical-bit/dsa/tree/main/Bitwise%20XOR)
    * Leverages the properties of the XOR bitwise operation.
    * Useful for problems involving finding missing numbers, single occurrences, or manipulating sets of bits.
13. [ ] [**Dynamic Programming (DP) Patterns:**](https://github.com/classical-bit/dsa/tree/main/Dynamic%20Programming)
    * DP is a broad technique, but it contains recurring patterns:
        * **0/1 Knapsack:** Deals with optimization problems where you have limited capacity and items with values and weights.
        * **Unbounded Knapsack:** Similar to 0/1 Knapsack, but items can be selected multiple times.
        * **Longest Common Subsequence (LCS):** Finds the longest subsequence common to two sequences.
        * **Fibonacci Numbers:** Problems that have overlapping sub problems, that can be solved by storing previous results.
14. [ ] [**Graph Patterns:**](https://github.com/classical-bit/dsa/tree/main/Graph%20Patterns)
    * **Island Problems:** These involve traversing a 2D matrix (grid) to find and analyze "islands" of connected cells.
    * **Dijkstra's Algorithm:** Finds the shortest paths from a single source vertex to all other vertices in a weighted graph.
    * **Bellman-Ford Algorithm:** Finds shortest paths in a weighted graph, including graphs with negative edge weights.

## Advanced/Specialized Patterns

15. [ ] [**Monotonic Stack/Queue:**](https://github.com/classical-bit/dsa/tree/main/Monotonic%20Stack)
    * These patterns utilize stacks or queues to maintain a monotonic (either increasing or decreasing) sequence of elements.
    * They are particularly useful for problems involving finding the next greater element, maximum area histograms, or range maximum queries.
16. [ ] [**Trie (Prefix Tree):**](https://github.com/classical-bit/dsa/tree/main/Trie%20(Prefix%20Tree))
    * A tree-like data structure used for efficient retrieval of keys in a dataset.
    * Extremely useful for problems involving string prefixes, auto-completion, and dictionary-related operations.
17. [ ] [**Union-Find (Disjoint Set):**](https://github.com/classical-bit/dsa/tree/main/Union-Find%20(Disjoint%20Set))
    * A data structure that tracks a set of elements partitioned into a number of disjoint (non-overlapping) subsets.
    * Used for problems involving connectivity, cycle detection in graphs, and network analysis.
18. [ ] [**Backtracking:**](https://github.com/classical-bit/dsa/tree/main/Backtracking)
    * A general algorithmic technique for finding all (or some) solutions to some computational problems, that incrementally builds candidates to the solutions, and abandons each partial candidate ("backtracks") as soon as it determines that this candidate cannot possibly lead to a valid solution.
    * This is very useful for problems like N-Queens, Sudoku solvers, and generating permutations and combinations.
19. [ ] [**Reservoir Sampling:**](https://github.com/classical-bit/dsa/tree/main/Reservoir%20Sampling)
    * A family of randomized algorithms for randomly selecting a sample of k items from a list of n items, where n is either a very large or unknown number.
    * This is very useful for dealing with streaming data.
20. [ ] [**Line Sweep:**](https://github.com/classical-bit/dsa/tree/main/Line%20Sweep)
    * An algorithmic technique where a conceptual "line" is swept across a set of geometric objects, processing them as the line intersects them.
    * This is used for problems involving finding intersections, calculating areas, and scheduling.
21. [ ] [**Memoization/Tabulation:**](https://github.com/classical-bit/dsa/tree/main/Memoization)
    * These are the two main ways to implement Dynamic Programming. Memoization is top down, and tabulation is bottom up. While DP is a pattern in itself, the way that it is implemented can also be seen as a pattern.