import { debounce, throttle, memoize, once, pipe, compose } from './function-advanced-utils';

describe('debounce', () => {
  jest.useFakeTimers();

  test('should debounce a function call', () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func, 100);

    debouncedFunc();
    debouncedFunc();
    debouncedFunc();

    expect(func).not.toHaveBeenCalled();

    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should call the function with correct arguments and context', () => {
    const func = jest.fn(function(a, b) {
      return a + b;
    });
    const debouncedFunc = debounce(func, 100);

    debouncedFunc(1, 2);
    jest.advanceTimersByTime(100);

    expect(func).toHaveBeenCalledWith(1, 2);
    expect(func).toHaveReturnedWith(3);
  });
});

describe('throttle', () => {
  jest.useFakeTimers();

  test('should throttle a function call', () => {
    const func = jest.fn();
    const throttledFunc = throttle(func, 100);

    throttledFunc(); // First call, should execute immediately
    throttledFunc(); // Second call, should be ignored
    throttledFunc(); // Third call, should be ignored

    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(50);
    throttledFunc(); // Should still be ignored
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(50);
    throttledFunc(); // Should execute after throttle limit
    expect(func).toHaveBeenCalledTimes(2);
  });

  test('should call the function with correct arguments and context', () => {
    const func = jest.fn(function(a, b) {
      return a + b;
    });
    const throttledFunc = throttle(func, 100);

    const result1 = throttledFunc(1, 2);
    expect(func).toHaveBeenCalledWith(1, 2);
    expect(result1).toBe(3);

    const result2 = throttledFunc(3, 4);
    expect(func).toHaveBeenCalledTimes(1); // Still only one call
    expect(result2).toBe(3); // Returns the result of the first call

    jest.advanceTimersByTime(100);
    const result3 = throttledFunc(5, 6);
    expect(func).toHaveBeenCalledTimes(2);
    expect(func).toHaveBeenCalledWith(5, 6);
    expect(result3).toBe(11);
  });
});

describe('memoize', () => {
  test('should memoize function results', () => {
    const func = jest.fn((a, b) => a + b);
    const memoizedFunc = memoize(func);

    expect(memoizedFunc(1, 2)).toBe(3);
    expect(func).toHaveBeenCalledTimes(1);

    expect(memoizedFunc(1, 2)).toBe(3);
    expect(func).toHaveBeenCalledTimes(1); // Should not call func again

    expect(memoizedFunc(2, 3)).toBe(5);
    expect(func).toHaveBeenCalledTimes(2);

    expect(memoizedFunc(1, 2)).toBe(3);
    expect(func).toHaveBeenCalledTimes(2); // Still only two calls
  });

  test('should handle different argument types', () => {
    const func = jest.fn((a, b) => JSON.stringify({ a, b }));
    const memoizedFunc = memoize(func);

    expect(memoizedFunc({ x: 1 }, [2])).toBe('{"a":{"x":1},"b":[2]}');
    expect(func).toHaveBeenCalledTimes(1);

    expect(memoizedFunc({ x: 1 }, [2])).toBe('{"a":{"x":1},"b":[2]}');
    expect(func).toHaveBeenCalledTimes(1);

    expect(memoizedFunc({ x: 2 }, [3])).toBe('{"a":{"x":2},"b":[3]}');
    expect(func).toHaveBeenCalledTimes(2);
  });
});

describe('once', () => {
  test('should only call the function once', () => {
    const func = jest.fn();
    const onceFunc = once(func);

    onceFunc();
    onceFunc();
    onceFunc();

    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should return the result of the first call', () => {
    const func = jest.fn((a, b) => a + b);
    const onceFunc = once(func);

    const result1 = onceFunc(1, 2);
    expect(result1).toBe(3);

    const result2 = onceFunc(3, 4);
    expect(result2).toBe(3);
  });
});

describe('pipe', () => {
  test('should compose functions from left to right', () => {
    const add1 = (x) => x + 1;
    const multiply2 = (x) => x * 2;
    const subtract3 = (x) => x - 3;

    const piped = pipe(add1, multiply2, subtract3);

    expect(piped(5)).toBe((5 + 1) * 2 - 3); // (6 * 2) - 3 = 12 - 3 = 9
  });

  test('should handle a single function', () => {
    const add1 = (x) => x + 1;
    const piped = pipe(add1);
    expect(piped(10)).toBe(11);
  });

  test('should handle no functions', () => {
    const piped = pipe();
    expect(piped(10)).toBe(10);
  });

  test('should pass initial value correctly', () => {
    const toString = (x) => String(x);
    const addExclamation = (str) => str + '!';
    const piped = pipe(toString, addExclamation);
    expect(piped(123)).toBe('123!');
  });
});

describe('compose', () => {
  test('should compose functions from right to left', () => {
    const add1 = (x) => x + 1;
    const multiply2 = (x) => x * 2;
    const subtract3 = (x) => x - 3;

    const composed = compose(subtract3, multiply2, add1);

    expect(composed(5)).toBe((5 + 1) * 2 - 3); // (6 * 2) - 3 = 12 - 3 = 9
  });

  test('should handle a single function', () => {
    const add1 = (x) => x + 1;
    const composed = compose(add1);
    expect(composed(10)).toBe(11);
  });

  test('should handle no functions', () => {
    const composed = compose();
    expect(composed(10)).toBe(10);
  });

  test('should pass initial value correctly', () => {
    const toString = (x) => String(x);
    const addExclamation = (str) => str + '!';
    const composed = compose(addExclamation, toString);
    expect(composed(123)).toBe('123!');
  });
});