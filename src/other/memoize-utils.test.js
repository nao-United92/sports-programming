import { memoize } from './memoize-utils.js';

describe('memoize', () => {
  test('should return a function', () => {
    const memoized = memoize(() => {});
    expect(typeof memoized).toBe('function');
  });

  test('should call the original function only once for the same arguments', () => {
    const originalFunc = jest.fn((a, b) => a + b);
    const memoizedFunc = memoize(originalFunc);

    memoizedFunc(1, 2);
    memoizedFunc(1, 2);
    memoizedFunc(1, 2);

    expect(originalFunc).toHaveBeenCalledTimes(1);
  });

  test('should return the cached result for subsequent calls with same arguments', () => {
    const originalFunc = jest.fn((a, b) => a + b);
    const memoizedFunc = memoize(originalFunc);

    const result1 = memoizedFunc(1, 2);
    const result2 = memoizedFunc(1, 2);

    expect(result1).toBe(3);
    expect(result2).toBe(3);
    expect(originalFunc).toHaveBeenCalledTimes(1);
  });

  test('should call the original function again for different arguments', () => {
    const originalFunc = jest.fn((a, b) => a + b);
    const memoizedFunc = memoize(originalFunc);

    memoizedFunc(1, 2); // First call
    memoizedFunc(3, 4); // Second call with different args

    expect(originalFunc).toHaveBeenCalledTimes(2);
  });

  test('should return correct results for different arguments', () => {
    const memoizedFunc = memoize((a, b) => a + b);

    const result1 = memoizedFunc(1, 2);
    const result2 = memoizedFunc(3, 4);
    const result3 = memoizedFunc(1, 2); // Should be from cache

    expect(result1).toBe(3);
    expect(result2).toBe(7);
    expect(result3).toBe(3);
  });
});
