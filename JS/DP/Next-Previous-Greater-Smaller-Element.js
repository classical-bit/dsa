function top(stack) {
    return stack[stack.length - 1];
}

function isempty(arr) {
    return arr.length < 1;
}

//[ 4,10, 6, 1, 2, 3, 6, 9, 4, 3, 5, 1]  
//  0, 1, 2, 3, 4, 5, 6, 7, 8, 9,10,11
const nge_solution = [10, -1, 9, 2, 3, 6, 9, -1, 5, 5, -1, -1]
const pge_solution = [-1, -1, 10, 6, 6, 6, 10, 10, 9, 4, 9, 5]
const nse_solution = [1, 6, 1, -1, 1, 1, 4, 4, 3, 1, 1, -1]
const pse_solution = [-1, 4, 4, -1, 1, 2, 3, 6, 3, 2, 3, -1]

function compare(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        throw new Error('cannot compare different size array!');
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i])
            return false;
    }
    return true;
}

function nge() {
    const arr = [4, 10, 6, 1, 2, 3, 6, 9, 4, 3, 5, 1];
    const st = [];
    const nge = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        while (!isempty(st) && arr[top(st)] <= arr[i])
            st.pop();
        if (isempty(st))
            nge[i] = -1;
        else
            nge[i] = top(st);

        st.push(i);
    }
    console.log(JSON.stringify(nge));
    const sol = nge.map(i => i >= 0 ? arr[i] : -1);
    console.log(JSON.stringify(sol));
    console.log(compare(sol, nge_solution));
}

function pge() {
    const arr = [4, 10, 6, 1, 2, 3, 6, 9, 4, 3, 5, 1];
    const st = [];
    const pge = [];
    for (let i = 0; i < arr.length; i++) {
        while (!isempty(st) && arr[top(st)] <= arr[i])
            st.pop();
        if (isempty(st))
            pge[i] = -1;
        else
            pge[i] = top(st);
        st.push(i);
    }
    console.log(JSON.stringify(pge))
    const sol = pge.map(i => i >= 0 ? arr[i] : -1);
    console.log(JSON.stringify(sol));
    console.log(compare(sol, pge_solution));
}

function nse() {
    const arr = [4, 10, 6, 1, 2, 3, 6, 9, 4, 3, 5, 1];
    const st = [];
    const nse = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        while (!isempty(st) && arr[top(st)] >= arr[i])
            st.pop();

        if (isempty(st)) nse[i] = -1;
        else nse[i] = top(st);

        st.push(i);
    }

    console.log(JSON.stringify(nse))
    const sol = nse.map(i => i >= 0 ? arr[i] : -1);
    console.log(JSON.stringify(sol));
    console.log(compare(sol, nse_solution));
}

function pse() {
    const arr = [4, 10, 6, 1, 2, 3, 6, 9, 4, 3, 5, 1];
    const st = [];
    const pse = [];
    for (let i = 0; i < arr.length; i++) {
        while (!isempty(st) && arr[top(st)] >= arr[i])
            st.pop();

        if (isempty(st)) pse[i] = -1;
        else pse[i] = top(st);

        st.push(i);
    }

    console.log(JSON.stringify(pse))
    const sol = pse.map(i => i >= 0 ? arr[i] : -1);
    console.log(JSON.stringify(sol));
    console.log(compare(sol, pse_solution));
}

nge();
pge();
nse();
pse();