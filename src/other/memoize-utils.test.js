import { memoize } from './memoize-utils';

describe('memoize', () => {
  let func;

  beforeEach(() => {
    func = jest.fn((a, b) => a + b);
  });

  test('should cache the result of the function', () => {
    const memoizedFunc = memoize(func);

    expect(memoizedFunc(1, 2)).toBe(3);
    expect(func).toHaveBeenCalledTimes(1);

    expect(memoizedFunc(1, 2)).toBe(3);
    expect(func).toHaveBeenCalledTimes(1); // Should not be called again

    expect(memoizedFunc(2, 3)).toBe(5);
    expect(func).toHaveBeenCalledTimes(2); // Called for new arguments
  });

  test('should use the resolver function to generate the cache key', () => {
    const resolver = (...args) => args.join('-'); // e.g., '1-2'
    const memoizedFunc = memoize(func, resolver);

    expect(memoizedFunc(1, 2)).toBe(3);
    expect(func).toHaveBeenCalledTimes(1);

    expect(memoizedFunc(1, 2)).toBe(3);
    expect(func).toHaveBeenCalledTimes(1); // Should not be called again

    expect(memoizedFunc(2, 1)).toBe(3); // Different arguments, but same resolved key if resolver is (a,b) => a+b
    expect(func).toHaveBeenCalledTimes(2); // Called for new arguments
  });

  test('should preserve the context (this binding)', () => {
    const memoizedFunc = memoize(function(value) {
      this.count = (this.count || 0) + value;
      return this.count;
    });

    const context = {};
    memoizedFunc.call(context, 1);
    memoizedFunc.call(context, 1); // Should use cache

    expect(context.count).toBe(1);
  });

  test('should allow clearing the cache', () => {
    const memoizedFunc = memoize(func);

    memoizedFunc(1, 2);
    expect(func).toHaveBeenCalledTimes(1);

    memoizedFunc.cache.clear();

    memoizedFunc(1, 2);
    expect(func).toHaveBeenCalledTimes(2); // Should be called again after cache clear
  });

  test('should handle different argument types as keys', () => {
    const memoizedFunc = memoize(func);

    memoizedFunc(1);
    memoizedFunc('1');
    memoizedFunc(null);
    memoizedFunc(undefined);
    memoizedFunc({});
    memoizedFunc([]);

    expect(func).toHaveBeenCalledTimes(6);
  });
});