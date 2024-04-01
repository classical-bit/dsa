#include <iostream>
using namespace std;

int main()
{
    int n;
    cout << "Enter n:";
    cin >> n;

    for (int i = 0; i < 2 * n - 1; i++)
    {
        int stars = i + 1;
        if (i > n / 2)
            stars = 2 * n - i + 1;
        for (int j = 0; j < stars; j++)
        {
            cout << "* ";
        }
        cout << endl;
    }
    return 0;
}