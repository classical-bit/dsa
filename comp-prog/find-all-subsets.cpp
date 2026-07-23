#include <vector>
#include <iostream>

using namespace std;

void subsets(int index, vector<int> &nums, vector<int> &current, vector<vector<int>> &result)
{
    // Base case
    if (index == nums.size())
    {
        result.push_back(current);
        return;
    }

    // First Choice
    current.push_back(nums[index]);
    subsets(index + 1, nums, current, result);

    // Backtrack
    current.pop_back();

    // Second Choice
    subsets(index + 1, nums, current, result);
}

int main()
{
    vector<int> nums = {1, 2, 3};
    vector<vector<int>> result;
    vector<int> current;

    subsets(0, nums, current, result);

    cout << "All subsets\n";
    for (auto &subset : result)
    {
        cout << "[";
        for (auto x : subset)
            cout << x << " ";
        cout << "]\n";
    }
    return 0;
}