
function main() {
    const n = 3;
    for (let i = 0; i < n; i++) {
        const line = [];
        for (let j = 0; j < i + 1; j++) {
            line.push(j + 1);
        }
        for (let j = 0; j < 2 * n - 2 * (i + 1); j++) {
            line.push(" ");
        }
        for (let j = i; j >= 0; j--) {
            line.push(j + 1);
        }
        console.log(line.join(""));
    }
}

/**
 * 1    1 [1, 4, 1]
 * 12  21 [2, 2, 2]
 * 123321 [3, 0, 3]
 */
main();