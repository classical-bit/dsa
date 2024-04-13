#include <iostream>
using namespace std;

bool checkArmstrong(int n)
{
    int original = n;
    int powerRaisedDigitSum = 0;
    int k = log10(n) + 1;
    while (n)
    {
        int lastDigit = n % 10;
        n /= 10;
        powerRaisedDigitSum += pow(lastDigit, k);
    }

    return original == powerRaisedDigitSum;
}

int main()
{
    cout << "Enter n:";
    int n;
    cin >> n;

    auto start = chrono::high_resolution_clock::now();
    int result = checkArmstrong(n);
    auto end = chrono::high_resolution_clock::now();
    chrono::duration<double> duration = end - start;
    cout << "Execution time: " << duration.count() << " seconds." << endl;

    cout << result << endl;
}
