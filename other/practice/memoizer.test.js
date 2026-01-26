const { memoize } = require('./memoizer');

describe('memoize', () => {
  let expensiveFunction;
  let memoizedExpensiveFunction;

  beforeEach(() => {
    expensiveFunction = jest.fn((a, b) => a + b);
    memoizedExpensiveFunction = memoize(expensiveFunction);
  });

  test('should return cached result for same arguments', () => {
    memoizedExpensiveFunction(1, 2);
    memoizedExpensiveFunction(1, 2);
    expect(expensiveFunction).toHaveBeenCalledTimes(1);
    expect(memoizedExpensiveFunction(1, 2)).toBe(3);
  });

  test('should call original function for different arguments', () => {
    memoizedExpensiveFunction(1, 2);
    memoizedExpensiveFunction(3, 4);
    expect(expensiveFunction).toHaveBeenCalledTimes(2);
    expect(memoizedExpensiveFunction(1, 2)).toBe(3);
    expect(memoizedExpensiveFunction(3, 4)).toBe(7);
  });

  test('should work with a custom resolver function', () => {
    const resolver = (a, b) => `${a}-${b}`; // Custom key generator
    memoizedExpensiveFunction = memoize(expensiveFunction, resolver);

    memoizedExpensiveFunction(1, 2);
    memoizedExpensiveFunction(1, 2); // Same args, same key
    memoizedExpensiveFunction(2, 1); // Different args, different key
    expect(expensiveFunction).toHaveBeenCalledTimes(2);
    expect(memoizedExpensiveFunction(1, 2)).toBe(3);
    expect(memoizedExpensiveFunction(2, 1)).toBe(3);
  });

  test('should preserve context (this)', () => {
    const obj = {
      value: 10,
      add: jest.fn(function(x) {
        return this.value + x;
      })
    };
    const memoizedAdd = memoize(obj.add);

    expect(memoizedAdd.call(obj, 5)).toBe(15);
    expect(memoizedAdd.call(obj, 5)).toBe(15);
    expect(obj.add).toHaveBeenCalledTimes(1);
  });
});
