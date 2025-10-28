import { memoize } from './function-memoize-utils';

describe('memoize', () => {
  let func;
  let memoizedFunc;

  beforeEach(() => {
    func = jest.fn(x => x * 2);
  });

  it('should memoize function results based on the first argument', () => {
    memoizedFunc = memoize(func);

    expect(memoizedFunc(1)).toBe(2);
    expect(func).toHaveBeenCalledTimes(1);

    expect(memoizedFunc(1)).toBe(2);
    expect(func).toHaveBeenCalledTimes(1); // Should not be called again

    expect(memoizedFunc(2)).toBe(4);
    expect(func).toHaveBeenCalledTimes(2);

    expect(memoizedFunc(2)).toBe(4);
    expect(func).toHaveBeenCalledTimes(2); // Should not be called again
  });

  it('should use a resolver function to generate the cache key', () => {
    const resolver = jest.fn((a, b) => `${a}-${b}`);
    func = jest.fn((a, b) => a + b);
    memoizedFunc = memoize(func, resolver);

    expect(memoizedFunc(1, 2)).toBe(3);
    expect(resolver).toHaveBeenCalledWith(1, 2);
    expect(func).toHaveBeenCalledTimes(1);

    expect(memoizedFunc(1, 2)).toBe(3);
    expect(resolver).toHaveBeenCalledWith(1, 2);
    expect(func).toHaveBeenCalledTimes(1); // Should not be called again

    expect(memoizedFunc(2, 1)).toBe(3);
    expect(resolver).toHaveBeenCalledWith(2, 1);
    expect(func).toHaveBeenCalledTimes(2);
  });

  it('should handle different `this` contexts', () => {
    func = jest.fn(function(x) { return this.multiplier * x; });
    memoizedFunc = memoize(func);

    const context1 = { multiplier: 2 };
    const context2 = { multiplier: 3 };

    expect(memoizedFunc.call(context1, 5)).toBe(10);
    expect(func).toHaveBeenCalledTimes(1);

    expect(memoizedFunc.call(context1, 5)).toBe(10);
    expect(func).toHaveBeenCalledTimes(1);

    expect(memoizedFunc.call(context2, 5)).toBe(15);
    expect(func).toHaveBeenCalledTimes(2);
  });

  it('should allow clearing the cache', () => {
    memoizedFunc = memoize(func);

    memoizedFunc(1);
    expect(func).toHaveBeenCalledTimes(1);

    memoizedFunc.cache.clear();

    memoizedFunc(1);
    expect(func).toHaveBeenCalledTimes(2); // Should be called again after cache clear
  });

  it('should return the same memoized function instance', () => {
    const memoizedFunc1 = memoize(func);
    const memoizedFunc2 = memoize(func);
    expect(memoizedFunc1).not.toBe(memoizedFunc2);
    expect(memoizedFunc1.cache).not.toBe(memoizedFunc2.cache);
  });

  it('should throw an error if func is not a function', () => {
    expect(() => memoize(null)).toThrow('Expected a function');
    expect(() => memoize('not a function')).toThrow('Expected a function');
  });

  it('should throw an error if resolver is not a function (and not null/undefined)', () => {
    expect(() => memoize(func, 'not a function')).toThrow('Expected a function');
  });
});
