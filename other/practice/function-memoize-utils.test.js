const { memoize } = require('./function-memoize-utils');

describe('memoize', () => {
  it('should call the original function only once for the same arguments', () => {
    const expensiveFunction = jest.fn((x, y) => x + y);
    const memoizedFunction = memoize(expensiveFunction);

    memoizedFunction(1, 2);
    memoizedFunction(1, 2);
    memoizedFunction(1, 2);

    expect(expensiveFunction).toHaveBeenCalledTimes(1);
  });

  it('should return the correct cached value', () => {
    const expensiveFunction = jest.fn((x, y) => x + y);
    const memoizedFunction = memoize(expensiveFunction);

    const result1 = memoizedFunction(1, 2);
    const result2 = memoizedFunction(1, 2);

    expect(result1).toBe(3);
    expect(result2).toBe(3);
  });

  it('should differentiate between different arguments', () => {
    const expensiveFunction = jest.fn((x, y) => x + y);
    const memoizedFunction = memoize(expensiveFunction);

    memoizedFunction(1, 2);
    memoizedFunction(2, 3);

    expect(expensiveFunction).toHaveBeenCalledTimes(2);
  });
});
