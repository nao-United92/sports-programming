import { memoize } from './memoize-utils';

describe('memoize', () => {
  let func;
  let memoizedFunc;

  beforeEach(() => {
    func = jest.fn((a, b) => a + b);
    memoizedFunc = memoize(func);
  });

  test('should return the correct result for the first call', () => {
    const result = memoizedFunc(1, 2);
    expect(result).toBe(3);
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should return cached result for subsequent calls with same arguments', () => {
    memoizedFunc(1, 2);
    const result = memoizedFunc(1, 2);
    expect(result).toBe(3);
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should re-execute for different arguments', () => {
    memoizedFunc(1, 2);
    memoizedFunc(3, 4);
    expect(func).toHaveBeenCalledTimes(2);
    expect(memoizedFunc(1, 2)).toBe(3);
    expect(memoizedFunc(3, 4)).toBe(7);
    expect(func).toHaveBeenCalledTimes(2);
  });

  test('should handle different argument types', () => {
    memoizedFunc('a', 'b');
    memoizedFunc([1], [2]);
    memoizedFunc({ a: 1 }, { b: 2 });
    expect(func).toHaveBeenCalledTimes(3);
  });

  test('should preserve context', () => {
    const context = { multiplier: 10 };
    const funcWithContext = jest.fn(function(a) {
      return a * this.multiplier;
    });
    const memoizedFuncWithContext = memoize(funcWithContext);

    const result1 = memoizedFuncWithContext.call(context, 5);
    expect(result1).toBe(50);
    expect(funcWithContext).toHaveBeenCalledTimes(1);

    const result2 = memoizedFuncWithContext.call(context, 5);
    expect(result2).toBe(50);
    expect(funcWithContext).toHaveBeenCalledTimes(1);
  });
});