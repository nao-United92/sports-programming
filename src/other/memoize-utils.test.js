import { memoize } from './memoize-utils.js';

describe('memoize', () => {
  it('should memoize a function with a single argument', () => {
    const func = jest.fn(a => a * 2);
    const memoizedFunc = memoize(func);

    expect(memoizedFunc(2)).toBe(4);
    expect(memoizedFunc(2)).toBe(4);
    expect(func).toHaveBeenCalledTimes(1);

    expect(memoizedFunc(3)).toBe(6);
    expect(memoizedFunc(3)).toBe(6);
    expect(func).toHaveBeenCalledTimes(2);
  });

  it('should use a resolver function to determine the cache key', () => {
    const func = jest.fn(obj => obj.a);
    const memoizedFunc = memoize(func, obj => obj.a);

    const obj1 = { a: 1 };
    const obj2 = { a: 1 };
    const obj3 = { a: 2 };

    expect(memoizedFunc(obj1)).toBe(1);
    expect(memoizedFunc(obj2)).toBe(1);
    expect(func).toHaveBeenCalledTimes(1);

    expect(memoizedFunc(obj3)).toBe(2);
    expect(func).toHaveBeenCalledTimes(2);
  });

  it('should expose the cache on the memoized function', () => {
    const memoizedFunc = memoize(() => {});
    expect(memoizedFunc.cache).toBeInstanceOf(Map);
  });

  it('should allow clearing the cache', () => {
    const func = jest.fn(a => a * 2);
    const memoizedFunc = memoize(func);

    memoizedFunc(2);
    expect(func).toHaveBeenCalledTimes(1);

    memoizedFunc.cache.clear();

    memoizedFunc(2);
    expect(func).toHaveBeenCalledTimes(2);
  });

  it('should throw a TypeError if not passed a function', () => {
    expect(() => memoize(123)).toThrow(TypeError);
    expect(() => memoize(null)).toThrow(TypeError);
    expect(() => memoize({})).toThrow(TypeError);
  });

  it('should throw a TypeError if the resolver is not a function', () => {
    expect(() => memoize(() => {}, 123)).toThrow(TypeError);
    expect(() => memoize(() => {}, null)).toThrow(TypeError);
    expect(() => memoize(() => {}, {})).toThrow(TypeError);
  });
});
