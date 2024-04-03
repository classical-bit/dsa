# What is Time Complexity?
The rate at which the time, required to run the code, changes with respect to the input size, is considered Time Complexity.

# Fibonacci Series
The n-th term of Fibonacci series F(n), where F(n) is a function is calculated using the following formula -
F(n) = F(n-1) + F(n-2)
where F(0) = 0, F(1) = 1, F(2) = 1

# Prime Number
A number which has only two factors, 1 and itself.

divisors = []
for ( i = 1; i < sqrt(n); i++) {
    if (n%i == 0) {
        divisors.push(i);
        if (n/i != i) {
            divisors.push(n/i);
        }
    }
}
if (divisors.length == 2) {
    print("prime number")
}
Time Complexity: O(sqrt(n))

# GCD/HCF (Greates Common Divisor or Highest Common Factor)
- Euclidean Algorithm
    gcd(a,b) = gcd(a-b, b) ; where a > b ;
    this is repeated substraction which is division. we can improve it by:
    gcd(a,b) = gcd(a%b, b) ; where a > b ;

    Time Complexity: O(log-phi(min(a,b)))

# Count digits in a number
log-10(number) + 1

# Factorial
n! = n * (n-1) * (n-2) ... * 1
1! = 1
0! = 1