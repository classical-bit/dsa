# Merge Intervals Problems

## Easy to Medium Difficulty

1. **Merge Intervals:**
    * Given an array of intervals `intervals` where `intervals[i] = [starti, endi]`, merge all overlapping intervals, and return *an array of the non-overlapping intervals that cover all the intervals in the input*.
2. **Insert Interval:**
    * You are given an array of non-overlapping intervals `intervals` where `intervals[i] = [starti, endi]` sorted in ascending order by `starti`. You are also given an interval `newInterval = [start, end]` that represents the start and end of another interval.
    * Insert `newInterval` into `intervals` such that `intervals` is still sorted in ascending order by `starti` and `intervals` still does not have any overlapping intervals (merge overlapping intervals if necessary).
    * Return `intervals` *after the insertion*.
3. **Interval List Intersections:**
    * You are given two lists of closed intervals, `firstList` and `secondList`, where `firstList[i] = [starti, endi]` and `secondList[j] = [startj, endj]`. Each list of intervals is pairwise disjoint and in sorted order.
    * Return the intersection of these two interval lists.
    * A closed interval `[a, b]` (with `a <= b`) denotes the set of real numbers `x` with `a <= x <= b`.
    * The intersection of two closed intervals is a set of real numbers that is either empty or can be represented as a closed interval. For example, the intersection of `[1, 3]` and `[2, 4]` is `[2, 3]`.

## Medium to Hard Difficulty

1. **Non-overlapping Intervals:**
    * Given an array of intervals `intervals` where `intervals[i] = [starti, endi]`, return *the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping*.
2. **Meeting Rooms II:**
    * Given an array of meeting time intervals `intervals` where `intervals[i] = [starti, endi]`, return *the minimum number of conference rooms required*.
3. **Employee Free Time:**
    * We are given a list `schedule` of employees, which represents the working time for each employee.
    * Each employee has a list of non-overlapping `Intervals`, and these intervals are in sorted order.
    * Return a list of *finite intervals* representing the common free time for *all* employees.
4. **Merge K Sorted Interval Lists:**
    * Given K sorted interval lists, merge all these interval lists into one sorted interval list.

## Tips for Practice

* **Sorting:** Sorting intervals by their start times is often the first step.
* **Overlap Conditions:** Carefully define the conditions for overlapping intervals.
* **Merging Logic:** Understand how to merge overlapping intervals into a single interval.
* **Edge Cases:** Consider empty interval lists, single intervals, and other boundary conditions.
* **Visualization:** Drawing interval diagrams can significantly aid in understanding the merging process.
