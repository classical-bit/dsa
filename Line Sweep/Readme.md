# Line Sweep Problems

## Easy to Medium Difficulty

* **Meeting Rooms:**
    * Given an array of meeting time intervals `intervals` where `intervals[i] = [starti, endi]`, determine if a person could attend all meetings.
* **Merge Intervals:**
    * Given an array of intervals `intervals` where `intervals[i] = [starti, endi]`, merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

## Medium to Hard Difficulty

* **Meeting Rooms II:**
    * Given an array of meeting time intervals `intervals` where `intervals[i] = [starti, endi]`, return the minimum number of conference rooms required.
* **Employee Free Time:**
    * We are given a list `schedule` of employees, which represents the working time for each employee.
    * Each employee has a list of non-overlapping `Intervals`, and these intervals are in sorted order.
    * Return a list of finite intervals representing the common free time for all employees.
* **My Calendar I:**
    * Implement a `MyCalendar` class to store your events. A new event can be added if adding the event will not cause double booking.
    * Your class will have the method, `book(int start, int end)`. Formally, this represents a booking on the half open interval `[start, end)`, which means the range `start <= x < end`.
    * Return `true` if the event can be added, else return `false` and do not add it.
* **My Calendar II:**
    * Implement a `MyCalendarTwo` class to store your events. A new event can be added if adding the event will not cause triple booking.
    * Your class will have the method `book(int start, int end)`. Formally, this represents a booking on the half open interval `[start, end)`, which means the range `start <= x < end`.
    * Return `true` if the event can be added, else return `false` and do not add it.
* **Skyline Problem:**
    * A city's skyline is the outer contour of the silhouette formed by all the buildings in that city when viewed from a distance. Now suppose you are given the locations and height of all the buildings as shown on a cityscape photograph (Figure A), write a program to output the skyline formed by these buildings collectively (Figure B).
* **Number of Airplanes in the Sky:**
    * Given an array of airplane's flight time intervals represented by start and end time `[[1, 10], [2, 3], [5, 8], [4, 7]]`, find the maximum number of airplanes within the sky at the same time.

## Tips for Practice

* **Event Points:**
    * Convert intervals into event points (start and end points) with associated types (start or end).
* **Sorting Events:**
    * Sort the event points by their time, and handle ties appropriately (e.g., start points before end points).
* **Maintaining State:**
    * Use a counter or other data structure to maintain the current state (e.g., the number of overlapping intervals).
* **Processing Events:**
    * Iterate through the sorted event points and update the state based on the event type.
* **Overlapping Intervals:**
    * Line sweep is particularly useful for problems involving overlapping intervals or ranges.
* **Geometric Problems:**
    * Line sweep can be applied to various geometric problems, such as finding intersections or calculating areas.
* **Edge Cases:**
    * Consider edge cases like empty intervals, overlapping intervals with the same start or end times, and cases where the start time is equal to the end time.
* **Time and Space Complexity:**
    * Analyze the time and space complexity of your solutions. Line sweep solutions often have time complexity O(n log n) due to sorting.
* **Visualization:**
    * Drawing diagrams of the intervals and the line sweep process can help you understand the algorithm's flow.