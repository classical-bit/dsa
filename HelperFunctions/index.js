const RunSolutions = (problems, solve) => {
    problems.forEach((problem, index) => {
        console.log("Problem:", index + 1);
        Object.entries(problem).forEach(([inputKey, inputValue]) => console.log(inputKey, inputValue));
        console.log("Result:", solve(problem));
        console.log();
    });
}

module.exports = { RunSolutions };