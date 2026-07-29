/**
Wildcard Matching

Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*' where:

'?' Matches any single character.
'*' Matches any sequence of characters (including the empty sequence).
The matching should cover the entire input string (not partial).



Example 1:

Input: s = "aa", p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".
Example 2:

Input: s = "aa", p = "*"
Output: true
Explanation: '*' matches any sequence.
Example 3:

Input: s = "cb", p = "?a"
Output: false
Explanation: '?' matches 'c', but the second letter is 'a', which does not match 'b'.


Constraints:

0 <= s.length, p.length <= 2000
s contains only lowercase English letters.
p contains only lowercase English letters, '?' or '*'.
 */

#include <vector>
#include <iostream>
using namespace std;

class Solution
{
public:
    bool isMatch(string s, string p)
    {
        int sIdx = 0, pIdx = 0;
        int matchIdx = 0, starIdx = -1;

        while (sIdx < s.length())
        {
            if (pIdx < p.length() && (p[pIdx] == '?' || p[pIdx] == s[sIdx]))
            {
                sIdx++;
                pIdx++;
            }
            else if (pIdx < p.length() && p[pIdx] == '*')
            {
                starIdx = pIdx;
                matchIdx = sIdx;
                pIdx++;
            }
            else if (starIdx != -1)
            {
                pIdx = starIdx + 1;
                matchIdx++;
                sIdx = matchIdx;
            }
            else
            {
                return false;
            }
        }

        while (pIdx < p.length() && p[pIdx] == '*')
        {
            pIdx++;
        }

        return pIdx == p.length();
    }
};