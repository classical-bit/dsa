#include <iostream>
#include <vector>
using namespace std;

int findMaximum(const vector<int> &array)
{
    int left = 0;
    int right = array.size() - 1;

    while (left < right)
    {
        int mid = left + (right - left) / 2;

        if (array[mid] < array[mid + 1])
        {
            left = mid + 1;
        }
        else
        {
            right = mid;
        }
    }

    return array[left];
}

int main()
{
    vector<int> mountainArray = {2, 4, 6, 8, 15, 27, 42, 33, 21, 14, 5, 1};

    int maxValue = findMaximum(mountainArray);

    cout << "Maximum value in array is: "
         << maxValue
         << "\n";

    return 0;
}