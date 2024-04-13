function top(stack) {
    return stack[stack.length - 1];
}

function isempty(arr) {
    return arr.length < 1;
}

function compare(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        throw new Error('cannot compare different size array!');
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            console.log(false);
            return false;
        }
    }
    console.log(true);
    return true;
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
//[ 4,10, 6, 1, 2, 3, 6, 9, 4, 3, 5, 1]  
//  0, 1, 2, 3, 4, 5, 6, 7, 8, 9,10,11
const nsbi_solution = [2, 1, 2, 11, 10, 10, 7, 7, 8, 10, 10, 11]
const psbi_solution = [0, 1, 1, 0, 4, 5, 6, 7, 6, 5, 10, 0]
const area_soltion = [12, 10, 12, 12, 14, 18, 12, 9, 12, 18, 5, 12]

const arr = [4, 10, 6, 1, 2, 3, 6, 9, 4, 3, 5, 1];

function nsbi() {
    const st = [];
    const nsbi = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        while (!isempty(st) && arr[top(st)] >= arr[i])
            st.pop()

        if (isempty(st))
            nsbi[i] = arr.length - 1;
        else
            nsbi[i] = top(st) - 1;

        st.push(i);
    }
    console.log(JSON.stringify(nsbi));
    compare(nsbi, nsbi_solution);
    return nsbi;
}

function psbi() {
    const st = [];
    const psbi = [];
    for (let i = 0; i < arr.length; i++) {
        while (!isempty(st) && arr[top(st)] >= arr[i])
            st.pop();
        if (isempty(st)) psbi[i] = 0;
        else psbi[i] = top(st) + 1;

        st.push(i);
    }

    console.log(JSON.stringify(psbi));
    compare(psbi, psbi_solution);
    return psbi;
}

function rect_area() {
    const ans = [];
    const nsb = nsbi();
    const psb = psbi();

    for (let i = 0; i < arr.length; i++) {
        ans[i] = (nsb[i] - psb[i] + 1) * arr[i];
    }

    console.log(JSON.stringify(ans));
    compare(ans, area_soltion);
}

nsbi();
psbi();
rect_area();