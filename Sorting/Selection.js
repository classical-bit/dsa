
arr = [9, 3, 4, 15, 6, 1, 12, 0, 10];
n = arr.length;
console.log(arr);
console.log(n);

for (i = 0; i < n - 1; i++) {
    for (j = i + 1; j < n; j++) {
        if (arr[j] < arr[i]) {
            temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }
    }
}

console.log(arr);