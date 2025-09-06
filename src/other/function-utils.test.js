import { memoize, once } from './function-utils.js';

describe('memoize', () => {
  test('should memoize function calls', () => {
    const mockFunc = jest.fn(x => x * 2);
    const memoizedFunc = memoize(mockFunc);

    expect(memoizedFunc(5)).toBe(10);
    expect(mockFunc).toHaveBeenCalledTimes(1);

    expect(memoizedFunc(5)).toBe(10);
    expect(mockFunc).toHaveBeenCalledTimes(1); // Should not be called again

    expect(memoizedFunc(10)).toBe(20);
    expect(mockFunc).toHaveBeenCalledTimes(2);
  });

  test('should use resolver if provided', () => {
    const mockFunc = jest.fn((a, b) => a + b);
    const resolver = (a, b) => `${a}-${b}`;
    const memoizedFunc = memoize(mockFunc, resolver);

    expect(memoizedFunc(1, 2)).toBe(3);
    expect(mockFunc).toHaveBeenCalledTimes(1);

    expect(memoizedFunc(1, 2)).toBe(3);
    expect(mockFunc).toHaveBeenCalledTimes(1); // Should not be called again

    expect(memoizedFunc(2, 1)).toBe(3);
    expect(mockFunc).toHaveBeenCalledTimes(2);
  });

  test('should handle different contexts', () => {
    const mockFunc = jest.fn(function(x) { return this.multiplier * x; });
    const memoizedFunc = memoize(mockFunc);

    const obj1 = { multiplier: 2, calculate: memoizedFunc };
    const obj2 = { multiplier: 3, calculate: memoizedFunc };

    expect(obj1.calculate(5)).toBe(10);
    expect(mockFunc).toHaveBeenCalledTimes(1);

    expect(obj2.calculate(5)).toBe(15);
    expect(mockFunc).toHaveBeenCalledTimes(2);
  });
});

describe('once', () => {
  test('should only call the function once', () => {
    const mockFunc = jest.fn(() => 'hello');
    const onceFunc = once(mockFunc);

    expect(onceFunc()).toBe('hello');
    expect(mockFunc).toHaveBeenCalledTimes(1);

    expect(onceFunc()).toBe('hello');
    expect(mockFunc).toHaveBeenCalledTimes(1); // Should still be 1

    expect(onceFunc()).toBe('hello');
    expect(mockFunc).toHaveBeenCalledTimes(1); // Still 1
  });

  test('should return the result of the first invocation on subsequent calls', () => {
    let counter = 0;
    const increment = once(() => {
      counter++;
      return counter;
    });

    expect(increment()).toBe(1);
    expect(increment()).toBe(1);
    expect(increment()).toBe(1);
    expect(counter).toBe(1);
  });

  test('should preserve the context of the first invocation', () => {
    const mockFunc = jest.fn(function() { return this.value; });
    const onceFunc = once(mockFunc);

    const obj1 = { value: 10, callOnce: onceFunc };
    const obj2 = { value: 20, callOnce: onceFunc };

    expect(obj1.callOnce()).toBe(10);
    expect(obj2.callOnce()).toBe(10); // Should return result from obj1's context
    expect(mockFunc).toHaveBeenCalledTimes(1);
  });

  test('should pass arguments only to the first invocation', () => {
    const mockFunc = jest.fn((a, b) => a + b);
    const onceFunc = once(mockFunc);

    expect(onceFunc(1, 2)).toBe(3);
    expect(mockFunc).toHaveBeenCalledWith(1, 2);

    expect(onceFunc(10, 20)).toBe(3); // Arguments should be ignored
    expect(mockFunc).toHaveBeenCalledTimes(1);
  });
});
