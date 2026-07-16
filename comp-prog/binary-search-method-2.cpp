#include <iterator>
#include <iostream>

using namespace std;

int main()
{
    int x = 9;
    int array[] = {1, 2, 2, 3, 5, 6, 8, 9};
    int n = size(array);
    int k = 0;

    for (int b = n / 2; b >= 1; b /= 2)
        while (k + b < n && array[k + b] <= x)
            k += b;

    if (array[k] == x)
        cout << "k: " << k << "\n";
}