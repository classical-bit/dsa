#include <iostream>

using namespace std;

int main()
{
    int x = 1;
    int n = 5;
    int m = 11;
    for (int i = 2; i <= n; i++)
    {
        x = (x * i) % m;
    }
    cout << x % m << "\n";
    return 0;
}