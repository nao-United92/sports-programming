import { memoize } from './function-memoize-utils.js';

describe('memoize', () => {
  test('should memoize the result of a function', () => {
    const func = jest.fn((a) => a * 2);
    const memoized = memoize(func);

    expect(memoized(2)).toBe(4);
    expect(memoized(2)).toBe(4);
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should return the cached value for subsequent calls', () => {
    const func = jest.fn().mockReturnValueOnce('first').mockReturnValueOnce('second');
    const memoized = memoize(func);

    const result1 = memoized('a');
    const result2 = memoized('a');

    expect(result1).toBe('first');
    expect(result2).toBe('first');
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should differentiate between different arguments', () => {
    const func = jest.fn((a) => a + 1);
    const memoized = memoize(func);

    memoized(1);
    memoized(2);

    expect(func).toHaveBeenCalledTimes(2);
  });

  test('should use a custom resolver function to determine the cache key', () => {
    const func = jest.fn();
    const resolver = (...args) => JSON.stringify(args);
    const memoized = memoize(func, resolver);

    memoized(1, 2);
    memoized(1, 2);
    memoized([1, 2]);

    expect(func).toHaveBeenCalledTimes(2);
  });

  test('should expose the cache on the memoized function', () => {
    const memoized = memoize((a) => a);
    memoized(1);
    expect(memoized.cache.has(1)).toBe(true);
    expect(memoized.cache.get(1)).toBe(1);
  });

  test('should allow clearing the cache', () => {
    const func = jest.fn((a) => a * 2);
    const memoized = memoize(func);

    memoized(2);
    memoized.cache.clear();
    memoized(2);

    expect(func).toHaveBeenCalledTimes(2);
  });
});
