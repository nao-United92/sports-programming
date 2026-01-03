const throttle = require('./function-throttle-util');

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
    // Ensure any pending throttled calls are cancelled for clean state
    if (throttledFunc.cancel) {
      throttledFunc.cancel();
    }
  });

  it('should call the function immediately on the first invocation', () => {
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should not call the function again within the throttle period if no trailing call is needed', () => {
    throttledFunc(); // 0ms: called
    jest.advanceTimersByTime(50); // 50ms
    throttledFunc(); // No immediate call, trailing call scheduled
    jest.advanceTimersByTime(49); // 99ms
    expect(func).toHaveBeenCalledTimes(1); // Only the leading call
  });

  it('should call the function again after the throttle period has passed for trailing calls', () => {
    throttledFunc(); // 0ms: called
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(50); // 50ms
    throttledFunc(); // Not called immediately, but a trailing call is scheduled

    jest.advanceTimersByTime(50); // 100ms: trailing call should execute
    expect(func).toHaveBeenCalledTimes(2); // Leading + one trailing
  });

  it('should call the function at most once per throttle period even with rapid calls', () => {
    throttledFunc(); // 0ms: called
    for (let i = 0; i < 5; i++) {
      jest.advanceTimersByTime(10); // 10, 20, 30, 40, 50ms
      throttledFunc(); // Subsequent calls schedule a trailing execution
    }
    expect(func).toHaveBeenCalledTimes(1); // Only the leading call has happened

    jest.advanceTimersByTime(50); // 100ms: Trailing call executes
    expect(func).toHaveBeenCalledTimes(2); // Leading + one trailing

    for (let i = 0; i < 5; i++) {
      jest.advanceTimersByTime(10); // 110, 120, 130, 140, 150ms
      throttledFunc(); // Subsequent calls schedule a new trailing execution
    }
    expect(func).toHaveBeenCalledTimes(2); // No new leading calls, old trailing finished

    jest.advanceTimersByTime(50); // 200ms: New trailing call executes
    expect(func).toHaveBeenCalledTimes(3); // Leading + two trailing
  });

  it('should pass arguments to the throttled function', () => {
    throttledFunc(1, 'test');
    expect(func).toHaveBeenCalledWith(1, 'test');

    jest.advanceTimersByTime(100);
    throttledFunc(2, 'another');
    expect(func).toHaveBeenCalledWith(2, 'another');
  });

  it('should maintain the context (this) of the function', () => {
    const context = { value: 'test' };
    const mockFuncWithContext = jest.fn(function(arg) {
      expect(this).toBe(context);
      expect(arg).toBe(100);
    });
    const throttledFuncWithContext = throttle(mockFuncWithContext, 100);
    throttledFuncWithContext.call(context, 100);
    expect(mockFuncWithContext).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(100);
    expect(mockFuncWithContext).toHaveBeenCalledTimes(1); // should still be 1 if no new call
  });

  it('should cancel pending calls when cancel is invoked', () => {
    throttledFunc(); // initial call
    jest.advanceTimersByTime(50);
    throttledFunc(); // schedules trailing call
    expect(func).toHaveBeenCalledTimes(1); // only initial call
    throttledFunc.cancel();
    jest.advanceTimersByTime(100); // should not trigger trailing call
    expect(func).toHaveBeenCalledTimes(1);
  });
});