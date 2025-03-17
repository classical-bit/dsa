## Longest Substring with K Distinct Characters

Given a string `s` and an integer `k`, find the length of the longest substring of `s` that contains at most `k` distinct characters.

**Examples:**

**Example 1:**

* **String:** `"araaci"`
* **K:** `2`

**Solution:**

* Substrings with at most 2 distinct characters:
    * `"ar"` (2 distinct characters)
    * `"ara"` (2 distinct characters)
    * `"raa"` (2 distinct characters)
    * `"aaci"` (3 distinct characters, invalid)
    * `"aci"` (3 distinct characters, invalid)
* **Longest Substring:** `"ara"` or `"raa"`
* **Length:** `3`

**Example 2:**

* **String:** `"cbbebi"`
* **K:** `3`

**Solution:**

* Substrings with at most 3 distinct characters:
    * `"cbb"` (2 distinct characters)
    * `"cbbe"` (3 distinct characters)
    * `"bbeb"` (2 distinct characters)
    * `"bebi"` (3 distinct characters)
* **Longest Substring:** `"cbbe"` or `"bebi"`
* **Length:** `4`

**Example 3:**

* **String:** `"aaabc"`
* **K:** `1`

**Solution:**

* Substrings with at most 1 distinct characters:
    * `"a"`
    * `"aa"`
    * `"aaa"`
* **Longest Substring:** `"aaa"`
* **Length:** `3`

**Example 4:**

* **String:** `"abaccc"`
* **K:** `2`

**Solution:**

* Substrings with at most 2 distinct characters:
    * `"ab"`
    * `"aba"`
    * `"abac"`
    * `"baca"`
    * `"accc"`
* **Longest Substring:** `"accc"`
* **Length:** `4`

## [Jump To Solutions :bowtie:](https://github.com/classical-bit/dsa/blob/main/Sliding%20Window/Longest%20Substring%20with%20K%20Distinct%20Characters/index.js)