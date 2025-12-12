const curry = require('./function-curry-utils');

describe('curry', () => {
  test('should curry a function with multiple arguments', () => {
    const sum = (a, b, c) => a + b + c;
    const curriedSum = curry(sum);

    expect(curriedSum(1)(2)(3)).toBe(6);
    expect(curriedSum(1, 2)(3)).toBe(6);
    expect(curriedSum(1)(2, 3)).toBe(6);
    expect(curriedSum(1, 2, 3)).toBe(6);
  });

  test('should return the result when all arguments are provided', () => {
    const multiply = (a, b) => a * b;
    const curriedMultiply = curry(multiply);

    expect(curriedMultiply(3, 4)).toBe(12);
  });

  test('should allow reusing curried functions', () => {
    const add = (a, b) => a + b;
    const curriedAdd = curry(add);
    const add5 = curriedAdd(5);

    expect(add5(3)).toBe(8);
    expect(add5(10)).toBe(15);
  });

  test('should work with functions that have no arguments', () => {
    const getValue = () => 42;
    const curriedGetValue = curry(getValue);
    expect(curriedGetValue()).toBe(42);
  });
});
