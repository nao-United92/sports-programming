const { throttle } = require('./throttle-utils.js');

describe('throttle', () => {
  let func;
  let throttledFunc;

  beforeEach(() => {
    func = jest.fn();
    jest.useFakeTimers(); // Use fake timers for testing
  });

  afterEach(() => {
    jest.runOnlyPendingTimers(); // Clear any pending timers
    jest.useRealTimers(); // Restore real timers
  });

  test('should call the function immediately and then after delay', () => {
    throttledFunc = throttle(func, 100);
    throttledFunc(); // First call, should execute immediately
    throttledFunc(); // Second call, should be throttled
    throttledFunc(); // Third call, should be throttled

    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(50);
    throttledFunc(); // Should still be throttled

    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(50); // Total 100ms passed
    expect(func).toHaveBeenCalledTimes(2); // Should execute after delay
  });

  test('should pass arguments and context correctly', () => {
    const context = { value: 42 };
    throttledFunc = throttle(func, 100);

    throttledFunc.call(context, 1, 2);
    expect(func).toHaveBeenCalledWith(1, 2);
    expect(func.mock.calls[func.mock.calls.length - 1]).toEqual([1, 2]);
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(100);
    throttledFunc.call(context, 3, 4);
    expect(func).toHaveBeenCalledWith(3, 4);
    expect(func.mock.calls[func.mock.calls.length - 1]).toEqual([3, 4]);
    expect(func).toHaveBeenCalledTimes(2);
  });

  test('cancel method should prevent pending invocations', () => {
    throttledFunc = throttle(func, 100);
    throttledFunc();
    throttledFunc(); // This call is scheduled

    expect(func).toHaveBeenCalledTimes(1);

    throttledFunc.cancel();
    jest.advanceTimersByTime(100);

    expect(func).toHaveBeenCalledTimes(1); // Should not have been called again
  });

  test('flush method should immediately invoke pending invocations', () => {
    throttledFunc = throttle(func, 100);
    throttledFunc();
    throttledFunc(10); // This call is scheduled

    expect(func).toHaveBeenCalledTimes(1);

    throttledFunc.flush();
    expect(func).toHaveBeenCalledTimes(2); // Should be called immediately
    expect(func).toHaveBeenCalledWith(10);

    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(2);
  });

  test('should work with delay 0', () => {
    throttledFunc = throttle(func, 0);
    throttledFunc();
    throttledFunc();
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(3); // All calls should execute immediately
  });
});
