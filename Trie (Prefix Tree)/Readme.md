# Trie (Prefix Tree) Problems

## Easy to Medium Difficulty

1. **Implement Trie (Prefix Tree):**
    * Implement a trie with `insert`, `search`, and `startsWith` methods.
2. **Add and Search Word - Data structure design:**
    * Design a data structure that supports adding new words and finding if a string matches any previously added string.
    * Implement the `WordDictionary` class:
        * `WordDictionary()` Initializes the object.
        * `void addWord(word)` Adds `word` to the data structure, it can be matched later.
        * `bool search(word)` Returns `true` if there is any string in the data structure that matches `word` or `false` otherwise. `word` may contain dots `'.'` where dots can be matched with any letter.
3. **Longest Word in Dictionary:**
    * Given an array of strings `words` representing an English Dictionary, return the longest word in `words` that can be built one character at a time by other words in `words`.
    * If there is more than one possible answer, return the longest word with the smallest lexicographical order.
    * If there is no answer, return an empty string.

## Medium to Hard Difficulty

1. **Word Search II:**
    * Given an `m x n` board of characters and a list of strings `words`, return *all words on the board*.
    * The words can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring.
    * The same letter cell may not be used more than once in a word.
2. **Replace Words:**
    * In English, we have a concept called root, which can be followed by some other words to form another longer word -- let's call this word successor.
    * For example, the root `an`, followed by the successor `other`, can form a new word `another`.
    * Given a dictionary consisting of many roots and a sentence consisting of words separated by spaces, replace all the successors in the sentence with the root forming it. If a successor can be formed by more than one root, replace it with the root with the shortest length.
    * Return the sentence after the replacement.
3. **Map Sum Pairs:**
    * Design a map that allows you to do the following:
        * Maps strings to integer values.
        * Returns the sum of values that have a string key with a prefix equal to a given string.
    * Implement the `MapSum` class:
        * `MapSum()` Initializes the `MapSum` object.
        * `void insert(string key, int val)` Inserts the `key`-`val` pair into the map. If the `key` already existed, the original `key`-`value` pair will be overridden to the new one.
        * `int sum(string prefix)` Returns the sum of values of all the pairs such that the key starts with the `prefix`.

## Tips for Practice

* **Trie Structure:**
    * Understand the basic structure of a trie, including nodes, children pointers, and end-of-word markers.
* **Prefix Search:**
    * Master prefix search, which is a fundamental operation in tries.
* **Word Completion:**
    * Use tries for word completion and auto-suggestion.
* **Depth-First Search (DFS):**
    * DFS is often used to traverse tries and find words or prefixes.
* **Edge Cases:**
    * Consider empty tries, empty strings, and cases with duplicate words.
* **Time and Space Complexity:**
    * Analyze the time and space complexity of your solutions. Trie operations often have time complexity proportional to the length of the word.
* **Applications:**
    * Tries have applications in dictionary implementations, spell checkers, and IP routing.
* **Optimization:**
    * Optimize trie implementations for memory usage, especially for large datasets.
