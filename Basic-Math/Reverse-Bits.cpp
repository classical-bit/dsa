#include <iostream>

using namespace std;

int main()
{
    cout << "Enter n:";
    int n;
    cin >> n;

    int count = 32;
    int reverseNum = n;

    do
    {
        n = n >> 1;
        reverseNum = reverseNum << 1;
        reverseNum = reverseNum | n & 1;
        count--;
    } while (n);
    reverseNum = reverseNum << count;

    cout << reverseNum;
}