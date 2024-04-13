#include <utility>
#include <iostream>
#include <list>
#include <deque>
#include <stack>
#include <queue>
#include <set>
#include <map>
#include <unordered_set>
using namespace std;

void pairs()
{
    pair<int, int> p = make_pair(1, 2);
    cout << p.first << " " << p.second << endl;
}

void vectors()
{
    vector<int> v;
    v.push_back(1);
    v.emplace_back(2);
    v.push_back(1);
    v.emplace_back(3);
    cout << v.empty() << endl;
    for (int num : v)
    {
        cout << num << " ";
    }
    cout << endl;
}

void lists()
{
    list<int> l;
    l.push_front(1);
    cout << l.front();
    cout << endl;
}

void deques()
{
    deque<int> d;
    d.insert(d.begin(), 2);
    cout << d.front();
}

void stacks()
{
    stack<int> s;
    s.push(1);
    s.push(12);
    cout << s.size() << endl;
    cout << s.top() << endl;
}

void queues()
{
    queue<int> q;
    q.push(1);
}

void priority_queues()
{
    priority_queue<int> pq;
}

void sets()
{
    set<int> s;
}

void multisets()
{
    multiset<int> ms;
}

void unordered_sets()
{
    unordered_set<int> us;
    us.insert(1);
}

void maps()
{
    map<int, int> mp;
}

void multimaps()
{
}

void unordered_maps()
{
}

int main()
{
    // pairs();
    // vectors();
    // lists();
    // deques();
    stacks();
}