import { memoize } from './function-memoize-utils.js';

describe('memoize', () => {
  it('should cache results of a function', () => {
    const sum = jest.fn((a, b) => a + b);
    const memoizedSum = memoize(sum);

    expect(memoizedSum(1, 2)).toBe(3);
    expect(memoizedSum(1, 2)).toBe(3);
    expect(sum).toHaveBeenCalledTimes(1);

    expect(memoizedSum(2, 3)).toBe(5);
    expect(sum).toHaveBeenCalledTimes(2);
  });

  it('should use a custom resolver for cache key', () => {
    const combine = jest.fn((a, b) => `${a}-${b}`);
    const memoizedCombine = memoize(combine, (...args) => args.join('_')); // Resolver combines all args with '_'

    expect(memoizedCombine(1, 2)).toBe('1-2');
    expect(memoizedCombine(1, 2)).toBe('1-2');
    expect(combine).toHaveBeenCalledTimes(1);

    expect(memoizedCombine(2, 1)).toBe('2-1');
    expect(combine).toHaveBeenCalledTimes(2);

    expect(memoizedCombine(1, 3)).toBe('1-3');
    expect(combine).toHaveBeenCalledTimes(3);
  });

  it('should correctly handle `this` context', () => {
    const obj = {
      value: 10,
      getValue: jest.fn(function(num) {
        return this.value + num;
      }),
    };
    const memoizedGetValue = memoize(obj.getValue);

    expect(memoizedGetValue.call(obj, 5)).toBe(15);
    expect(memoizedGetValue.call(obj, 5)).toBe(15);
    expect(obj.getValue).toHaveBeenCalledTimes(1);

    const anotherObj = { value: 20 };
    expect(memoizedGetValue.call(anotherObj, 5)).toBe(15); // Cache key is 5, but 'this' context changes
    expect(obj.getValue).toHaveBeenCalledTimes(1); // Should be called only once if cache key is the same
  });

  it('should expose the cache via .cache property', () => {
    const func = jest.fn(a => a * 2);
    const memoizedFunc = memoize(func);

    memoizedFunc(10);
    expect(memoizedFunc.cache.get(10)).toBe(20);

    memoizedFunc(20);
    expect(memoizedFunc.cache.get(20)).toBe(40);

    expect(memoizedFunc.cache).toBeInstanceOf(Map);
  });
});