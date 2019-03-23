// Main Suite
describe('Calculator', function () {
    var calc;

    // This statement will be called before running each spec
    // Setup
    beforeEach(function () {
        calc = new Calculator();
    });

    // This statement will be called after every spec finish
    // Teardown
    afterEach(function () {
        calc = null;
    });

    // Secondary Suite
    describe('calculator will peform basic math operations', function () {
        // Spec for sum operation
        it('should be able to calculate sum', function () {
            expect(calc.sum(3, 5)).toEqual(8);
        });

        // Spec for substract operation
        it('should be able to substract', function () {
            expect(calc.substract(10, 5)).toEqual(5);
        });

        // Spec for multiply operation
        it('should be able to multiply', function () {
            expect(calc.multiply(10, 40)).toEqual(400);
        });

        // Spec for divide operation
        it('should be able to divide', function () {
            expect(calc.divide(100, 5)).toEqual(20);
        });

        // Spec for factorial operation for positive number
        it('should be able to calculate factorial for a positive number', function () {
            expect(calc.factorial(9)).toEqual(362880);
        });

        // Spec for factorial operation for negative number
        it('should be able to throw error in factorial operation when the number is negative', function () {
            expect(function () {
                calc.factorial(-7)
            }).toThrowError(Error);
        });

        // Disabled Spec
        xit('should not execute because is disabled', function () {
            expect(calc.sum(3, 10)).toEqual(13);
        });
    });

    describe('calculator spies', function () {

        beforeEach(function () {
            spyOn(calc, 'sum');
        });

        // Spec for sum operation
        it('should execute sum operation', function () {
            // Call sum method
            calc.sum(3, 5);

            // Verify it got executed
            expect(calc.sum).toHaveBeenCalled();
            expect(calc.sum).toHaveBeenCalledWith(3, 5);
        });

    });

    // Secondary Suite but this one will not run because is disabled
    xdescribe('suite disabled', function () {
        // Spec for sum operation
        it('should be able to calculate sum', function () {
            expect(calc.sum(10, 10)).toEqual(20);
        });

        // Spec for substract operation
        it('should be able to substract', function () {
            expect(calc.substract(100, 50)).toEqual(50);
        });
    });
});