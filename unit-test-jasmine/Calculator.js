var Calculator = function () {};

Calculator.prototype.sum = function (num1, num2) {
    return num1 + num2;
}

Calculator.prototype.substract = function (num1, num2) {
    return num1 - num2;
}

Calculator.prototype.multiply = function (num1, num2) {
    return num1 * num2;
}

Calculator.prototype.divide = function (num1, num2) {
    return num1 / num2;
}

Calculator.prototype.average = function (number1, number2) {
    return (number1 + number2) / 2;
}

Calculator.prototype.factorial = function (number) {
    if (number < 0) {
        throw new Error('There is no factorial for negative numbers');
    } else if (number === 1 || number === 0) {
        return 1;
    } else {
        return number * this.factorial(number - 1);
    }
}