import { throttle } from './throttle-utils.js';

jest.useFakeTimers();

describe('throttle', () => {
  let func;

  beforeEach(() => {
    func = jest.fn();
  });

  test('should call the function immediately on the first call', () => {
    const throttledFunc = throttle(func, 100);
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should not call the function again within the wait time', () => {
    const throttledFunc = throttle(func, 100);
    throttledFunc(); // Called immediately
    throttledFunc(); // Should be throttled
    throttledFunc(); // Should be throttled
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should call the function again after the wait time (trailing call)', () => {
    const throttledFunc = throttle(func, 100);
    throttledFunc(); // Called immediately at t=0
    expect(func).toHaveBeenCalledTimes(1);

    throttledFunc(); // Throttled
    jest.advanceTimersByTime(50); // t=50
    throttledFunc(); // Throttled

    jest.advanceTimersByTime(50); // t=100, trailing call executes
    expect(func).toHaveBeenCalledTimes(2);
  });

  test('should pass the latest arguments to the trailing call', () => {
    const throttledFunc = throttle(func, 100);
    throttledFunc(1); // Called immediately
    expect(func).toHaveBeenCalledWith(1);

    throttledFunc(2);
    throttledFunc(3);

    jest.advanceTimersByTime(100); // Trailing call executes
    expect(func).toHaveBeenCalledWith(3);
    expect(func).toHaveBeenCalledTimes(2);
  });

  test('should reset after the trailing call', () => {
    const throttledFunc = throttle(func, 100);
    throttledFunc(1);
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(100);
    throttledFunc(2); // This should be treated as a new first call
    expect(func).toHaveBeenCalledWith(2);
    expect(func).toHaveBeenCalledTimes(2);
  });

  test('cancel method should prevent trailing call', () => {
    const throttledFunc = throttle(func, 100);
    throttledFunc(1);
    expect(func).toHaveBeenCalledTimes(1);

    throttledFunc(2);
    throttledFunc.cancel();

    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1); // No trailing call
  });
});
