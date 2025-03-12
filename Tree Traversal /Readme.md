# Tree Traversal (BFS and DFS) Problems

## Easy to Medium Difficulty (BFS & DFS)

* **Binary Tree Level Order Traversal (BFS):**
    * Given the `root` of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
* **Binary Tree Inorder Traversal (DFS):**
    * Given the `root` of a binary tree, return the inorder traversal of its nodes' values.
* **Binary Tree Preorder Traversal (DFS):**
    * Given the `root` of a binary tree, return the preorder traversal of its nodes' values.
* **Binary Tree Postorder Traversal (DFS):**
    * Given the `root` of a binary tree, return the postorder traversal of its nodes' values.
* **Maximum Depth of Binary Tree (DFS):**
    * Given the `root` of a binary tree, return its maximum depth.
* **Same Tree (DFS):**
    * Given the roots of two binary trees `p` and `q`, write a function to check if they are the same.
* **Symmetric Tree (DFS/BFS):**
    * Given the `root` of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

## Medium to Hard Difficulty (BFS & DFS)

* **Binary Tree Zigzag Level Order Traversal (BFS):**
    * Given the `root` of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).
* **Binary Tree Right Side View (BFS/DFS):**
    * Given the `root` of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.
* **Binary Tree Vertical Order Traversal (BFS/DFS):**
    * Given the `root` of a binary tree, return the vertical order traversal of its nodes' values.
* **Path Sum (DFS):**
    * Given the `root` of a binary tree and an integer `targetSum`, return `true` if the tree has a root-to-leaf path such that adding up all the values along the path equals `targetSum`.
* **Path Sum II (DFS):**
    * Given the `root` of a binary tree and an integer `targetSum`, return *all root-to-leaf paths* where the sum of the node values in the path equals `targetSum`.
* **Lowest Common Ancestor of a Binary Tree (DFS):**
    * Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.
* **Serialize and Deserialize Binary Tree (BFS/DFS):**
    * Design an algorithm to serialize and deserialize a binary tree.

## Tips for Practice

* **BFS (Level Order):**
    * Use a queue to process nodes level by level.
    * Track the level to handle level-specific operations.
* **DFS (Inorder, Preorder, Postorder):**
    * Use recursion or a stack to traverse the tree.
    * Understand the order of visiting nodes (root, left, right).
* **Combine BFS and DFS:**
    * Some problems can be solved using a combination of BFS and DFS.
* **Recursive vs. Iterative:**
    * Practice both recursive and iterative implementations of DFS.
* **Edge Cases:**
    * Consider empty trees, single-node trees, and other edge cases.
* **Visualization:**
    * Draw the tree and trace the traversal to understand the process.