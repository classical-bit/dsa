#include <vector>
#include <iostream>
#include <utility>

using namespace std;

void permute(int index, vector<int> &nums, vector<vector<int>> &result)
{
    if (index == nums.size())
    {
        result.push_back(nums);
        return;
    }

    for (int i = index; i < nums.size(); i++)
    {
        swap(nums[index], nums[i]);

        permute(index + 1, nums, result);

        swap(nums[i], nums[index]);
    }
}

int main()
{
    vector<int> nums = {1, 2, 3};
    vector<vector<int>> result;

    permute(0, nums, result);

    cout << "All permutations\n";
    for (auto &permute : result)
    {
        cout << "[";
        for (auto x : permute)
            cout << x << " ";
        cout << "]\n";
    }

    return 0;
}