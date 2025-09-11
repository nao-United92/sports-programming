import { memoize } from './memoize-utils';

describe('memoize', () => {
  it('should memoize the result of a function', () => {
    const func = jest.fn(x => x * 2);
    const memoized = memoize(func);

    expect(memoized(2)).toBe(4);
    expect(memoized(2)).toBe(4);
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should differentiate results based on the first argument by default', () => {
    const func = jest.fn(x => x * 2);
    const memoized = memoize(func);

    memoized(2); // called
    memoized(3); // called
    expect(func).toHaveBeenCalledTimes(2);

    memoized(2); // from cache
    memoized(3); // from cache
    expect(func).toHaveBeenCalledTimes(2);
  });

  it('should use a custom resolver function to determine the cache key', () => {
    const func = jest.fn((a, b) => a + b);
    const resolver = (a, b) => `${a}-${b}`;
    const memoized = memoize(func, resolver);

    expect(memoized(2, 3)).toBe(5);
    expect(memoized(2, 3)).toBe(5);
    expect(func).toHaveBeenCalledTimes(1);

    expect(memoized(3, 2)).toBe(5);
    expect(func).toHaveBeenCalledTimes(2);
  });

  it('should expose the cache on the memoized function', () => {
    const memoized = memoize(x => x);
    memoized(1);
    expect(memoized.cache instanceof Map).toBe(true);
    expect(memoized.cache.get(1)).toBe(1);
  });

  it('should handle functions with no arguments', () => {
    const func = jest.fn(() => 'result');
    const memoized = memoize(func);

    expect(memoized()).toBe('result');
    expect(memoized()).toBe('result');
    expect(func).toHaveBeenCalledTimes(1);
    // The key will be `undefined`
    expect(memoized.cache.has(undefined)).toBe(true);
  });
});