#include <iostream>
using namespace std;

long long factorial(long long n)
{
    if (n == 0)
        return 1;
    return n * factorial(n - 1);
}

vector<long long> factorialNumbers(long long n)
{
    vector<long long> arr;

    for (int i = 1; i <= n; i++)
    {
        auto f = factorial(i);
        if (f < n)
            arr.push_back(f);
        else
            break;
    }
    return arr;
}

int main()
{
    cout << "Enter n:";
    long long n;
    cin >> n;

    auto start = chrono::high_resolution_clock::now();
    auto result = factorialNumbers(n);
    auto end = chrono::high_resolution_clock::now();
    chrono::duration<double> duration = end - start;
    cout << "Execution time: " << duration.count() << " seconds." << endl;

    for (auto a : result)
    {
        cout << a << " ";
    }
    cout << endl;
}
