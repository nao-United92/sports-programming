import { memoize } from './memoize-utils.js';

describe('memoize', () => {
  test('should return the cached result for subsequent calls with the same arguments', () => {
    const complexCalculation = jest.fn((a, b) => a + b);
    const memoizedCalc = memoize(complexCalculation);

    // First call
    const result1 = memoizedCalc(2, 3);
    expect(result1).toBe(5);
    expect(complexCalculation).toHaveBeenCalledTimes(1);

    // Second call with same arguments
    const result2 = memoizedCalc(2, 3);
    expect(result2).toBe(5);
    expect(complexCalculation).toHaveBeenCalledTimes(1); // Should not be called again
  });

  test('should call the original function again for different arguments', () => {
    const complexCalculation = jest.fn((a, b) => a + b);
    const memoizedCalc = memoize(complexCalculation);

    memoizedCalc(2, 3); // First call
    expect(complexCalculation).toHaveBeenCalledTimes(1);

    memoizedCalc(5, 5); // Second call with different arguments
    expect(complexCalculation).toHaveBeenCalledTimes(2);
  });

  test('should work with functions that have no arguments', () => {
    const getConstant = jest.fn(() => 42);
    const memoizedConstant = memoize(getConstant);

    const result1 = memoizedConstant();
    expect(result1).toBe(42);
    expect(getConstant).toHaveBeenCalledTimes(1);

    const result2 = memoizedConstant();
    expect(result2).toBe(42);
    expect(getConstant).toHaveBeenCalledTimes(1);
  });

  test('should work with complex arguments like objects', () => {
    const processObject = jest.fn(obj => obj.a + obj.b);
    const memoizedProcess = memoize(processObject);

    const obj1 = { a: 1, b: 2 };
    const obj2 = { a: 1, b: 2 }; // Structurally same object
    const obj3 = { a: 3, b: 4 };

    const result1 = memoizedProcess(obj1);
    expect(result1).toBe(3);
    expect(processObject).toHaveBeenCalledTimes(1);

    const result2 = memoizedProcess(obj2);
    expect(result2).toBe(3);
    expect(processObject).toHaveBeenCalledTimes(1); // Should be cached

    const result3 = memoizedProcess(obj3);
    expect(result3).toBe(7);
    expect(processObject).toHaveBeenCalledTimes(2); // Should be called again
  });

  test('should differentiate between similar but distinct arguments', () => {
    const someFunc = jest.fn(a => a * 2);
    const memoizedFunc = memoize(someFunc);

    memoizedFunc(5); // number
    expect(someFunc).toHaveBeenCalledTimes(1);

    memoizedFunc('5'); // string
    expect(someFunc).toHaveBeenCalledTimes(2);
  });
});
