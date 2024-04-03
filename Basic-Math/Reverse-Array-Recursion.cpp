#include <iostream>
#include <vector>

void swap(vector<int> &arr, int left, int right)
{
    int temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
}

void reverse(vector<int> &arr, int left, int right)
{
    if (left > right)
    {
        return;
    }
    swap(arr, left, right);

    reverse(arr, left + 1, right - 1);
}

vector<int> reverseArray(int n, vector<int> &nums)
{
    reverse(nums, 0, n - 1);
    return nums;
}
