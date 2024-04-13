function top(stack) {
    return stack[stack.length - 1];
}

function isempty(arr) {
    return arr.length < 1;
}

const arr = [
    [1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [0, 1, 1, 0, 1]
];

function nsbi(ar) {
    const st = [];
    const nsb = [];
    for (let i = ar.length - 1; i >= 0; i--) {
        while (!isempty(st) && ar[top(st)] >= ar[i])
            st.pop();

        if (isempty(st)) nsb[i] = ar.length - 1;
        else nsb[i] = top(st) - 1;

        st.push(i);
    }
    return nsb;
}

function psbi(ar) {
    const st = [];
    const psb = [];
    for (let i = 0; i < ar.length; i++) {
        while (!isempty(st) && ar[top(st)] >= ar[i])
            st.pop();

        if (isempty(st)) psb[i] = 0;
        else psb[i] = top(st) + 1;

        st.push(i);
    }
    return psb;
}

function maxRectAreaInHist(ar) {
    const nsb = nsbi(ar);
    const psb = psbi(ar);
    let maxRectHistArea = 0;
    for (let i = 0; i < ar.length; i++) {
        area = (nsb[i] - psb[i] + 1) * ar[i];
        if (area > maxRectHistArea) {
            maxRectHistArea = area;
        }
    }
    return maxRectHistArea;
}

let maxRectArea = 0;
const sumArr = [];
let k = 0;
while (k < arr.length) {
    for (let i = 0; i < arr[k].length; i++) {
        if (arr[k][i] === 0) {
            sumArr[i] = 0;
        } else {
            if (!sumArr[i]) sumArr[i] = 1;
            else sumArr[i] = sumArr[i] + 1;
        }
    }

    const maxRectHistArea = maxRectAreaInHist(sumArr);

    if (maxRectHistArea > maxRectArea) {
        maxRectArea = maxRectHistArea;
    }
    k++;
}

console.log(maxRectArea);

