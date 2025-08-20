import { memoize } from './memoize-utils';

describe('memoize', () => {
  let func;
  let memoizedFunc;

  beforeEach(() => {
    func = jest.fn((a, b) => a + b);
    memoizedFunc = memoize(func);
  });

  test('should return the correct result for the first call', () => {
    expect(memoizedFunc(1, 2)).toBe(3);
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should return cached result for subsequent calls with same arguments', () => {
    memoizedFunc(1, 2);
    memoizedFunc(1, 2);
    expect(memoizedFunc(1, 2)).toBe(3);
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should call the original function for different arguments', () => {
    memoizedFunc(1, 2);
    memoizedFunc(3, 4);
    expect(func).toHaveBeenCalledTimes(2);
    expect(memoizedFunc(1, 2)).toBe(3);
    expect(memoizedFunc(3, 4)).toBe(7);
    expect(func).toHaveBeenCalledTimes(2); // Still 2 calls, as results are cached
  });

  test('should handle different argument types correctly', () => {
    const obj = { a: 1 };
    const arr = [1, 2];
    func = jest.fn((arg1, arg2) => JSON.stringify({ arg1, arg2 }));
    memoizedFunc = memoize(func);

    memoizedFunc(1, 'test');
    memoizedFunc(obj, arr);
    memoizedFunc(1, 'test');
    memoizedFunc(obj, arr);

    expect(func).toHaveBeenCalledTimes(2);
  });

  test('should maintain the correct context', () => {
    const context = { multiplier: 10 };
    func = jest.fn(function(a) { return a * this.multiplier; });
    memoizedFunc = memoize(func);

    expect(memoizedFunc.call(context, 5)).toBe(50);
    expect(func).toHaveBeenCalledTimes(1);
    expect(func.mock.contexts[0]).toBe(context);

    expect(memoizedFunc.call(context, 5)).toBe(50);
    expect(func).toHaveBeenCalledTimes(1); // Should use cached result, not call func again
  });
});