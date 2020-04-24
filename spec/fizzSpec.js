describe("Fizzbuzz", function () {
    beforeEach(function () {
        Fizzbuzz = new fizzBuzz;
    });
    describe("Check modolus", function () {
        it("should exist", function () {
            expect(fizzBuzz).toBeDefined();
        });
        it("should return fizzbuzz if divisible by 3 and 5", function () {
            var result = fizzBuzz(15);
            expect(result).toBe("Fizzbuzz");
        });
        it("should return Fizz if divisible by 3", function () {
            var result = fizzBuzz(9);
            expect(result).toBe("Fizz");
        });
        it("should return Buzz if only divisible by 5", function () {
            var result = fizzBuzz(25);
            expect(result).toBe("Buzz");
        });
        it("should return 2 if not divisible by 3 or 5", function () {
            var result = fizzBuzz(2);
            expect(result).toBe(2);
        });
    });
});