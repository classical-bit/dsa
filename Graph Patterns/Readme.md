# Graph Patterns Problems

## Easy to Medium Difficulty

1. **Number of Islands (DFS/BFS):**
    * Given an `m x n` 2D binary grid `grid` which represents a map of `'1'`s (land) and `'0'`s (water), return the number of islands.
    * An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
2. **Flood Fill (DFS/BFS):**
    * An image is represented by an `m x n` integer grid `image` where `image[i][j]` represents the pixel value of the image.
    * Given three integers `sr`, `sc`, and `color` also given an integer `newColor`, perform a flood fill on the image starting from the pixel `image[sr][sc]`.
    * To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with `newColor`.
    * Return the modified image.
3. **Clone Graph (BFS/DFS):**
    * Given a reference of a node in a connected undirected graph.
    * Return a deep copy (clone) of the graph.
4. **Binary Tree Level Order Traversal (BFS):**
    * While technically a tree problem, it can be viewed as a graph problem, and is a good use of BFS.
    * Given the `root` of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

## Medium to Hard Difficulty

1. **Dijkstra's Algorithm (Shortest Path):**
    * Given a weighted graph, find the shortest paths from a single source node to all other nodes.
2. **Bellman-Ford Algorithm (Shortest Path with Negative Weights):**
    * Given a weighted graph, find the shortest paths from a single source node to all other nodes, even if there are negative edge weights.
3. **Topological Sort (DAG):**
    * Given a directed acyclic graph (DAG), find a linear ordering of its nodes such that for every directed edge from node A to node B, node A comes before node B in the ordering.
4. **Minimum Spanning Tree (MST - Prim's or Kruskal's):**
    * Given a connected, undirected, weighted graph, find a subset of the edges that forms a tree that includes every vertex, where the total weight of all the edges in the tree is minimized.
5. **Word Ladder (BFS):**
    * Given two words, `beginWord` and `endWord`, and a dictionary `wordList`, find the length of the shortest transformation sequence from `beginWord` to `endWord`, such that:
        * Only one letter can be changed at a time.
        * Each transformed word must exist in the word list.
6. **Course Schedule II (Topological Sort):**
    * Return the ordering of courses you should take to finish all courses. If it is impossible to finish all courses, return an empty array.
7. **Bipartite Graph (BFS/DFS):**
    * Given an undirected graph, determine if it is bipartite.
    * A bipartite graph is a graph whose vertices can be divided into two disjoint and independent sets U and V such that every edge connects a vertex in U to one in V.

## Tips for Practice

* **Graph Representations:**
    * Understand how to represent graphs using adjacency lists and adjacency matrices.
* **BFS vs. DFS:**
    * Know when to use BFS (shortest paths, level-order traversal) and when to use DFS (cycle detection, path finding).
* **Shortest Path Algorithms:**
    * Learn Dijkstra's algorithm for positive weights and Bellman-Ford for negative weights.
* **Minimum Spanning Trees:**
    * Understand Prim's and Kruskal's algorithms for finding MSTs.
* **Topological Sort:**
    * Master topological sort for DAGs and dependency problems.
* **Cycle Detection:**
    * Be able to detect cycles in both directed and undirected graphs.
* **Edge Cases:**
    * Consider disconnected graphs, empty graphs, and graphs with cycles.
* **Visualization:**
    * Drawing diagrams of graphs and tracing traversals can help you understand the algorithms.
* **Understand the Problem Constraints:**
    * Knowing the input size and constraints helps in choosing the appropriate algorithm.
