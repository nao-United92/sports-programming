// src/other/event-utils.test.js

const { throttle } = require('./event-utils');

// Mock setTimeout and clearTimeout for testing throttle
jest.useFakeTimers();

describe('Event Utils', () => {
  let func;
  let throttledFunc;

  beforeEach(() => {
    func = jest.fn();
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  test('should throttle a function call', () => {
    throttledFunc = throttle(func, 100);

    throttledFunc(); // First call should execute immediately (leading edge by default)
    expect(func).toHaveBeenCalledTimes(1);

    throttledFunc(); // Second call within wait period should be ignored
    throttledFunc(); // Third call within wait period should be ignored
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(50); // Still within wait period
    throttledFunc(); // Should still be ignored
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(50); // 100ms passed since first call
    // Trailing call should execute now
    expect(func).toHaveBeenCalledTimes(2);
  });

  test('should pass the last arguments to the throttled function', () => {
    throttledFunc = throttle(func, 100);

    throttledFunc(1);
    jest.advanceTimersByTime(50);
    throttledFunc(2, 3);
    jest.advanceTimersByTime(50); // Trailing call

    expect(func).toHaveBeenCalledTimes(2);
    expect(func).toHaveBeenNthCalledWith(1, 1);
    expect(func).toHaveBeenNthCalledWith(2, 2, 3);
  });

  test('should invoke only on leading edge if trailing is false', () => {
    throttledFunc = throttle(func, 100, { leading: true, trailing: false });

    throttledFunc(1);
    expect(func).toHaveBeenCalledTimes(1);
    expect(func).toHaveBeenCalledWith(1);

    throttledFunc(2);
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1); // No trailing call
  });

  test('should invoke only on trailing edge if leading is false', () => {
    throttledFunc = throttle(func, 100, { leading: false, trailing: true });

    throttledFunc(1);
    expect(func).not.toHaveBeenCalled();

    jest.advanceTimersByTime(50);
    throttledFunc(2);
    jest.advanceTimersByTime(50); // Total 100ms from first call

    expect(func).toHaveBeenCalledTimes(1);
    expect(func).toHaveBeenCalledWith(2);
  });

  test('should cancel delayed invocations', () => {
    throttledFunc = throttle(func, 100);

    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);

    throttledFunc();
    jest.advanceTimersByTime(50);
    throttledFunc.cancel();
    jest.advanceTimersByTime(100);

    expect(func).toHaveBeenCalledTimes(1); // No trailing call after cancel
  });

  test('should flush delayed invocations immediately', () => {
    throttledFunc = throttle(func, 100);

    throttledFunc(1);
    expect(func).toHaveBeenCalledTimes(1);
    expect(func).toHaveBeenCalledWith(1);

    throttledFunc(2);
    expect(func).toHaveBeenCalledTimes(1); // Not called again yet

    throttledFunc.flush();
    expect(func).toHaveBeenCalledTimes(2);
    expect(func).toHaveBeenCalledWith(2);

    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(2); // No further calls
  });

  test('should reset timer after a full wait period without calls', () => {
    throttledFunc = throttle(func, 100);

    throttledFunc(1);
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(100); // Trailing call
    expect(func).toHaveBeenCalledTimes(2);
    expect(func).toHaveBeenCalledWith(1); // Trailing call uses last args

    jest.advanceTimersByTime(100); // Another full period, should be ready for new leading call
    throttledFunc(2);
    expect(func).toHaveBeenCalledTimes(3);
    expect(func).toHaveBeenCalledWith(2);
  });
});
