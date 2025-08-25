import { memoize } from './memoize-utils.js';

describe('memoize', () => {
  test('should return the correct result', () => {
    const add = (a, b) => a + b;
    const memoizedAdd = memoize(add);
    expect(memoizedAdd(1, 2)).toBe(3);
  });

  test('should cache the result', () => {
    const expensiveFunction = jest.fn().mockImplementation((a, b) => a * b);
    const memoizedFunction = memoize(expensiveFunction);

    memoizedFunction(2, 3);
    memoizedFunction(2, 3);

    expect(expensiveFunction).toHaveBeenCalledTimes(1);
  });

  test('should not use cache for different arguments', () => {
    const expensiveFunction = jest.fn().mockImplementation((a, b) => a * b);
    const memoizedFunction = memoize(expensiveFunction);

    memoizedFunction(2, 3);
    memoizedFunction(3, 4);

    expect(expensiveFunction).toHaveBeenCalledTimes(2);
  });

  test('should handle different argument types', () => {
    const expensiveFunction = jest.fn().mockImplementation((a) => a.value);
    const memoizedFunction = memoize(expensiveFunction);

    memoizedFunction({ value: 1 });
    memoizedFunction({ value: 1 });

    expect(expensiveFunction).toHaveBeenCalledTimes(1);
  });

  test('should maintain the correct context', () => {
    const context = {
      multiplier: 2,
      calculate: function(a) {
        return a * this.multiplier;
      }
    };

    const memoizedCalculate = memoize(context.calculate);
    const result = memoizedCalculate.call(context, 5);

    expect(result).toBe(10);
  });
});