import { memoize } from './memoize-utils.js';

describe('memoize', () => {
  it('should memoize a function with a single argument', () => {
    const myFn = jest.fn(x => x * 2);
    const memoizedFn = memoize(myFn);

    expect(memoizedFn(2)).toBe(4);
    expect(memoizedFn(2)).toBe(4);
    expect(myFn).toHaveBeenCalledTimes(1);

    expect(memoizedFn(3)).toBe(6);
    expect(memoizedFn(3)).toBe(6);
    expect(myFn).toHaveBeenCalledTimes(2);
  });

  it('should use a resolver function to determine the cache key', () => {
    const myFn = jest.fn();
    const resolver = (...args) => args.join('_');
    const memoizedFn = memoize(myFn, resolver);

    memoizedFn(1, 2);
    memoizedFn(1, 2);
    expect(myFn).toHaveBeenCalledTimes(1);

    memoizedFn(1, 3);
    expect(myFn).toHaveBeenCalledTimes(2);
  });

  it('should expose the cache on the memoized function', () => {
    const memoizedFn = memoize(() => {});
    expect(memoizedFn.cache).toBeInstanceOf(Map);
  });

  it('should allow clearing the cache', () => {
    const myFn = jest.fn(x => x * 2);
    const memoizedFn = memoize(myFn);

    expect(memoizedFn(2)).toBe(4);
    expect(myFn).toHaveBeenCalledTimes(1);

    memoizedFn.cache.clear();

    expect(memoizedFn(2)).toBe(4);
    expect(myFn).toHaveBeenCalledTimes(2);
  });

  it('should handle `this` context correctly', () => {
    const context = {
      multiplier: 2,
      myFn: function(x) {
        return x * this.multiplier;
      }
    };
    context.memoizedFn = memoize(context.myFn);

    const result = context.memoizedFn(5);
    expect(result).toBe(10);

    context.multiplier = 3;
    // Should return cached result
    const result2 = context.memoizedFn(5);
    expect(result2).toBe(10);
  });
});