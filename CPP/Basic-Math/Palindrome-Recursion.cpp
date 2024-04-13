#include <iostream>
using namespace std;

bool isPalindrome(int start, int end, string &s)
{
    if (start > end)
        return true;
    if (!isalnum(s[start]))
        return isPalindrome(start + 1, end, s);
    if (!isalnum(s[end]))
        return isPalindrome(start, end - 1, s);
    if (s[start] != s[end])
        return false;

    return isPalindrome(start + 1, end - 1, s);
}

int main()
{
    string s = "a man, a plan, a canal: panama";
    cout << isPalindrome(0, s.length() - 1, s);
}