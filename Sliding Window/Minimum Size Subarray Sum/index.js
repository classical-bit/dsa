const { RunSolutions } = require("../../HelperFunctions");

const problems = [
    { nums: [2, 3, 1, 2, 4, 3], minSum: 7 }
]

const solveUsingBruteForce = ({ nums, minSum }) => {
    let minlen = Infinity;
    for (let i = 0; i < nums.length; i++) {
        let currSum = 0;
        for (let j = i; j < nums.length; j++) {
            currSum += nums[j];
            if (currSum >= minSum) {
                minlen = Math.min(minlen, j - i + 1);
                break;
            }
        }
    }
    return minlen !== Infinity ? minlen : 0;
}

// RunSolutions(problems, solveUsingBruteForce);

const solveUsingSlidingWindow = ({ nums, minSum }) => {
    let start = 0;
    let minlen = Infinity;
    let currentSum = 0;
    for (let end = 0; end < nums.length; end++) {
        currentSum += nums[end];

        while (currentSum >= minSum) {
            if (end - start + 1 < minlen) {
                minlen = end - start + 1;
            }
            currentSum -= nums[start++];
        }
    }
    return minlen !== Infinity ? minlen : 0;
}

RunSolutions(problems, solveUsingSlidingWindow);