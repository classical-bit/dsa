# Fast and Slow Pointers Problems

## Easy to Medium Difficulty

1. **Linked List Cycle:**
    * Given the `head` of a linked list, determine if the linked list has a cycle in it.
    * There is a cycle in a linked list if some node in the list can be reached again by continuously following the `next` pointer.
    * Return `true` if there is a cycle in the linked list. Otherwise, return `false`.
2. **Middle of the Linked List:**
    * Given the `head` of a singly linked list, return the middle node of the linked list.
    * If there are two middle nodes, return the second middle node.
3. **Happy Number:**
    * Write an algorithm to determine if a number `n` is happy.
    * A happy number is a number defined by the following process:
        * Starting with any positive integer, replace the number by the sum of the squares of its digits.
        * Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
        * Those numbers for which this process ends in 1 are happy.
    * Return `true` if `n` is a happy number. Otherwise, return `false`.
4. **Palindrome Linked List:**
    * Given the `head` of a singly linked list, return `true` if it is a palindrome.

## Medium to Hard Difficulty

1. **Linked List Cycle II:**
    * Given the `head` of a linked list, return the node where the cycle begins. If there is no cycle, return `null`.
    * There is a cycle in a linked list if some node in the list can be reached again by continuously following the `next` pointer.
2. **Reorder List:**
    * You are given the `head` of a singly linked list.
    * Reorder the list so that: `L0 → Ln → L1 → Ln-1 → L2 → Ln-2 → ...`
    * You may not modify the values in the list's nodes. Only nodes themselves may be changed.
3. **Rotate List:**
    * Given the `head` of a linked list, rotate the list to the right by `k` places.
4. **Find the Duplicate Number:**
    * Given an array of integers `nums` containing `n + 1` integers where each integer is in the range `[1, n]` inclusive.
    * There is only **one repeated number** in `nums`, return *this repeated number*.
    * You must solve the problem without modifying the array `nums` and uses only constant extra space.

## Tips for Practice

* **Visualize Pointer Movement:** Draw linked lists and trace the movement of the fast and slow pointers.
* **Cycle Detection:** Understand how the fast and slow pointers meet when there is a cycle.
* **Middle Node:** The slow pointer will reach the middle node when the fast pointer reaches the end.
* **Mathematical Relationships:** Happy Number and Find the Duplicate number, use the fast and slow pointer concept to find cycles in a sequence.
* **Edge Cases:** Consider empty lists, lists with one node, and other edge cases.
