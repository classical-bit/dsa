#include <iostream>
using namespace std;

int main()
{
    cout << "Enter n:";
    int n;
    cin >> n;

    vector<int> divisors;
    for (int i = 1; i <= sqrt(n); i++)
    {
        if (n % i == 0)
        {
            divisors.push_back(i);
            if (n / i != i)
            {
                divisors.push_back(n / i);
            }
        }
    }

    sort(divisors.begin(), divisors.end());

    for (int divisor : divisors)
    {
        cout << divisor << " ";
    }
    cout << endl;

    return 0;
}