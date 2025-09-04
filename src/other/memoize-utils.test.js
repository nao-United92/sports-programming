import memoize from './memoize-utils.js';

describe('memoize', () => {
  test('should memoize the result of a function', () => {
    const func = jest.fn((a, b) => a + b);
    const memoized = memoize(func);

    expect(memoized(1, 2)).toBe(3);
    expect(memoized(1, 3)).toBe(3); // Should return cached result for key 1
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should use the first argument as the default cache key', () => {
    const func = jest.fn(x => x);
    const memoized = memoize(func);

    memoized('a');
    memoized('a');
    memoized('b');
    memoized('b');

    expect(func).toHaveBeenCalledTimes(2);
  });

  test('should use a custom resolver to generate the cache key', () => {
    const func = jest.fn();
    const resolver = (...args) => JSON.stringify(args);
    const memoized = memoize(func, resolver);

    memoized(1, 2);
    memoized(1, 2);
    memoized(2, 1);
    memoized(2, 1);

    expect(func).toHaveBeenCalledTimes(2);
  });

  test('should work with async functions', async () => {
    const asyncFunc = jest.fn(async (x) => {
      await new Promise(resolve => setTimeout(resolve, 10));
      return `result-${x}`;
    });

    const memoized = memoize(asyncFunc);

    const p1 = memoized('a');
    const p2 = memoized('a');
    const p3 = memoized('b');

    expect(p1).toBe(p2); // Should return the same promise instance

    const results = await Promise.all([p1, p2, p3]);

    expect(results[0]).toBe('result-a');
    expect(results[1]).toBe('result-a');
    expect(results[2]).toBe('result-b');
    expect(asyncFunc).toHaveBeenCalledTimes(2);
  });
  
  test('should expose the cache on the memoized function', () => {
    const memoized = memoize(() => {});
    expect(memoized.cache).toBeInstanceOf(Map);
  });
});
