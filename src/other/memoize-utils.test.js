import { memoize } from './memoize-utils.js';

describe('memoize', () => {
  test('should memoize a simple function with a single primitive argument', () => {
    const mockFn = jest.fn(x => x * 2);
    const memoizedFn = memoize(mockFn);

    expect(memoizedFn(2)).toBe(4);
    expect(mockFn).toHaveBeenCalledTimes(1);

    expect(memoizedFn(2)).toBe(4);
    expect(mockFn).toHaveBeenCalledTimes(1); // Should not be called again

    expect(memoizedFn(3)).toBe(6);
    expect(mockFn).toHaveBeenCalledTimes(2); // Called for the new argument
  });

  test('should expose the cache on the memoized function', () => {
    const memoizedFn = memoize(x => x);
    memoizedFn(1);
    expect(memoizedFn.cache.has(1)).toBe(true);
    expect(memoizedFn.cache.get(1)).toBe(1);
  });

  test('should use a custom resolver function to generate the cache key', () => {
    const mockFn = jest.fn((obj) => obj.value);
    const resolver = (obj) => obj.id;
    const memoizedFn = memoize(mockFn, resolver);

    const obj1 = { id: 'a', value: 1 };
    const obj2 = { id: 'a', value: 2 }; // Same id, different value
    const obj3 = { id: 'b', value: 3 };

    expect(memoizedFn(obj1)).toBe(1);
    expect(mockFn).toHaveBeenCalledTimes(1);

    // Since resolver uses 'id', this should hit the cache
    expect(memoizedFn(obj2)).toBe(1);
    expect(mockFn).toHaveBeenCalledTimes(1);

    // This should be a new call
    expect(memoizedFn(obj3)).toBe(3);
    expect(mockFn).toHaveBeenCalledTimes(2);
  });

  test('should handle multiple arguments when no resolver is provided (uses first arg as key)', () => {
    const mockFn = jest.fn((a, b) => a + b);
    const memoizedFn = memoize(mockFn);

    expect(memoizedFn(2, 3)).toBe(5);
    expect(mockFn).toHaveBeenCalledTimes(1);

    // This will hit the cache because the first argument (2) is the same
    expect(memoizedFn(2, 5)).toBe(5);
    expect(mockFn).toHaveBeenCalledTimes(1);

    expect(memoizedFn(4, 1)).toBe(5);
    expect(mockFn).toHaveBeenCalledTimes(2);
  });

  test('should maintain the `this` context of the memoized function', () => {
    const mockFn = jest.fn(function(val) {
      return this.multiplier * val;
    });

    const context = {
      multiplier: 10,
      memoizedFn: memoize(mockFn)
    };

    expect(context.memoizedFn(2)).toBe(20);
    expect(mockFn).toHaveBeenCalledTimes(1);

    // Call again to check cache
    expect(context.memoizedFn(2)).toBe(20);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});