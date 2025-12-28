const { memoize } = require('./function-memoize-utils');

describe('memoize', () => {
  it('should call the function only once for the same arguments', () => {
    const expensiveFn = jest.fn((x) => x * 2);
    const memoizedFn = memoize(expensiveFn);

    memoizedFn(2);
    memoizedFn(2);
    memoizedFn(2);

    expect(expensiveFn).toHaveBeenCalledTimes(1);
  });

  it('should return the cached result for subsequent calls with same arguments', () => {
    let callCount = 0;
    const expensiveFn = (x) => {
      callCount++;
      return x * 2;
    };
    const memoizedFn = memoize(expensiveFn);

    const result1 = memoizedFn(3);
    const result2 = memoizedFn(3);

    expect(callCount).toBe(1);
    expect(result1).toBe(6);
    expect(result2).toBe(6);
  });

  it('should call the function again for different arguments', () => {
    const expensiveFn = jest.fn((x) => x * 2);
    const memoizedFn = memoize(expensiveFn);

    memoizedFn(2);
    memoizedFn(3);
    memoizedFn(2);
    memoizedFn(3);

    expect(expensiveFn).toHaveBeenCalledTimes(2);
  });

  it('should handle multiple arguments', () => {
    const expensiveFn = jest.fn((a, b, c) => a + b + c);
    const memoizedFn = memoize(expensiveFn);

    memoizedFn(1, 2, 3);
    memoizedFn(1, 2, 3);
    expect(expensiveFn).toHaveBeenCalledTimes(1);

    memoizedFn(4, 5, 6);
    expect(expensiveFn).toHaveBeenCalledTimes(2);
  });
  
  it('should differentiate between similar but distinct arguments', () => {
    const expensiveFn = jest.fn(a => a);
    const memoizedFn = memoize(expensiveFn);

    memoizedFn('2');
    memoizedFn(2);

    expect(expensiveFn).toHaveBeenCalledTimes(2);
  });
});
