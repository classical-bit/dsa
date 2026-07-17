/*
    The Copying Problem:
    Imagine you need to print N pages of a document. You have two printers,
    Printer A takes 2 seconds per page, and Printer B takes 3 seconds per page.
    What is the minimum time required to print all N pages?
    * Search Space: low = 0 seconds, high = N * 2 seconds (if the faster printer
    did everything alone).
    * Feasibility Function: ok(t): In t seconds, Printer A can print t / 2 pages,
    and Printer B can print t / 3 pages. Total pages printed = (t / 2) + (t / 3).
    If this total is >= N, return True. Otherwise return False.
*/

#include <iostream>

using namespace std;
typedef long long ll;

bool ok(ll t, ll n, ll a, ll b)
{
    ll pagesPrinted = (t / a) + (t / b);
    return pagesPrinted >= n;
}

ll getMinimumTime(ll n, ll a, ll b)
{
    if (n == 0)
        return 0;

    ll low = 0;
    ll fast_printer = min(a, b);
    ll high = fast_printer * n;

    ll ans = high;

    while (low <= high)
    {
        ll mid = low + (high - low) / 2;

        if (ok(mid, n, a, b))
        {
            ans = mid;
            high = mid - 1;
        }
        else
        {
            low = mid + 1;
        }
    }
    return ans;
}

int main()
{
    ll n = 10; // Total pages to copy
    ll a = 2;  // Printer A speed
    ll b = 3;  // Printer B speed

    cout << "Minimum time needed: "
         << getMinimumTime(n, a, b)
         << " seconds.\n";

    return 0;
}