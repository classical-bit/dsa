#include <iostream>
#include <vector>

using namespace std;

void merge(vector<int> &nums, int left, int mid, int right)
{
    vector<int> leftArr(nums.begin() + left, nums.begin() + mid + 1);
    vector<int> rightArr(nums.begin() + mid + 1, nums.begin() + right + 1);

    int i = 0, j = 0, k = left;

    while (i < leftArr.size() && j < rightArr.size())
    {
        if (leftArr[i] <= rightArr[j])
        {
            nums[k++] = leftArr[i++];
        }
        else
        {
            nums[k++] = rightArr[j++];
        }
    }

    while (i < leftArr.size())
    {
        nums[k++] = leftArr[i++];
    }

    while (j < rightArr.size())
    {
        nums[k++] = rightArr[j++];
    }
}

void mergeSort(vector<int> &nums, int left, int right)
{
    if (left >= right)
    {
        return;
    }

    int mid = left + (right - left) / 2;

    mergeSort(nums, left, mid);
    mergeSort(nums, mid + 1, right);

    merge(nums, left, mid, right);
}

void printArr(vector<int> &arr)
{
    cout << "{";
    for (auto x : arr)
    {
        cout << " " << x;
    }
    cout << "}\n";
}

int main()
{
    vector<int> nums = {2, 4, 77, 1, 2, 9, 3, 7, 5, 54};

    cout << "Original Array: ";
    printArr(nums);

    mergeSort(nums, 0, nums.size() - 1);
    cout << "Sorted Array: ";
    printArr(nums);

    return 0;
}