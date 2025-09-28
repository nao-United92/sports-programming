
import { memoize } from './memoize-utils';

describe('memoize', () => {
  test('should memoize the result of a function', () => {
    const mockFn = jest.fn(x => x * 2);
    const memoizedFn = memoize(mockFn);

    expect(memoizedFn(2)).toBe(4);
    expect(memoizedFn(2)).toBe(4);
    expect(mockFn).toHaveBeenCalledTimes(1);

    expect(memoizedFn(3)).toBe(6);
    expect(memoizedFn(3)).toBe(6);
    expect(mockFn).toHaveBeenCalledTimes(2);
  });

  test('should use the first argument as the default cache key', () => {
    const mockFn = jest.fn((a, b) => a + b);
    const memoizedFn = memoize(mockFn);

    memoizedFn(1, 2); // key is 1
    memoizedFn(1, 5); // key is 1, should be cached
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test('should use a custom resolver for the cache key', () => {
    const mockFn = jest.fn(obj => obj.a + obj.b);
    const resolver = obj => JSON.stringify(obj);
    const memoizedFn = memoize(mockFn, resolver);

    const obj1 = { a: 1, b: 2 };
    const obj2 = { a: 1, b: 2 }; // Same content, different object
    const obj3 = { a: 2, b: 3 };

    expect(memoizedFn(obj1)).toBe(3);
    expect(memoizedFn(obj2)).toBe(3); // Should be cached
    expect(mockFn).toHaveBeenCalledTimes(1);

    expect(memoizedFn(obj3)).toBe(5);
    expect(mockFn).toHaveBeenCalledTimes(2);
  });

  test('should handle zero-argument functions', () => {
    const mockFn = jest.fn(() => 'result');
    const memoizedFn = memoize(mockFn);

    memoizedFn();
    memoizedFn();
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
