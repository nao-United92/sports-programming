const { memoize } = require('./function-memoize-utils.js');

describe('memoize', () => {
  let expensiveFunction;

  beforeEach(() => {
    expensiveFunction = jest.fn((a, b) => a + b);
  });

  it('should memoize the result of a function call', () => {
    const memoizedSum = memoize(expensiveFunction);

    expect(memoizedSum(1, 2)).toBe(3);
    expect(expensiveFunction).toHaveBeenCalledTimes(1);

    expect(memoizedSum(1, 2)).toBe(3); // Should return cached result
    expect(expensiveFunction).toHaveBeenCalledTimes(1); // Should not be called again

    expect(memoizedSum(2, 3)).toBe(5);
    expect(expensiveFunction).toHaveBeenCalledTimes(2); // Called for new arguments
  });

  it('should use a custom resolver function', () => {
    const resolver = (a, b) => `${a}-${b}`; // Custom key based on both arguments
    const memoizedSum = memoize(expensiveFunction, resolver);

    expect(memoizedSum(1, 2)).toBe(3);
    expect(expensiveFunction).toHaveBeenCalledTimes(1);
    expect(memoizedSum.cache.has('1-2')).toBe(true);

    expect(memoizedSum(1, 2)).toBe(3);
    expect(expensiveFunction).toHaveBeenCalledTimes(1);

    expect(memoizedSum(2, 1)).toBe(3); // Different key, so function should be called
    expect(expensiveFunction).toHaveBeenCalledTimes(2);
    expect(memoizedSum.cache.has('2-1')).toBe(true);
  });

  it('should allow clearing the cache', () => {
    const memoizedSum = memoize(expensiveFunction);

    memoizedSum(1, 2);
    expect(expensiveFunction).toHaveBeenCalledTimes(1);
    expect(memoizedSum.cache.size).toBe(1);

    memoizedSum.cache.clear();
    expect(memoizedSum.cache.size).toBe(0);

    memoizedSum(1, 2);
    expect(expensiveFunction).toHaveBeenCalledTimes(2); // Called again after cache clear
  });
});