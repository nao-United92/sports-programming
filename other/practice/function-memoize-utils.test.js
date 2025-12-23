const memoize = require('./function-memoize-utils');

describe('memoize', () => {
  test('should memoize function results based on the first argument by default', () => {
    let callCount = 0;
    const expensiveFunction = (a, b) => {
      callCount++;
      return a + b;
    };
    const memoizedAdd = memoize(expensiveFunction);

    expect(memoizedAdd(1, 2)).toBe(3);
    expect(callCount).toBe(1);

    expect(memoizedAdd(1, 3)).toBe(3); // Should return cached result for key 1
    expect(callCount).toBe(1);

    expect(memoizedAdd(2, 2)).toBe(4);
    expect(callCount).toBe(2);

    expect(memoizedAdd(2, 5)).toBe(4); // Should return cached result for key 2
    expect(callCount).toBe(2);
  });

  test('should memoize function results using a custom resolver', () => {
    let callCount = 0;
    const expensiveFunction = (a, b) => {
      callCount++;
      return a + b;
    };
    const resolver = (a, b) => `${a}_${b}`; // Custom resolver creates key "a_b"
    const memoizedAdd = memoize(expensiveFunction, resolver);

    expect(memoizedAdd(1, 2)).toBe(3);
    expect(callCount).toBe(1);

    expect(memoizedAdd(1, 2)).toBe(3); // Should return cached result for key "1_2"
    expect(callCount).toBe(1);

    expect(memoizedAdd(2, 1)).toBe(3);
    expect(callCount).toBe(2);

    expect(memoizedAdd(1, 3)).toBe(4);
    expect(callCount).toBe(3);
  });

  test('should allow clearing the cache', () => {
    let callCount = 0;
    const expensiveFunction = (a) => {
      callCount++;
      return a * 2;
    };
    const memoizedMultiply = memoize(expensiveFunction);

    memoizedMultiply(5);
    expect(callCount).toBe(1);
    memoizedMultiply(5);
    expect(callCount).toBe(1);

    memoizedMultiply.cache.clear();
    memoizedMultiply(5);
    expect(callCount).toBe(2);
  });

  test('should throw TypeError if func is not a function', () => {
    expect(() => memoize(null)).toThrow(TypeError);
    expect(() => memoize(undefined)).toThrow(TypeError);
    expect(() => memoize(123)).toThrow(TypeError);
    expect(() => memoize('string')).toThrow(TypeError);
    expect(() => memoize({})).toThrow(TypeError);
  });

  test('should handle `this` context correctly', () => {
    let callCount = 0;
    const obj = {
      value: 10,
      add: function(a) {
        callCount++;
        return this.value + a;
      },
    };
    const memoizedAdd = memoize(obj.add, (a) => a); // Resolver based on 'a'

    // Bind the memoized function to obj for 'this' context
    const boundMemoizedAdd = memoizedAdd.bind(obj);

    expect(boundMemoizedAdd(5)).toBe(15);
    expect(callCount).toBe(1);

    expect(boundMemoizedAdd(5)).toBe(15); // Should use cache
    expect(callCount).toBe(1);

    expect(boundMemoizedAdd(10)).toBe(20);
    expect(callCount).toBe(2);
  });
});