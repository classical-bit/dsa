const { RunSolutions } = require("../../HelperFunctions")

const problems = [
    // { str: "abcabcbb" },
    { str: "bbbbbcaaaaaaaaaaxyncadfwerhqkkg" },
    // { str: "pwwkew" },
    // { str: "" },
]

const solveUsingBruteForce = ({ str }) => {
    let maxlen = 0;
    for (let i = 0; i < str.length; i++) {
        const charmap = new Map();
        for (let j = i; j < str.length; j++) {
            charmap.set(str[j], (charmap.get(str[j]) || 0) + 1);
            if (charmap.get(str[j]) > 1) {
                break;
            }
            maxlen = Math.max(maxlen, j - i + 1)
        }
    }
    return maxlen;
}

// RunSolutions(problems, solveUsingBruteForce);

const solveUsingSlidingWindow = ({ str }) => {
    let left = 0;
    let maxlen = 0;
    const charmap = new Map();
    for (let right = 0; right < str.length; right++) {
        charmap.set(str[right], (charmap.get(str[right]) || 0) + 1);
        while (charmap.get(str[right]) > 1) {
            charmap.set(str[left], charmap.get(str[left]) - 1);
            if (charmap.get(str[left]) === 0) {
                charmap.delete(str[left]);
            }
            left++;
        }
        maxlen = Math.max(maxlen, right - left + 1);
    }
    return maxlen;
}

RunSolutions(problems, solveUsingSlidingWindow);