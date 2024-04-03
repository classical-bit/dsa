#include <iostream>
using namespace std;

int gcd(int n, int m)
{
    if (n == 0)
        return m;
    if (m == 0)
        return n;
    if (n > m)
        return gcd(n % m, m);
    else
        return gcd(m % n, n);
}

int main()
{
    cout << "Enter n:";
    int n;
    cin >> n;
    cout << "Enter m:";
    int m;
    cin >> m;

    auto start = chrono::high_resolution_clock::now();
    int result = gcd(n, m);
    auto end = chrono::high_resolution_clock::now();
    chrono::duration<double> duration = end - start;
    cout << "Execution time: " << duration.count() << " seconds." << endl;

    cout << result;
}