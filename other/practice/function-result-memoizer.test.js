import { memoize } from './function-result-memoizer.js';

describe('memoize', () => {
  let costlyFunction;
  let memoizedFunction;

  beforeEach(() => {
    costlyFunction = jest.fn((a, b) => a + b);
    memoizedFunction = memoize(costlyFunction);
  });

  test('should return the correct result', () => {
    expect(memoizedFunction(1, 2)).toBe(3);
    expect(costlyFunction).toHaveBeenCalledTimes(1);
  });

  test('should return cached result for same arguments', () => {
    memoizedFunction(1, 2);
    memoizedFunction(1, 2);
    expect(costlyFunction).toHaveBeenCalledTimes(1);
  });

  test('should compute for different arguments', () => {
    memoizedFunction(1, 2);
    memoizedFunction(3, 4);
    expect(costlyFunction).toHaveBeenCalledTimes(2);
  });

  test('should handle multiple arguments', () => {
    memoizedFunction(1, 2, 3);
    memoizedFunction(1, 2, 3);
    expect(costlyFunction).toHaveBeenCalledTimes(1);
  });

  test('should handle different argument types', () => {
    memoizedFunction({ a: 1 }, [2]);
    memoizedFunction({ a: 1 }, [2]);
    expect(costlyFunction).toHaveBeenCalledTimes(1);
  });
});
