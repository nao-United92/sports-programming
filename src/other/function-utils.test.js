const { memoize } = require('./function-utils.js');

describe('memoize', () => {
  it('should memoize a function with a single primitive argument', () => {
    const mockFunc = jest.fn(x => x * 2);
    const memoizedFunc = memoize(mockFunc);

    expect(memoizedFunc(2)).toBe(4);
    expect(memoizedFunc(2)).toBe(4);
    expect(mockFunc).toHaveBeenCalledTimes(1);

    expect(memoizedFunc(3)).toBe(6);
    expect(memoizedFunc(3)).toBe(6);
    expect(mockFunc).toHaveBeenCalledTimes(2);
  });

  it('should return the cached value on subsequent calls', () => {
    const expensiveCalculation = jest.fn(x => ({ value: x }));
    const memoizedCalc = memoize(expensiveCalculation);

    const result1 = memoizedCalc(1);
    const result2 = memoizedCalc(1);

    expect(result1).toEqual({ value: 1 });
    expect(result2).toBe(result1); // Should be the exact same object
    expect(expensiveCalculation).toHaveBeenCalledTimes(1);
  });

  it('should use a custom resolver function to determine the cache key', () => {
    const mockFunc = jest.fn((a, b) => a + b);
    const resolver = (a, b) => `${a}_${b}`;
    const memoizedFunc = memoize(mockFunc, resolver);

    memoizedFunc(1, 2); // call 1
    memoizedFunc(1, 2); // should be cached
    expect(mockFunc).toHaveBeenCalledTimes(1);

    memoizedFunc(2, 1); // call 2
    memoizedFunc(2, 1); // should be cached
    expect(mockFunc).toHaveBeenCalledTimes(2);
  });

  it('should expose the cache on the memoized function', () => {
    const memoizedFunc = memoize(x => x);
    memoizedFunc(1);
    expect(memoizedFunc.cache instanceof Map).toBe(true);
    expect(memoizedFunc.cache.get(1)).toBe(1);
  });

  it('should handle `this` context correctly', () => {
    const mockFunc = jest.fn(function(val) {
      return this.multiplier * val;
    });

    const context = {
      multiplier: 10,
      memoized: memoize(mockFunc),
    };

    const result = context.memoized(5);
    expect(result).toBe(50);
    expect(mockFunc).toHaveBeenCalledTimes(1);

    // Call again, should be cached
    const result2 = context.memoized(5);
    expect(result2).toBe(50);
    expect(mockFunc).toHaveBeenCalledTimes(1);
  });
});