import { memoize } from './function-memoize-utils';

describe('memoize', () => {
  let func;

  beforeEach(() => {
    func = jest.fn((a, b) => a + b);
  });

  test('should call the original function only once for the same arguments', () => {
    const memoizedFunc = memoize(func);
    memoizedFunc(1, 2); // First call
    memoizedFunc(1, 2); // Second call with same arguments
    expect(func).toHaveBeenCalledTimes(1);
    expect(memoizedFunc(1, 2)).toBe(3); // Should return cached result
  });

  test('should call the original function for different arguments', () => {
    const memoizedFunc = memoize(func);
    memoizedFunc(1, 2);
    memoizedFunc(3, 4);
    expect(func).toHaveBeenCalledTimes(2);
  });

  test('should work with a custom resolver function', () => {
    const resolver = (a, b) => `${a}-${b}`; // Custom key generator
    const memoizedFunc = memoize(func, resolver);

    memoizedFunc(1, 2);
    memoizedFunc(1, 2);
    expect(func).toHaveBeenCalledTimes(1);
    expect(memoizedFunc.cache.has('1-2')).toBe(true);

    memoizedFunc(2, 1);
    expect(func).toHaveBeenCalledTimes(2);
    expect(memoizedFunc.cache.has('2-1')).toBe(true);
  });

  test('should preserve `this` context', () => {
    const context = {
      offset: 10
    };
    const addWithOffset = jest.fn(function(a) {
      return a + this.offset;
    });
    const memoizedAddWithOffset = memoize(addWithOffset);

    memoizedAddWithOffset.call(context, 5);
    memoizedAddWithOffset.call(context, 5);
    expect(addWithOffset).toHaveBeenCalledTimes(1);
    expect(memoizedAddWithOffset.call(context, 5)).toBe(15);
  });

  test('should expose the cache', () => {
    const memoizedFunc = memoize(func);
    memoizedFunc(1, 2);
    expect(memoizedFunc.cache).toBeInstanceOf(Map);
    expect(memoizedFunc.cache.size).toBe(1);
    expect(memoizedFunc.cache.get(JSON.stringify([1, 2]))).toBe(3);
  });

  test('should work with no arguments', () => {
    const noArgFunc = jest.fn(() => Math.random());
    const memoizedNoArgFunc = memoize(noArgFunc);

    const result1 = memoizedNoArgFunc();
    const result2 = memoizedNoArgFunc();
    expect(noArgFunc).toHaveBeenCalledTimes(1);
    expect(result1).toBe(result2);
  });
});