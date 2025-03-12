# Union-Find (Disjoint Set) Problems

## Easy to Medium Difficulty

1. [ ] **Number of Connected Components in an Undirected Graph:**
    * Given `n` nodes labeled from `0` to `n - 1` and a list of undirected edges (each edge is a pair of nodes), write a function to find the number of connected components in the undirected graph.
2. [ ] **Redundant Connection:**
    * In this problem, a tree is an undirected graph that is connected and has no cycles.
    * You are given a graph that started as a tree with `n` nodes labeled from `1` to `n`, with one additional edge added. The added edge has two different vertices chosen from `1` to `n`, and was not an edge that already existed.
    * The graph is represented as an array `edges` of length `n` where `edges[i] = [ai, bi]` indicates that there is an edge between nodes `ai` and `bi` in the graph.
    * Return an edge that can be removed so that the resulting graph is a tree of `n` nodes. If there are multiple answers, return the answer that occurs last in the input.

## Medium to Hard Difficulty

1. [ ] **Satisfiability of Equality Equations:**
    * You are given an array of strings `equations` that represent relationships between variables, where each string `equations[i]` has length `4` and takes one of two different forms: `"xi==yi"` or `"xi!=yi"`. Here, `xi` and `yi` are lowercase letters (not necessarily different) that represent one-letter variable names.
    * Return `true` if and only if it is possible to assign integers to the variable names so that all given equality equations are satisfied.
2. [ ] **Number of Islands II:**
    * You are given an `m x n` empty 2D binary grid `grid` initially representing a map of water. We may perform an add land operation which turns the water at position `(row, col)` into a land.
    * Given a list of positions `positions` to add lands, return the number of islands after each add land operation.
3. [ ] **Regions Cut By Slashes:**
    * An `n x n` grid is composed of 1 x 1 squares. Each 1 x 1 square can be divided into two triangles: a top-left to bottom-right diagonal like `/`, or a top-right to bottom-left diagonal like `\`, or be divided into two triangles separated by a horizontal line `-`.
    * Given a list of strings `grid` of length `n` where `grid[i][j]` is either `/`, `\`, or a space, return the number of regions formed by the slashes in the grid.
4. [ ] **Swim in Rising Water:**
    * You are given an `n x n` integer matrix `grid` where `grid[i][j]` represents the elevation of a square cell `(i, j)`.
    * You start at the top-left square `(0, 0)`. At each time step `t`, you can move to an adjacent square `(i, j)` if `grid[i][j] <= t`. You will stop when you reach the bottom-right square `(n - 1, n - 1)`.
    * Return the least time `t` so that you can reach the bottom-right square.

## Tips for Practice

* **Find Operation:**
    * Understand the `find` operation, which returns the root (representative) of a set.
* **Union Operation:**
    * Understand the `union` operation, which merges two sets.
* **Path Compression:**
    * Implement path compression to optimize the `find` operation.
* **Union by Rank/Size:**
    * Implement union by rank or union by size to optimize the `union` operation.
* **Cycle Detection:**
    * Use Union-Find to detect cycles in undirected graphs.
* **Connectivity:**
    * Use Union-Find to determine if two nodes are connected.
* **Edge Cases:**
    * Consider empty graphs, graphs with single nodes, and graphs with cycles.
* **Time and Space Complexity:**
    * Analyze the time and space complexity of your solutions. Union-Find with path compression and union by rank/size has near-constant time complexity for each operation.
* **Applications:**
    * Union-Find has applications in network connectivity, clustering, and maze generation.
* **Visualization:**
    * Drawing diagrams of the sets and tracing the `find` and `union` operations can help you understand the algorithm's flow.
