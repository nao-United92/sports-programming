import { throttle } from './throttle-utils';

describe('throttle', () => {
  let func;
  let throttledFunc;

  beforeEach(() => {
    func = jest.fn();
    jest.useFakeTimers(); // Use fake timers for consistent testing
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers(); // Restore real timers
  });

  test('should call the function immediately on first invocation', () => {
    throttledFunc = throttle(func, 100);
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should not call the function if invoked again within the limit', () => {
    throttledFunc = throttle(func, 100);
    throttledFunc();
    throttledFunc(); // Second call within 100ms
    throttledFunc(); // Third call within 100ms
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should call the function again after the limit has passed', () => {
    throttledFunc = throttle(func, 100);
    throttledFunc(); // Call 1
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(50);
    throttledFunc(); // Call 2 (within limit)
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(50);
    throttledFunc(); // Call 3 (should trigger after this)
    expect(func).toHaveBeenCalledTimes(2);
  });

  test('should pass arguments and context correctly', () => {
    throttledFunc = throttle(func, 100);
    const context = { a: 1 };
    throttledFunc.call(context, 1, 2);
    expect(func).toHaveBeenCalledWith(1, 2);
    expect(func).toHaveBeenCalledOnLastCallWith(1, 2);
  });

  test('should ensure the last call within the throttle period is eventually executed', () => {
    throttledFunc = throttle(func, 100);
    throttledFunc(); // 0ms: Call 1
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(50);
    throttledFunc(); // 50ms: Call 2 (throttled)

    jest.advanceTimersByTime(20);
    throttledFunc(); // 70ms: Call 3 (throttled, should override Call 2's pending execution)

    jest.advanceTimersByTime(30);
    // At this point, the timer set by Call 3 should fire, executing func.
    expect(func).toHaveBeenCalledTimes(2);
  });
});
