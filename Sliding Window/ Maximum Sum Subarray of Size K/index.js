const { RunSolutions } = require("../../HelperFunctions/index.js")

const problems = [
    { arr: [1, 4, 2, 10, 23, 3, 1, 0, 20], windowSize: 4 },
    { arr: [100, 200, 300, 400], windowSize: 2 },
    { arr: [1, 2, 3, 4, 5], windowSize: 1 },
    { arr: [-1, -2, -3, -4, -5], windowSize: 2 },
]

/**
 * 
 * Brute Force Approach:
 */

const solveUsingBruteForce = (problem) => {
    const subArrSums = [];
    for (let i = 0; i <= problem.arr.length - problem.windowSize; i++) {
        let subArrSum = 0;
        for (let j = i; j < i + problem.windowSize; j++) {
            subArrSum += problem.arr[j];
        }
        subArrSums.push(subArrSum);
    }
    const result = Math.max(...subArrSums);
    return result;
}

// RunSolutions(problems, solveUsingBruteForce);

/**
 * This solution is correct in that it will find the maximum sum subarray of size k. 
 * However, it's not the most efficient approach. Let's break down why and how it compares to the sliding window method.
 *
 * **How This Solution Works:**
 *
 * - **Outer Loop:**
 * - Iterates through the array, starting from index 0 and going up to `problem.arr.length - problem.windowSize`. 
 * - This ensures that there's always enough room for a subarray of size `problem.windowSize`.
 * - **Inner Loop:**
 * - For each starting index `i`, the inner loop calculates the sum of the subarray of size `problem.windowSize` starting at `i`.
 * - **Storing Subarray Sums:**
 * - The calculated `subArrSum` is pushed into the `subArrSums` array.
 * - **Finding the Maximum:**
 * - Finally, `Math.max(...subArrSums)` finds the maximum value in the `subArrSums` array, which is the maximum sum subarray.
 *
 * **Time Complexity:**
 *
 * - The outer loop runs `n - k + 1` times (where `n` is the length of the array and `k` is the window size).
 * - The inner loop runs `k` times for each iteration of the outer loop.
 * - Therefore, the time complexity is O((n - k + 1) * k), which simplifies to O(n * k) in the worst case.
 *
 * **Space Complexity:**
 *
 * - The `subArrSums` array stores `n - k + 1` sums.
 * - Therefore, the space complexity is O(n - k + 1), which simplifies to O(n) in the worst case.
 *
 * **Why the Sliding Window is More Efficient:**
 *
 * - The sliding window technique achieves a time complexity of O(n) because it avoids recalculating the entire sum for each subarray. 
 * - It only updates the sum by adding and subtracting elements as the window slides.
 * - The sliding window technique can be implemented with O(1) space complexity, as it does not need to store all the sums of the subarrays.
 *
 * **When This Solution Might Be Acceptable:**
 *
 * - If the array size `n` and the window size `k` are relatively small, the performance difference between this solution and the sliding window method might be negligible.
 * - If readability is more important than absolute performance, and the context of the problem does not require maximum optimization.
 *
 * **In summary:**
 *
 * - This solution is functional but less efficient than the sliding window approach. 
 * - If performance is a key consideration, especially for larger arrays and window sizes, the sliding window is the preferred method.
 */

/**
 * 
 * Sliding Window Approach:
 */

const solveUsingSlidingWindow = (problem) => {
    let maxSum = 0;
    let currentSum = 0;

    for (let i = 0; i < problem.windowSize; i++) {
        currentSum += problem.arr[i];
    }

    // Slide window
    maxSum = currentSum;
    for (let i = problem.windowSize; i < problem.arr.length; i++) {
        currentSum = currentSum - problem.arr[i - problem.windowSize] + problem.arr[i];
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

RunSolutions(problems, solveUsingSlidingWindow);

/**
 * **Time Complexity:**
 *
 * - **Initialization:** The first `for` loop iterates `k` times, which is O(k).
 * - **Sliding Window:** The second `for` loop iterates `arr.length - k` times, which is O(n - k). 
 * In the worst case, where `k` is much smaller than `n`, this simplifies to O(n).
 * - **Operations inside the loops:** All operations inside the loops (addition, subtraction, comparison) are constant time, O(1).
 * - **Overall:** Therefore, the overall time complexity is O(k) + O(n - k), which simplifies to O(n), 
 * where `n` is the length of the input array `arr`.
 *
 * **Space Complexity:**
 *
 * - **Variables:** The function uses a few variables: `maxSum`, `currentSum`, and `i`. 
 * These variables occupy constant space, O(1).
 * - **Input Array:** The input array `arr` is not modified, so it doesn't contribute to the auxiliary space complexity.
 * - **Overall:** Therefore, the overall space complexity is O(1), meaning it uses constant extra space.
 */