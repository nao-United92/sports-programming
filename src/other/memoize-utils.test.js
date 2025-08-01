
import { memoize } from './memoize-utils.js';

describe('memoize', () => {
  test('should memoize a simple function', () => {
    const func = jest.fn(x => x * 2);
    const memoizedFunc = memoize(func);

    expect(memoizedFunc(2)).toBe(4);
    expect(memoizedFunc(2)).toBe(4);
    expect(func).toHaveBeenCalledTimes(1);

    expect(memoizedFunc(3)).toBe(6);
    expect(memoizedFunc(3)).toBe(6);
    expect(func).toHaveBeenCalledTimes(2);
  });

  test('should use a resolver function to determine the cache key', () => {
    const func = jest.fn(obj => obj.a);
    const memoizedFunc = memoize(func, obj => obj.id);

    const obj1 = { id: 1, a: 1 };
    const obj2 = { id: 1, a: 2 }; // Same id, different 'a' value
    const obj3 = { id: 2, a: 3 };

    expect(memoizedFunc(obj1)).toBe(1);
    expect(memoizedFunc(obj2)).toBe(1); // Should return cached value from obj1
    expect(func).toHaveBeenCalledTimes(1);

    expect(memoizedFunc(obj3)).toBe(3);
    expect(func).toHaveBeenCalledTimes(2);
  });

  test('should expose the cache on the memoized function', () => {
    const func = x => x;
    const memoizedFunc = memoize(func);

    memoizedFunc('a');
    expect(memoizedFunc.cache.has('a')).toBe(true);
    expect(memoizedFunc.cache.get('a')).toBe('a');
  });

  test('should handle multiple arguments when no resolver is provided (uses first arg as key)', () => {
    const func = jest.fn((a, b) => a + b);
    const memoizedFunc = memoize(func);

    expect(memoizedFunc(1, 2)).toBe(3);
    expect(memoizedFunc(1, 10)).toBe(3); // Second arg is ignored, returns cached result
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should maintain the `this` context', () => {
    const func = jest.fn(function(x) {
      return this.multiplier * x;
    });

    const context = {
      multiplier: 10,
      memoized: memoize(func)
    };

    expect(context.memoized(2)).toBe(20);
    expect(context.memoized(2)).toBe(20);
    expect(func).toHaveBeenCalledTimes(1);
  });
});
