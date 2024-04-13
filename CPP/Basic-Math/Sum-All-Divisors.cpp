#include <iostream>
using namespace std;

int sumDivisors(int n)
{
    int sum = 0;
    for (int i = 1; i <= sqrt(n); i++)
    {
        if (n % i == 0)
        {
            cout << i << " ";
            sum += i;
            if (n / i != i)
            {
                cout << n / i << "*";
                sum += n / i;
            }
        }
    }
    cout << endl;
    return sum;
}

int sumOfAllDivisors(int n)
{
    int sum = 0;
    for (int j = 1; j <= n; j++)
    {
        for (int i = 1; i <= sqrt(j); i++)
        {
            if (j % i == 0)
            {
                cout << i << " ";
                sum += i;
                if (j / i != i)
                {
                    cout << j / i << "*";
                    sum += j / i;
                }
            }
        }
        cout << endl;
    }
    return sum;
}

int main()
{
    cout << "Enter n:";
    int n;
    cin >> n;

    auto start = chrono::high_resolution_clock::now();
    int result = sumDivisors(n);
    auto end = chrono::high_resolution_clock::now();
    chrono::duration<double> duration = end - start;
    cout << "Execution time: " << duration.count() << " seconds." << endl;

    cout << result << endl;
}