# Top K Elements Problems

## Easy to Medium Difficulty

1. [ ] **Kth Largest Element in an Array:**
    * Given an integer array `nums` and an integer `k`, return the `k`th largest element in the array.
    * Note that it is the `k`th largest element in the sorted order, not the `k`th distinct element.
2. [ ] **K Closest Points to Origin:**
    * Given an array of `points` where `points[i] = [xi, yi]` represents a point on the X-Y plane and an integer `k`, return the `k` closest points to the origin `(0, 0)`.
    * The distance between two points on the X-Y plane is the Euclidean distance.
3. [ ] **Top K Frequent Elements:**
    * Given an integer array `nums` and an integer `k`, return the `k` most frequent elements. You may return the answer in any order.
4. [ ] **Kth Largest Element in a Stream:**
    * Design a class to find the `k`th largest element in a stream. Note that it is the `k`th largest element in the sorted order, not the `k`th distinct element.
    * Implement the `KthLargest` class:
        * `KthLargest(int k, int[] nums)` Initializes the object with the integer `k` and the stream `nums`.
        * `int add(int val)` Appends the integer `val` to the stream and returns the element representing the `k`th largest element in the stream.

## Medium to Hard Difficulty

1. [ ] **Top K Frequent Words:**
    * Given an array of strings `words` and an integer `k`, return the `k` most frequent strings.
    * Return the answer sorted by the frequency from highest to lowest. Sort the words with the same frequency by their lexicographical order.
2. [ ] **Find K Closest Elements:**
    * Given a sorted integer array `arr`, two integers `k` and `x`, return the `k` closest integers to `x` in the array. The result should also be sorted in ascending order.
    * An integer `a` is closer to `x` than an integer `b` if:
        * `|a - x| < |b - x|`, or
        * `|a - x| == |b - x|` and `a < b`.
3. [ ] **Connect Ropes to Minimize Cost:**
    * Given `n` ropes of different lengths, we need to connect these ropes into one rope. The cost to connect two ropes is equal to the sum of their lengths. We need to connect the ropes with minimum cost.
4. [ ] **Frequency Sort:**
    * Given an array of integers `nums`, sort the array in increasing order based on the frequency of the values. If multiple values have the same frequency, sort them in decreasing order.
5. [ ] **Task Scheduler:**
    * Given a characters array `tasks`, representing the tasks a CPU needs to do, where each letter represents a different task. Tasks could be done in any order unless there is a cooling period `n`.
    * Return the least number of units of times that the CPU will take to finish all the given tasks.

## Tips for Practice

* **Heaps (Priority Queues):**
    * Min-heaps and max-heaps are the primary data structures used.
    * Understand when to use a min-heap versus a max-heap.
* **Hash Maps (Dictionaries):**
    * Hash maps are often used to count the frequency of elements.
* **Sorting:**
    * Sometimes, sorting can be used, but heaps are generally more efficient for top-k problems.
* **Edge Cases:**
    * Consider empty arrays, invalid `k` values, and duplicate elements.
* **Time and Space Complexity:**
    * Pay attention to the time and space complexity of your solutions.
    * Heaps allow for O(nlogk) time complexity, which is often optimal.
