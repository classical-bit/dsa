# Longest Substring Without Repeating Characters

Given a string `s`, find the length of the longest substring that does not contain any repeating characters.  
A substring is a contiguous sequence of characters within the string.  
The goal is to return the maximum length of such a substring.

## Examples

### Example 1:
**Input:** `"abcabcbb"`  
**Output:** `3`  
**Explanation:** The longest substring without repeating characters is `"abc"`, which has a length of `3`.

### Example 2:
**Input:** `"bbbbb"`  
**Output:** `1`  
**Explanation:** The longest substring without repeating characters is `"b"`, which has a length of `1`.

### Example 3:
**Input:** `"pwwkew"`  
**Output:** `3`  
**Explanation:** The longest substring without repeating characters is `"wke"`, which has a length of `3`.  
**Note:** `"pwke"` is not a valid substring because it is not contiguous.

### Example 4:
**Input:** `""`  
**Output:** `0`  
**Explanation:** An empty string has no characters, so the length of the longest substring without repeating characters is `0`.

## Constraints
- `0 ≤ s.length ≤ 5 * 10^4`
- `s` consists of English letters, digits, symbols, and spaces.

## [Jump To Solutions :bowtie:](https://github.com/classical-bit/dsa/blob/main/Sliding%20Window/Longest%20Substring%20Without%20Repeating%20Characters/index.js)