import { throttle } from './function-throttle-utils';

jest.useFakeTimers();

describe('throttle', () => {
  let func;
  let throttledFunc;

  beforeEach(() => {
    func = jest.fn();
    throttledFunc = throttle(func, 100);
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  test('should call func immediately on first invocation', () => {
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should not call func again if invoked within the wait period', () => {
    throttledFunc();
    throttledFunc(); // Second call within 100ms
    throttledFunc(); // Third call within 100ms
    jest.advanceTimersByTime(50); // Advance time but still within throttle period
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should call func again for a trailing call after the wait period', () => {
    throttledFunc(); // 1st call, executes immediately
    throttledFunc(); // 2nd call, scheduled as trailing
    jest.advanceTimersByTime(100); // Pass the wait time
    expect(func).toHaveBeenCalledTimes(2); // First call + trailing call
  });

  test('should pass arguments and context correctly', () => {
    const context = {
      value: 'test'
    };
    throttledFunc.call(context, 1, 2);
    expect(func).toHaveBeenCalledWith(1, 2);
    expect(func).toHaveBeenCalledOnLastCallWith(1, 2);

    throttledFunc.call(context, 3, 4); // Trailing call
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledWith(3, 4);
    expect(func).toHaveBeenCalledOnLastCallWith(3, 4);
  });

  test('should cancel pending invocations', () => {
    throttledFunc(); // Executes
    throttledFunc(); // Scheduled for trailing
    throttledFunc.cancel();
    jest.runAllTimers();
    expect(func).toHaveBeenCalledTimes(1); // Only the leading call should have happened
  });

  test('should handle wait = 0, effectively acting like a normal function', () => {
    const immediateThrottle = throttle(func, 0);
    immediateThrottle();
    immediateThrottle();
    jest.runAllTimers();
    expect(func).toHaveBeenCalledTimes(2); // Should execute immediately each time
  });
});
