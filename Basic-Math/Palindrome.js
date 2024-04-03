function isPalindrome(start, end, s) {
    if (start > end)
        return true;
    const left = s[start];
    const right = s[end]
    if (!isalnum(left))
        return isPalindrome(start + 1, end, s);
    if (!isalnum(right))
        return isPalindrome(start, end - 1, s);
    if (left != right)
        return false;

    return isPalindrome(start + 1, end - 1, s);
}

function isalnum(str) {
    var code, i, len;

    for (i = 0, len = str.length; i < len; i++) {
        code = str.charCodeAt(i);
        if (!(code > 47 && code < 58) && // numeric (0-9)
            !(code > 64 && code < 91) && // upper alpha (A-Z)
            !(code > 96 && code < 123)) { // lower alpha (a-z)
            return false;
        }
    }
    return true;
};

function main() {
    s = "a man, a plan, a canal: panama";
    console.log(isPalindrome(0, s.length - 1, s));
}

main()