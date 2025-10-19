const { memoize } = require('./memoize-utils');

describe('memoize', () => {
  test('should return the cached result for subsequent calls with the same arguments', () => {
    const complexCalculation = jest.fn((a, b) => a + b);
    const memoizedCalc = memoize(complexCalculation);

    // First call
    const result1 = memoizedCalc(2, 3);
    expect(result1).toBe(5);
    expect(complexCalculation).toHaveBeenCalledTimes(1);

    // Second call with same arguments
    const result2 = memoizedCalc(2, 3);
    expect(result2).toBe(5);
    // The original function should not be called again
    expect(complexCalculation).toHaveBeenCalledTimes(1);
  });

  test('should call the original function again for different arguments', () => {
    const complexCalculation = jest.fn((a, b) => a + b);
    const memoizedCalc = memoize(complexCalculation);

    memoizedCalc(2, 3); // Call 1
    expect(complexCalculation).toHaveBeenCalledTimes(1);

    memoizedCalc(5, 10); // Call 2 (different args)
    expect(complexCalculation).toHaveBeenCalledTimes(2);
    expect(memoizedCalc(5, 10)).toBe(15);
  });

  test('should work with functions that return different values', () => {
    let callCount = 0;
    const func = () => {
      callCount++;
      return callCount;
    };
    const memoizedFunc = memoize(func);

    const result1 = memoizedFunc();
    expect(result1).toBe(1);
    const result2 = memoizedFunc();
    expect(result2).toBe(1); // Should be cached
    expect(callCount).toBe(1);
  });

  test('should handle object arguments', () => {
    const complexCalculation = jest.fn(obj => obj.a + obj.b);
    const memoizedCalc = memoize(complexCalculation);

    memoizedCalc({ a: 1, b: 2 });
    expect(complexCalculation).toHaveBeenCalledTimes(1);

    memoizedCalc({ a: 1, b: 2 });
    expect(complexCalculation).toHaveBeenCalledTimes(1); // Should be cached

    memoizedCalc({ a: 2, b: 3 });
    expect(complexCalculation).toHaveBeenCalledTimes(2); // Different args
  });
});