import { memoize } from './function-memoize-utils.js';

describe('memoize', () => {
  test('should memoize the result of a function', () => {
    const expensiveFunc = jest.fn(x => x * 2);
    const memoizedFunc = memoize(expensiveFunc);

    // First call
    expect(memoizedFunc(2)).toBe(4);
    expect(expensiveFunc).toHaveBeenCalledTimes(1);

    // Second call with same argument
    expect(memoizedFunc(2)).toBe(4);
    expect(expensiveFunc).toHaveBeenCalledTimes(1); // Should not be called again

    // Call with different argument
    expect(memoizedFunc(3)).toBe(6);
    expect(expensiveFunc).toHaveBeenCalledTimes(2);

    // Call with original argument again
    expect(memoizedFunc(2)).toBe(4);
    expect(expensiveFunc).toHaveBeenCalledTimes(2); // Should not be called again
  });

  test('should use a custom resolver if provided', () => {
    const expensiveFunc = jest.fn((a, b) => a + b);
    const resolver = (a, b) => `${a}_${b}`;
    const memoizedFunc = memoize(expensiveFunc, resolver);

    // First call
    expect(memoizedFunc(2, 3)).toBe(5);
    expect(expensiveFunc).toHaveBeenCalledTimes(1);

    // Second call with same arguments
    expect(memoizedFunc(2, 3)).toBe(5);
    expect(expensiveFunc).toHaveBeenCalledTimes(1);

    // Call with different arguments
    expect(memoizedFunc(3, 4)).toBe(7);
    expect(expensiveFunc).toHaveBeenCalledTimes(2);
  });

  test('should handle object arguments with default resolver (first arg)', () => {
    const expensiveFunc = jest.fn(obj => obj.value);
    const memoizedFunc = memoize(expensiveFunc);
    const obj1 = { value: 10 };
    const obj2 = { value: 20 };

    expect(memoizedFunc(obj1)).toBe(10);
    expect(expensiveFunc).toHaveBeenCalledTimes(1);

    expect(memoizedFunc(obj1)).toBe(10);
    expect(expensiveFunc).toHaveBeenCalledTimes(1);

    expect(memoizedFunc(obj2)).toBe(20);
    expect(expensiveFunc).toHaveBeenCalledTimes(2);
  });
});