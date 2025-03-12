# Topological Sort Problems

## Easy to Medium Difficulty

* **Course Schedule:**
    * There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`. You are given an array `prerequisites` where `prerequisites[i] = [ai, bi]` indicates that you must take course `bi` first if you want to take course `ai`.
    * Return `true` if you can finish all courses. Otherwise, return `false`.
* **Course Schedule II:**
    * There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`. You are given an array `prerequisites` where `prerequisites[i] = [ai, bi]` indicates that you must take course `bi` first if you want to take course `ai`.
    * Return the ordering of courses you should take to finish all courses. If it is impossible to finish all courses, return an empty array.

## Medium to Hard Difficulty

* **Alien Dictionary:**
    * There is a new alien language which uses the english alphabet. However, the order among the letters are unknown to you.
    * You are given a list of strings `words` from the alien language's dictionary, now discover the correct order of characters in the alien language.
    * Return the sorted order of the alien language's characters.
* **Task Scheduling Order:**
    * There are `n` tasks labeled from `0` to `n-1`. Each task has a list of prerequisite tasks that must be completed before it can be started. Given the number of tasks and a list of prerequisite pairs, find a scheduling order of the tasks that can be completed.
* **Longest Increasing Path in a Matrix:**
    * Given an `m x n` integers matrix, return the length of the longest increasing path in matrix.
    * From each cell, you can either move in four directions: left, right, up, or down. You may not move diagonally or move outside of the boundary (i.e., wrap around).

## Tips for Practice

* **Directed Acyclic Graphs (DAGs):**
    * Topological sort only applies to DAGs. If a graph contains cycles, topological sort is not possible.
* **Indegree:**
    * Understand the concept of indegree (the number of incoming edges to a node).
    * Nodes with indegree 0 are the starting points for topological sort.
* **Queue (BFS):**
    * BFS is commonly used to implement topological sort.
    * Nodes with indegree 0 are added to the queue, and their neighbors' indegrees are decremented.
* **Stack (DFS):**
    * DFS can also be used to implement topological sort.
    * Nodes are added to a stack in reverse topological order.
* **Cycle Detection:**
    * Be able to detect cycles in a graph to determine if topological sort is possible.
* **Edge Cases:**
    * Consider empty graphs, graphs with no prerequisites, and graphs with cycles.
* **Visualization:**
    * Drawing the graph and visualizing the traversal can help you understand the algorithm's flow.
* **Applications:**
    * Topological sort has applications in scheduling tasks, dependency resolution, and course scheduling.