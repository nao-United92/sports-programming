import { throttle } from './function-throttle-advanced-utils.js';

describe('Function Throttle Advanced Utilities', () => {
  let func;
  let throttledFunc;

  beforeEach(() => {
    jest.useFakeTimers();
    func = jest.fn();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  test('should throttle a function call with leading and trailing edges by default', () => {
    throttledFunc = throttle(func, 100);

    throttledFunc(); // Leading edge call
    expect(func).toHaveBeenCalledTimes(1);

    throttledFunc(); // Should be throttled
    throttledFunc(); // Should be throttled
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(50);
    throttledFunc(); // Should be throttled
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(50); // 100ms passed, trailing edge call
    expect(func).toHaveBeenCalledTimes(2);

    throttledFunc(); // Leading edge call after throttle period
    expect(func).toHaveBeenCalledTimes(3);
  });

  test('should only call on the leading edge if trailing is false', () => {
    throttledFunc = throttle(func, 100, { leading: true, trailing: false });

    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(50);
    throttledFunc();
    jest.advanceTimersByTime(50);
    expect(func).toHaveBeenCalledTimes(1); // No trailing call

    throttledFunc();
    expect(func).toHaveBeenCalledTimes(2);
  });

  test('should only call on the trailing edge if leading is false', () => {
    throttledFunc = throttle(func, 100, { leading: false, trailing: true });

    throttledFunc();
    expect(func).not.toHaveBeenCalled();

    jest.advanceTimersByTime(50);
    throttledFunc();
    expect(func).not.toHaveBeenCalled();

    jest.advanceTimersByTime(50);
    expect(func).toHaveBeenCalledTimes(1); // Trailing call

    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(2);
  });

  test('should pass arguments and context correctly', () => {
    throttledFunc = throttle(func, 100);
    const context = { a: 1 };

    throttledFunc.call(context, 1, 2);
    jest.advanceTimersByTime(100);

    expect(func).toHaveBeenCalledWith(1, 2);
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should cancel a throttled function call', () => {
    throttledFunc = throttle(func, 100);

    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(50);
    throttledFunc();
    throttledFunc.cancel();
    jest.advanceTimersByTime(50);

    expect(func).toHaveBeenCalledTimes(1); // No trailing call after cancel
  });

  test('should flush a throttled function call immediately', () => {
    throttledFunc = throttle(func, 100, { leading: false });

    throttledFunc();
    expect(func).not.toHaveBeenCalled();

    throttledFunc.flush();
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should return the result of the last function call', () => {
    let counter = 0;
    const increment = () => ++counter;
    throttledFunc = throttle(increment, 100);

    let result1 = throttledFunc(); // Leading call, func called, counter = 1
    expect(result1).toBe(1);

    let result2 = throttledFunc(); // Throttled, returns lastResult (1)
    expect(result2).toBe(1);

    jest.advanceTimersByTime(100); // Trailing call, func called, counter = 2

    let result3 = throttledFunc(); // Leading call, func called, counter = 3
    expect(result3).toBe(3);
  });
});