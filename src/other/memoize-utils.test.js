const { memoize } = require('./memoize-utils');

describe('memoize', () => {
  it('should return the cached result for the same arguments', () => {
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
    const expensiveFn = jest.fn(obj => obj.a);
    const memoizedFn = memoize(expensiveFn);

    const obj1 = { a: 1 };
    const obj2 = { a: 1 }; // Structurally same, but different reference

    expect(memoizedFn(obj1)).toBe(1);
    expect(memoizedFn(obj1)).toBe(1);
    expect(memoizedFn(obj2)).toBe(1); // Should be cached due to JSON.stringify
    expect(expensiveFn).toHaveBeenCalledTimes(1);
  });

  it('should handle functions with no arguments', () => {
    const expensiveFn = jest.fn(() => 'result');
    const memoizedFn = memoize(expensiveFn);

    expect(memoizedFn()).toBe('result');
    expect(memoizedFn()).toBe('result');
    expect(expensiveFn).toHaveBeenCalledTimes(1);
  });

  it('should cache undefined results', () => {
    const expensiveFn = jest.fn(() => undefined);
    const memoizedFn = memoize(expensiveFn);

    expect(memoizedFn()).toBeUndefined();
    expect(memoizedFn()).toBeUndefined();
    expect(expensiveFn).toHaveBeenCalledTimes(1);
  });
});