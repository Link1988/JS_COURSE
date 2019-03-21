function factorial(x) {
    if (x < 0) {
        return;
    }

    if (x === 0) {
        return 1;
    }

    return x * factorial(x - 1);
}

factorial(3);

// return 3 * factorial(2);
// return 2 * factorial(1);
// return 1 * factorial(0);

// factorial(0) returns 1

// factorial(1) returns 1 * factorial(0), or just 1 * 1

// factorial(2) returns 2 * factorial(1), or just 2 * 1 * 1

// factorial(3) returns 3 * factorial(2), or just 3 * 2 * 1 * 1

// factorial(3) returns 3 * factorial(2)
// factorial(2) returns 2 * factorial(1)
// factorial(1) returns 1 * factorial(0)
// factorial(0) returns 1
// // Now that we've hit our base case, our function will return in order from inner to outer:
// factorial(0) returns 1 => 1
// factorial(1) returns 1 * factorial(0) => 1 * 1
// factorial(2) returns 2 * factorial(1) => 2 * 1 * 1
// factorial(3) returns 3 * factorial(2) => 3 * 2 * 1 * 1