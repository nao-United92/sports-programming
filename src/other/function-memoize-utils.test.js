import { memoize } from './function-memoize-utils.js';

describe('memoize', () => {
  test('should memoize the result of a function', () => {
    const expensiveFn = jest.fn((x) => x * 2);
    const memoizedFn = memoize(expensiveFn);

    expect(memoizedFn(2)).toBe(4);
    expect(memoizedFn(2)).toBe(4);
    expect(expensiveFn).toHaveBeenCalledTimes(1);

    expect(memoizedFn(3)).toBe(6);
    expect(memoizedFn(3)).toBe(6);
    expect(expensiveFn).toHaveBeenCalledTimes(2);
  });

  test('should handle multiple arguments', () => {
    const expensiveFn = jest.fn((a, b) => a + b);
    const memoizedFn = memoize(expensiveFn);

    expect(memoizedFn(1, 2)).toBe(3);
    expect(memoizedFn(1, 2)).toBe(3);
    expect(expensiveFn).toHaveBeenCalledTimes(1);
  });
});
