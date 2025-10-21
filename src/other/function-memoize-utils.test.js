const { memoize } = require('./function-memoize-utils');

describe('memoize', () => {
  it('should memoize a simple function', () => {
    const expensiveFunction = jest.fn(x => x * 2);
    const memoizedFunction = memoize(expensiveFunction);

    // First call
    expect(memoizedFunction(2)).toBe(4);
    expect(expensiveFunction).toHaveBeenCalledTimes(1);

    // Second call with the same argument
    expect(memoizedFunction(2)).toBe(4);
    expect(expensiveFunction).toHaveBeenCalledTimes(1); // Should not be called again

    // Call with a different argument
    expect(memoizedFunction(3)).toBe(6);
    expect(expensiveFunction).toHaveBeenCalledTimes(2);

    // Call with the first argument again
    expect(memoizedFunction(2)).toBe(4);
    expect(expensiveFunction).toHaveBeenCalledTimes(2); // Should not be called again
  });

  it('should handle multiple arguments', () => {
    const expensiveFunction = jest.fn((a, b) => a + b);
    const memoizedFunction = memoize(expensiveFunction);

    expect(memoizedFunction(1, 2)).toBe(3);
    expect(expensiveFunction).toHaveBeenCalledTimes(1);

    expect(memoizedFunction(1, 2)).toBe(3);
    expect(expensiveFunction).toHaveBeenCalledTimes(1);

    expect(memoizedFunction(2, 3)).toBe(5);
    expect(expensiveFunction).toHaveBeenCalledTimes(2);
  });

  it('should handle object arguments', () => {
    const expensiveFunction = jest.fn(obj => obj.a);
    const memoizedFunction = memoize(expensiveFunction);

    const obj1 = { a: 1 };
    const obj2 = { a: 2 };

    expect(memoizedFunction(obj1)).toBe(1);
    expect(expensiveFunction).toHaveBeenCalledTimes(1);

    expect(memoizedFunction(obj1)).toBe(1);
    expect(expensiveFunction).toHaveBeenCalledTimes(1);

    expect(memoizedFunction(obj2)).toBe(2);
    expect(expensiveFunction).toHaveBeenCalledTimes(2);
  });

  it('should maintain the context of the original function', () => {
    const context = {
      multiplier: 2,
      calculate: jest.fn(function(x) {
        return x * this.multiplier;
      })
    };
    const memoizedCalculate = memoize(context.calculate);

    // Call the memoized function with the context
    expect(memoizedCalculate.call(context, 2)).toBe(4);
    expect(context.calculate).toHaveBeenCalledTimes(1);

    // Call again with the same arguments
    expect(memoizedCalculate.call(context, 2)).toBe(4);
    expect(context.calculate).toHaveBeenCalledTimes(1);
  });

  it('should return undefined for functions that return undefined', () => {
    const func = jest.fn(x => {});
    const memoizedFunc = memoize(func);

    expect(memoizedFunc(1)).toBeUndefined();
    expect(func).toHaveBeenCalledTimes(1);

    expect(memoizedFunc(1)).toBeUndefined();
    expect(func).toHaveBeenCalledTimes(1);
  });
});