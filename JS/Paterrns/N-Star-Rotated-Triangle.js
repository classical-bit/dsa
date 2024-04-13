
function main() {
    const n = 3;
    for (let i = 0; i < 2 * n - 1; i++) {
        let stars = i + 1;
        if (i > n - 1) stars = 2 * n - i - 1;
        const line = [];
        for (let j = 0; j < stars; j++) {
            line.push("*");
        }
        console.log(line.join(""));
    }

}

main();