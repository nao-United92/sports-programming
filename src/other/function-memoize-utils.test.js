const { memoize } = require('./function-memoize-utils.js');

describe('memoize', () => {
  test('should memoize the result of a function', () => {
    const spy = jest.fn(x => x * 2);
    const memoized = memoize(spy);

    expect(memoized(1)).toBe(2);
    expect(spy).toHaveBeenCalledTimes(1);

    expect(memoized(1)).toBe(2);
    expect(spy).toHaveBeenCalledTimes(1); // Should not be called again for the same argument

    expect(memoized(2)).toBe(4);
    expect(spy).toHaveBeenCalledTimes(2);

    expect(memoized(2)).toBe(4);
    expect(spy).toHaveBeenCalledTimes(2);
  });

  test('should use a resolver function to generate the cache key', () => {
    const spy = jest.fn((a, b) => a + b);
    const resolver = (a, b) => `${a}-${b}`;
    const memoized = memoize(spy, resolver);

    expect(memoized(1, 2)).toBe(3);
    expect(spy).toHaveBeenCalledTimes(1);

    expect(memoized(1, 2)).toBe(3);
    expect(spy).toHaveBeenCalledTimes(1);

    expect(memoized(2, 1)).toBe(3);
    expect(spy).toHaveBeenCalledTimes(2);

    expect(memoized(2, 1)).toBe(3);
    expect(spy).toHaveBeenCalledTimes(2);
  });

  test('should have a cache property that is a Map', () => {
    const memoized = memoize(() => {});
    expect(memoized.cache).toBeInstanceOf(Map);
  });

  test('should throw an error if func is not a function', () => {
    expect(() => memoize(null)).toThrow('Expected a function');
    expect(() => memoize('string')).toThrow('Expected a function');
  });

  test('should clear the cache when memoized.cache.clear() is called', () => {
    const spy = jest.fn(x => x * 2);
    const memoized = memoize(spy);

    memoized(1);
    expect(spy).toHaveBeenCalledTimes(1);

    memoized.cache.clear();

    memoized(1);
    expect(spy).toHaveBeenCalledTimes(2); // Should be called again after cache clear
  });
});