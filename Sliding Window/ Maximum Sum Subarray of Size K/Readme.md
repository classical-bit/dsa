## Maximum Sum Subarray of Size K:

Find the contiguous subarray (a sequence of adjacent elements) of a given array, where the subarray has a specific size `k`, and the sum of the elements within that subarray is the largest possible.

## Examples:

**Example 1:**

* **Array:** `[1, 4, 2, 10, 23, 3, 1, 0, 20]`
* **Window Size (k):** `4`

**Solution:**

* First Window: `[1, 4, 2, 10]` Sum = `17`
* Slide Window: `[4, 2, 10, 23]` Sum = `39`
* Slide Window: `[2, 10, 23, 3]` Sum = `38`
* Slide Window: `[10, 23, 3, 1]` Sum = `37`
* Slide Window: `[23, 3, 1, 0]` Sum = `27`
* Slide Window: `[3, 1, 0, 20]` Sum = `24`
* **Maximum Sum:** `39`

**Example 2:**

* **Array:** `[100, 200, 300, 400]`
* **Window Size (k):** `2`

**Solution:**

* First Window: `[100, 200]` Sum = `300`
* Slide Window: `[200, 300]` Sum = `500`
* Slide Window: `[300, 400]` Sum = `700`
* **Maximum Sum:** `700`

**Example 3:**

* **Array:** `[1, 2, 3, 4, 5]`
* **Window Size (k):** `1`

**Solution:**

* Since `k` is 1, the maximum sum will simply be the largest individual element, which is 5.
* **Maximum Sum:** `5`

**Example 4:**

* **Array:** `[-1, -2, -3, -4, -5]`
* **Window Size (k):** `2`

**Solution:**

* First Window: `[-1, -2]` Sum = `-3`
* Slide Window: `[-2, -3]` Sum = `-5`
* Slide Window: `[-3, -4]` Sum = `-7`
* Slide Window: `[-4, -5]` Sum = `-9`
* **Maximum Sum:** `-3`

## [Jump To Solutions :bowtie:](https://github.com/classical-bit/dsa/blob/main/Sliding%20Window/%20Maximum%20Sum%20Subarray%20of%20Size%20K/index.js)