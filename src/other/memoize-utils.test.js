import { memoize } from './memoize-utils';

describe('memoize', () => {
  it('should return the cached result for the same arguments', () => {
    const expensiveFunction = jest.fn((x) => x * 2);
    const memoizedFunction = memoize(expensiveFunction);

    expect(memoizedFunction(2)).toBe(4);
    expect(memoizedFunction(2)).toBe(4);
    expect(expensiveFunction).toHaveBeenCalledTimes(1);
  });

  it('should call the function again for different arguments', () => {
    const expensiveFunction = jest.fn((x, y) => x + y);
    const memoizedFunction = memoize(expensiveFunction);

    expect(memoizedFunction(1, 2)).toBe(3);
    expect(memoizedFunction(2, 3)).toBe(5);
    expect(expensiveFunction).toHaveBeenCalledTimes(2);
  });

  it('should handle complex arguments', () => {
    const expensiveFunction = jest.fn((obj) => obj.a);
    const memoizedFunction = memoize(expensiveFunction);
    const obj1 = { a: 1 };
    const obj2 = { a: 2 };

    expect(memoizedFunction(obj1)).toBe(1);
    expect(memoizedFunction(obj1)).toBe(1);
    expect(memoizedFunction(obj2)).toBe(2);
    expect(expensiveFunction).toHaveBeenCalledTimes(2);
  });
});