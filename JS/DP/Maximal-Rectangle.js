

// for (const h of )
//     let l, r = 1;
// let i = 0
// while (l < 5 && r < 5) {
//     let maxArea = 0;
//     if (height[r] == 0) {
//         l++;
//     }
//     if (height[r] >= height[l]) {

//     }
// }

function top(stack) {
    return stack[stack.length - 1];
}

function isempty(arr) {
    return arr.length < 1;
}

//    ||
//    ||                ||
//    ||                ||
//    ||                ||
//    || ||          || ||
//    || ||          || ||       ||
// || || ||          || || ||    ||
// || || ||       || || || || || ||
// || || ||    || || || || || || ||
// || || || || || || || || || || || ||
// nge solution: [10, -1, 9, 2, 3, 6, 9, -1, 5, 5, -1]
// pge solution: [-1, -1, 10, 6, 6, 6, 10, 10, 9, 4, 9, 5]

function nge() {
    const arr = [4, 10, 6, 1, 2, 3, 6, 9, 4, 3, 5, 1];
    console.log("arr:", JSON.stringify(arr));

    const st = [];
    const nge = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(`${i}th`, "element", `(${arr[i]})`, "in arr.")
        while (!isempty(st) && top(st) <= arr[i]) {
            console.log("stack not empty, and stack top:", top(st), `(${arr[top(st)]})`, "is less than: ", arr[i]);
            console.log("stack", JSON.stringify(st), "pop!!", top(st), `(${arr[top(st)]})`);
            st.pop();
        }

        if (isempty(st)) {
            console.log("stack is empty, next greater element of", arr[i], "is", -1);
            nge[i] = -1;
        }
        else {
            console.log("stack not empty, next greater element of", arr[i], "is", top(st), `(${arr[top(st)]})`);
            nge[i] = top(st);
        }

        console.log("stack", JSON.stringify(st), "push!!", i, `(${arr[i]})`);
        st.push(arr[i]);
    }

    console.log(JSON.stringify(st))
    console.log(JSON.stringify(nge))
}

function pge() {
    const arr = [4, 10, 6, 1, 2, 3, 6, 9, 4, 3, 5, 1];
    console.log("arr:", JSON.stringify(arr));

    const st = [];
    const nge = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(`${i}th`, "element", `(${arr[i]})`, "in arr.")
        while (!isempty(st) && top(st) <= arr[i]) {
            console.log("stack not empty, and stack top:", top(st), `(${arr[top(st)]})`, "is less than: ", arr[i]);
            console.log("stack", JSON.stringify(st), "pop!!", top(st), `(${arr[top(st)]})`);
            st.pop();
        }

        if (isempty(st)) {
            console.log("stack is empty, next greater element of", arr[i], "is", -1);
            nge[i] = -1;
        }
        else {
            console.log("stack not empty, next greater element of", arr[i], "is", top(st), `(${arr[top(st)]})`);
            nge[i] = top(st);
        }

        console.log("stack", JSON.stringify(st), "push!!", i, `(${arr[i]})`);
        st.push(arr[i]);
    }

    console.log(JSON.stringify(st))
    console.log(JSON.stringify(nge))
}

nge()