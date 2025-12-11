const throttle = require('./function-throttle-utils');

describe('throttle', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  test('should throttle a function to be called at most once per wait interval', () => {
    const mockFn = jest.fn();
    const throttledFn = throttle(mockFn, 100);

    throttledFn(); // Call 1 - should execute immediately
    throttledFn(); // Call 2 - should be ignored
    throttledFn(); // Call 3 - should be ignored

    expect(mockFn).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(50); // Advance time, still within throttle
    throttledFn(); // Call 4 - should be ignored (or scheduled for after wait)
    expect(mockFn).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(50); // Total 100ms passed since first call
    // The throttled function should now execute the last ignored call,
    // or if the implementation uses leading edge + trailing edge,
    // it will call it once the interval passes.
    expect(mockFn).toHaveBeenCalledTimes(2); // Should have executed the trailing call

    throttledFn(); // Call 5 - should execute immediately again
    expect(mockFn).toHaveBeenCalledTimes(3);

    jest.advanceTimersByTime(100);
    expect(mockFn).toHaveBeenCalledTimes(3); // No trailing calls to execute
  });

  test('should pass arguments to the throttled function', () => {
    const mockFn = jest.fn();
    const throttledFn = throttle(mockFn, 100);

    throttledFn(1, 2);
    jest.advanceTimersByTime(100);

    expect(mockFn).toHaveBeenCalledWith(1, 2);
  });

  test('should maintain the `this` context', () => {
    const obj = {
      value: 1,
      method: jest.fn(function(arg) { this.value = arg; })
    };
    obj.throttledMethod = throttle(obj.method, 100);

    obj.throttledMethod(5);
    jest.advanceTimersByTime(100);

    expect(obj.method).toHaveBeenCalledTimes(1);
    expect(obj.value).toBe(5);
  });
});
