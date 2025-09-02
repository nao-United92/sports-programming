import { memoize } from './memoize-utils.js';

describe('memoize', () => {
  test('should memoize the result of a function', () => {
    const mockFn = jest.fn((x) => x * 2);
    const memoizedFn = memoize(mockFn);

    expect(memoizedFn(2)).toBe(4);
    expect(memoizedFn(2)).toBe(4);
    expect(mockFn).toHaveBeenCalledTimes(1);

    expect(memoizedFn(3)).toBe(6);
    expect(memoizedFn(3)).toBe(6);
    expect(mockFn).toHaveBeenCalledTimes(2);
  });

  test('should use the first argument as the default cache key', () => {
    const memoized = memoize((a, b) => a + b);
    memoized(1, 2); // result is 3, cached under key 1
    memoized(1, 5); // should return cached result for key 1, which is 3
    expect(memoized(1, 10)).toBe(3);
  });

  test('should use a custom resolver to determine the cache key', () => {
    const mockFn = jest.fn((...args) => args.reduce((a, b) => a + b, 0));
    const resolver = (...args) => args.join('-');
    const memoizedFn = memoize(mockFn, resolver);

    memoizedFn(1, 2, 3); // key '1-2-3'
    memoizedFn(1, 2, 3); // should be cached
    expect(mockFn).toHaveBeenCalledTimes(1);

    memoizedFn(1, 2, 4); // key '1-2-4'
    expect(mockFn).toHaveBeenCalledTimes(2);
  });

  test('should expose the cache on the memoized function', () => {
    const memoizedFn = memoize((x) => x);
    memoizedFn('a');
    expect(memoizedFn.cache.has('a')).toBe(true);
    expect(memoizedFn.cache.get('a')).toBe('a');
  });

  test('should allow modifying the cache', () => {
    const memoizedFn = memoize((x) => x.toUpperCase());
    memoizedFn.cache.set('a', 'CUSTOM');
    expect(memoizedFn('a')).toBe('CUSTOM');
  });
});
