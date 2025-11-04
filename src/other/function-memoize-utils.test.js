import { memoize } from './function-memoize-utils.js';

describe('memoize', () => {
  let expensiveFunction;
  let memoizedFunction;

  beforeEach(() => {
    expensiveFunction = jest.fn((a, b) => a + b);
    memoizedFunction = memoize(expensiveFunction);
  });

  it('should return the cached result for the same arguments', () => {
    memoizedFunction(1, 2);
    memoizedFunction(1, 2);
    memoizedFunction(1, 2);

    expect(expensiveFunction).toHaveBeenCalledTimes(1);
    expect(memoizedFunction(1, 2)).toBe(3);
  });

  it('should re-calculate for different arguments', () => {
    memoizedFunction(1, 2);
    memoizedFunction(3, 4);

    expect(expensiveFunction).toHaveBeenCalledTimes(2);
    expect(memoizedFunction(1, 2)).toBe(3);
    expect(memoizedFunction(3, 4)).toBe(7);
  });

  it('should handle context (this) correctly', () => {
    const context = {
      multiplier: 10,
      multiply: jest.fn(function(a) { return a * this.multiplier; })
    };
    const memoizedMultiply = memoize(context.multiply);

    memoizedMultiply.call(context, 5);
    memoizedMultiply.call(context, 5);

    expect(context.multiply).toHaveBeenCalledTimes(1);
    expect(memoizedMultiply.call(context, 5)).toBe(50);
  });

  it('should treat objects/arrays with same content as different keys if JSON.stringify is used', () => {
    const obj1 = { x: 1 };
    const obj1_copy = { x: 1 };
    const arr1 = [1, 2];
    const arr1_copy = [1, 2];

    memoizedFunction(obj1);
    memoizedFunction(obj1_copy); // JSON.stringify({x:1}) === JSON.stringify({x:1})
    memoizedFunction(arr1);
    memoizedFunction(arr1_copy); // JSON.stringify([1,2]) === JSON.stringify([1,2])

    expect(expensiveFunction).toHaveBeenCalledTimes(2); // Called for obj1, then for arr1
  });
});
