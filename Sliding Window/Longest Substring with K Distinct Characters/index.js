const { RunSolutions } = require("../../HelperFunctions/index.js")

const problems = [
    { str: 'araaci', distinctChar: 2 },
    { str: 'cbbebi', distinctChar: 3 },
    { str: 'abaccc', distinctChar: 2 }
]

/**
 * 
 * Brute Force Approach:
 */

const solveUsingBruteForce = (({ str, distinctChar }) => {
    let maxlen = 0;
    for (let i = 0; i < str.length; i++) {
        const charmap = new Map();
        for (let j = i; j < str.length; j++) {
            charmap.set(str[j], (charmap.get(str[j]) || 0) + 1);
            if (charmap.size > distinctChar) {
                break;
            }
            maxlen = Math.max(maxlen, j - i + 1);
        }
    }
    return maxlen;
})

// RunSolutions(problems, solveUsingBruteForce);

/**
 * Sliding Window Approach:
 *
 * Algorithm and Key Concepts:
 *
 * Sliding Window:
 * - We'll use a sliding window approach, where we expand the window to the right
 * until we violate the condition (more than k distinct characters).
 * - Then, we shrink the window from the left until the condition is met again.
 *
 * Character Frequency Map:
 * - We'll use a hash map (or dictionary) to keep track of the frequency of
 * characters within the current window.
 * - This helps us efficiently determine the number of distinct characters.
 *
 * Tracking Distinct Characters:
 * - The size of the frequency map will indicate the number of distinct
 * characters in the current window.
 *
 * Window Expansion and Contraction:
 * - Expansion: If the number of distinct characters is less than or equal to k,
 * we expand the window to the right.
 * - Contraction: If the number of distinct characters exceeds k, we contract
 * the window from the left until the number of distinct characters is back
 * to k or less.
 *
 * Maximum Length:
 * - We'll keep track of the maximum length of the valid substring encountered
 * during the process.
 */

const solveUsingSlidingWindow = (({ str, distinctChar }) => {
    let start = 0;
    let maxlen = 0;
    const charmap = new Map();
    for (let end = 0; end < str.length; end++) {
        charmap.set(str[end], (charmap.get(str[end]) || 0) + 1);
        while (charmap.size > distinctChar) {
            charmap.set(str[start], charmap.get(str[start]) - 1);
            if (charmap.get(str[start]) === 0) {
                charmap.delete(str[start]);
            }
            start++;
        }
        maxlen = Math.max(maxlen, end - start + 1);
    }
    return maxlen;
});

RunSolutions(problems, solveUsingSlidingWindow);