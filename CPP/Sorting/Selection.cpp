#include <iostream>
using namespace std;

void swap(int &l, int &r)
{
    int temp = l;
    l = r;
    r = temp;
}

int main()
{
    vector<int> arr;
    arr.push_back(9);
    arr.push_back(3);
    arr.push_back(4);
    arr.push_back(15);
    arr.push_back(6);
    arr.push_back(1);
    arr.push_back(12);
    arr.push_back(0);
    arr.push_back(10);
    for (auto i : arr)
        cout << i << " ";
    cout << endl;

    int n = arr.size();
    cout << n << endl;
    for (int i = 0; i < n - 1; i++)
    {
        for (int j = i + 1; j < n; j++)
        {
            if (arr[j] < arr[i])
            {
                swap(arr[j], arr[i]);
            }
        }
    }

    for (auto i : arr)
        cout << i << " ";
    cout << endl;
}