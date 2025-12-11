const memoize = require('./function-memoize-utils');

describe('memoize', () => {
  test('should return a function', () => {
    const sum = (a, b) => a + b;
    const memoizedSum = memoize(sum);
    expect(typeof memoizedSum).toBe('function');
  });

  test('should cache results and return them for subsequent calls with same arguments', () => {
    const mockFn = jest.fn((a, b) => a + b);
    const memoizedFn = memoize(mockFn);

    expect(memoizedFn(1, 2)).toBe(3);
    expect(mockFn).toHaveBeenCalledTimes(1);

    expect(memoizedFn(1, 2)).toBe(3);
    expect(mockFn).toHaveBeenCalledTimes(1); // Should not be called again

    expect(memoizedFn(3, 4)).toBe(7);
    expect(mockFn).toHaveBeenCalledTimes(2);

    expect(memoizedFn(3, 4)).toBe(7);
    expect(mockFn).toHaveBeenCalledTimes(2); // Should not be called again
  });

  test('should handle multiple arguments', () => {
    const concat = jest.fn((a, b, c) => a + b + c);
    const memoizedConcat = memoize(concat);

    expect(memoizedConcat('a', 'b', 'c')).toBe('abc');
    expect(memoizedConcat('a', 'b', 'c')).toBe('abc');
    expect(concat).toHaveBeenCalledTimes(1);

    expect(memoizedConcat('x', 'y', 'z')).toBe('xyz');
    expect(memoizedConcat('x', 'y', 'z')).toBe('xyz');
    expect(concat).toHaveBeenCalledTimes(2);
  });

  test('should correctly handle different argument types', () => {
    const getType = jest.fn((val) => typeof val);
    const memoizedGetType = memoize(getType);

    expect(memoizedGetType(1)).toBe('number');
    expect(memoizedGetType(1)).toBe('number');
    expect(getType).toHaveBeenCalledTimes(1);

    expect(memoizedGetType('hello')).toBe('string');
    expect(memoizedGetType('hello')).toBe('string');
    expect(getType).toHaveBeenCalledTimes(2);

    expect(memoizedGetType(true)).toBe('boolean');
    expect(memoizedGetType(true)).toBe('boolean');
    expect(getType).toHaveBeenCalledTimes(3);
  });

  test('should not cache results for non-primitive arguments without custom key resolver', () => {
    // Note: JSON.stringify is a simple key, it won't work for objects with different order of keys, or functions, etc.
    // For a robust memoization with complex arguments, a custom resolver function is usually passed.
    const mockFn = jest.fn((obj) => obj.value);
    const memoizedFn = memoize(mockFn);

    const obj1 = { value: 1 };
    const obj2 = { value: 1 }; // Different object reference, same content

    expect(memoizedFn(obj1)).toBe(1);
    expect(mockFn).toHaveBeenCalledTimes(1);

    // With JSON.stringify, { value: 1 } and { value: 1 } will have the same key
    expect(memoizedFn(obj2)).toBe(1);
    expect(mockFn).toHaveBeenCalledTimes(1); // Still called once because JSON.stringify creates same key

    const obj3 = { a: 1, b: 2 };
    const obj4 = { b: 2, a: 1 }; // Same content, different order
    expect(memoizedFn(obj3)).toBe(undefined); // obj3.value is undefined
    expect(mockFn).toHaveBeenCalledTimes(2);
    expect(memoizedFn(obj4)).toBe(undefined);
    expect(mockFn).toHaveBeenCalledTimes(3); // JSON.stringify(obj3) and JSON.stringify(obj4) yield different keys
  });
});
