import { memoize } from './memoize-utils';

describe('memoize', () => {
  let func;
  let memoizedFunc;

  beforeEach(() => {
    func = jest.fn(x => x * 2);
    memoizedFunc = memoize(func);
  });

  test('should call the original function only once for the same arguments', () => {
    memoizedFunc(1);
    memoizedFunc(1);
    memoizedFunc(2);
    memoizedFunc(2);
    expect(func).toHaveBeenCalledTimes(2);
  });

  test('should return the cached result for the same arguments', () => {
    const result1 = memoizedFunc(1);
    const result2 = memoizedFunc(1);
    expect(result1).toBe(2);
    expect(result2).toBe(2);
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should call the original function for different arguments', () => {
    memoizedFunc(1);
    memoizedFunc(2);
    expect(func).toHaveBeenCalledTimes(2);
  });

  test('should handle multiple arguments', () => {
    func = jest.fn((a, b) => a + b);
    memoizedFunc = memoize(func);

    memoizedFunc(1, 2);
    memoizedFunc(1, 2);
    memoizedFunc(2, 1);

    expect(func).toHaveBeenCalledTimes(2);
    expect(func).toHaveBeenCalledWith(1, 2);
    expect(func).toHaveBeenCalledWith(2, 1);
  });

  
});
