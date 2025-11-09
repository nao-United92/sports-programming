const { memoize } = require('./function-memoize-utils');

describe('memoize', () => {
  let expensiveFunction;
  let memoizedFunction;

  beforeEach(() => {
    expensiveFunction = jest.fn((a, b) => a + b);
    memoizedFunction = memoize(expensiveFunction);
  });

  test('should call the original function only once for the same arguments', () => {
    memoizedFunction(1, 2);
    memoizedFunction(1, 2);
    memoizedFunction(1, 2);

    expect(expensiveFunction).toHaveBeenCalledTimes(1);
    expect(memoizedFunction(1, 2)).toBe(3);
  });

  test('should call the original function for different arguments', () => {
    memoizedFunction(1, 2);
    memoizedFunction(3, 4);

    expect(expensiveFunction).toHaveBeenCalledTimes(2);
    expect(memoizedFunction(1, 2)).toBe(3);
    expect(memoizedFunction(3, 4)).toBe(7);
  });

  test('should work with object arguments (using default JSON.stringify resolver)', () => {
    const obj1 = { id: 1 };
    const obj2 = { id: 2 };

    memoizedFunction(obj1, 'test');
    memoizedFunction(obj1, 'test');
    memoizedFunction(obj2, 'test');

    expect(expensiveFunction).toHaveBeenCalledTimes(2);
    expect(memoizedFunction(obj1, 'test')).toBe(`${obj1}test`); // Assuming default string concatenation
  });

  test('should work with a custom resolver', () => {
    const customResolver = (a, b) => `${a}-${b}`;
    memoizedFunction = memoize(expensiveFunction, customResolver);

    memoizedFunction(1, 2);
    memoizedFunction(1, 2);
    memoizedFunction(2, 1); // Different key due to resolver

    expect(expensiveFunction).toHaveBeenCalledTimes(2);
    expect(memoizedFunction(1, 2)).toBe(3);
    expect(memoizedFunction(2, 1)).toBe(3);
  });

  test('should expose the cache', () => {
    memoizedFunction(1, 2);
    expect(memoizedFunction.cache).toBeInstanceOf(Map);
    expect(memoizedFunction.cache.has(JSON.stringify([1, 2]))).toBe(true);
  });

  test('should handle `this` context correctly', () => {
    const context = {
      value: 10,
      add: jest.fn(function (a) {
        return this.value + a;
      }),
    };
    const memoizedAdd = memoize(context.add);

    const result1 = memoizedAdd.call(context, 5);
    const result2 = memoizedAdd.call(context, 5);

    expect(context.add).toHaveBeenCalledTimes(1);
    expect(result1).toBe(15);
    expect(result2).toBe(15);
  });
});
