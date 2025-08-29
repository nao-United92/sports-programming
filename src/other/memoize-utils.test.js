import { memoize } from './memoize-utils.js';

describe('memoize', () => {
  it('should memoize the result of a function', () => {
    const func = jest.fn(x => x * 2);
    const memoizedFunc = memoize(func);

    expect(memoizedFunc(2)).toBe(4);
    expect(memoizedFunc(2)).toBe(4);
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should use a resolver function to determine the cache key', () => {
    const func = jest.fn(obj => obj.a + obj.b);
    const resolver = obj => JSON.stringify(obj);
    const memoizedFunc = memoize(func, resolver);

    const obj1 = { a: 1, b: 2 };
    const obj2 = { a: 1, b: 2 };

    expect(memoizedFunc(obj1)).toBe(3);
    expect(memoizedFunc(obj2)).toBe(3);
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should have a cache property on the memoized function', () => {
    const func = () => 'result';
    const memoizedFunc = memoize(func);
    memoizedFunc();
    expect(memoizedFunc.cache instanceof Map).toBe(true);
    expect(memoizedFunc.cache.get(undefined)).toBe('result');
  });

  it('should differentiate cache keys for different arguments', () => {
    const func = jest.fn(x => x * 2);
    const memoizedFunc = memoize(func);

    memoizedFunc(2);
    memoizedFunc(3);

    expect(func).toHaveBeenCalledTimes(2);
  });
});
