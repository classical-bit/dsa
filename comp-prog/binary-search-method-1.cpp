#include <iterator>
#include <iostream>

using namespace std;

int main()
{
    int x = 9;
    int array[] = {1, 2, 2, 3, 5, 6, 8, 9};
    int n = size(array);
    int a = 0, b = n - 1;

    while (a <= b)
    {
        int k = (a + b) / 2;
        if (array[k] == x)
            cout << "k: " << k << "\n";

        if (array[k] > x)
            b = k - 1;
        else
            a = k + 1;
    }
}