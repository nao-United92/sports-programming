import { memoize } from './function-memoize-utils.js';

describe('memoize', () => {
  it('should return the cached result for subsequent calls with the same arguments', () => {
    const expensiveFn = jest.fn((x) => x * 2);
    const memoizedFn = memoize(expensiveFn);

    expect(memoizedFn(2)).toBe(4);
    expect(memoizedFn(2)).toBe(4);
    expect(expensiveFn).toHaveBeenCalledTimes(1);
  });

  it('should call the function again for different arguments', () => {
    const expensiveFn = jest.fn((x, y) => x + y);
    const memoizedFn = memoize(expensiveFn);

    expect(memoizedFn(1, 2)).toBe(3);
    expect(memoizedFn(3, 4)).toBe(7);
    expect(expensiveFn).toHaveBeenCalledTimes(2);
  });

  it('should work with object arguments', () => {
    const expensiveFn = jest.fn((obj) => obj.a + obj.b);
    const memoizedFn = memoize(expensiveFn);

    const arg1 = { a: 1, b: 2 };
    const arg2 = { a: 1, b: 2 }; // Structurally same object
    const arg3 = { a: 3, b: 4 };

    expect(memoizedFn(arg1)).toBe(3);
    expect(memoizedFn(arg2)).toBe(3); // Should be cached
    expect(memoizedFn(arg3)).toBe(7);

    expect(expensiveFn).toHaveBeenCalledTimes(2);
  });

  it('should return the correct value without caching if called once', () => {
    const fn = (a, b) => a - b;
    const memoizedFn = memoize(fn);
    expect(memoizedFn(10, 5)).toBe(5);
  });
});