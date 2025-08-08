import { memoize } from './memoize-utils';

describe('memoize', () => {
  let func;
  let memoizedFunc;

  beforeEach(() => {
    func = jest.fn((a, b) => a + b);
    memoizedFunc = memoize(func);
  });

  test('should call the original function and return its result', () => {
    const result = memoizedFunc(1, 2);
    expect(result).toBe(3);
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should return cached result for same arguments without calling original function', () => {
    memoizedFunc(1, 2);
    memoizedFunc(1, 2);
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should call original function for different arguments', () => {
    memoizedFunc(1, 2);
    memoizedFunc(3, 4);
    expect(func).toHaveBeenCalledTimes(2);
  });

  test('should handle multiple sets of arguments', () => {
    memoizedFunc(1, 2);
    memoizedFunc(3, 4);
    memoizedFunc(1, 2);
    memoizedFunc(5, 6);
    expect(func).toHaveBeenCalledTimes(3);
    expect(memoizedFunc(1, 2)).toBe(3);
  });

  test('should handle arguments of different types', () => {
    const obj = { a: 1 };
    const arr = [1, 2];
    func = jest.fn((arg1, arg2) => JSON.stringify({ arg1, arg2 }));
    memoizedFunc = memoize(func);

    memoizedFunc(1, 'test');
    memoizedFunc(obj, arr);
    memoizedFunc(1, 'test');

    expect(func).toHaveBeenCalledTimes(2);
    expect(memoizedFunc(obj, arr)).toBe(JSON.stringify({ arg1: obj, arg2: arr }));
  });

  test('should handle functions with no arguments', () => {
    func = jest.fn(() => Math.random());
    memoizedFunc = memoize(func);

    const result1 = memoizedFunc();
    const result2 = memoizedFunc();

    expect(func).toHaveBeenCalledTimes(1);
    expect(result1).toBe(result2);
  });
});