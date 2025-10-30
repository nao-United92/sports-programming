const { throttle } = require('./function-throttle-utils.js');

describe('throttle', () => {
  let func;
  let throttledFunc;

  beforeEach(() => {
    func = jest.fn();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('should execute the function immediately on the leading edge by default', () => {
    throttledFunc = throttle(func, 100);
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should not execute the function again within the wait period', () => {
    throttledFunc = throttle(func, 100);
    throttledFunc();
    throttledFunc(); // Second call within wait period
    throttledFunc(); // Third call within wait period
    expect(func).toHaveBeenCalledTimes(1); // Still only called once
  });

  it('should execute the function on the trailing edge if called within the wait period', () => {
    throttledFunc = throttle(func, 100);
    throttledFunc(); // Leading call
    jest.advanceTimersByTime(50);
    throttledFunc(); // Call within wait period
    expect(func).toHaveBeenCalledTimes(1); // Still only leading call

    jest.advanceTimersByTime(50); // Advance to end of wait period
    expect(func).toHaveBeenCalledTimes(2); // Trailing call should happen
  });

  it('should pass arguments and context to the throttled function', () => {
    throttledFunc = throttle(func, 100);
    const context = { a: 1 };
    throttledFunc.call(context, 'arg1', 'arg2');
    expect(func).toHaveBeenCalledWith('arg1', 'arg2');
    expect(func).toHaveBeenCalledOnLastCallWith('arg1', 'arg2');
  });

  it('should respect leading: false option', () => {
    throttledFunc = throttle(func, 100, { leading: false });
    throttledFunc();
    expect(func).not.toHaveBeenCalled(); // Not called immediately

    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1); // Called on trailing edge
  });

  it('should respect trailing: false option', () => {
    throttledFunc = throttle(func, 100, { trailing: false });
    throttledFunc(); // Leading call
    jest.advanceTimersByTime(50);
    throttledFunc(); // Call within wait period
    jest.advanceTimersByTime(50); // Advance to end of wait period
    expect(func).toHaveBeenCalledTimes(1); // Only leading call, no trailing
  });

  it('should allow cancelling delayed invocations', () => {
    throttledFunc = throttle(func, 100, { leading: false });
    throttledFunc();
    jest.advanceTimersByTime(50);
    throttledFunc.cancel();
    jest.advanceTimersByTime(100);
    expect(func).not.toHaveBeenCalled(); // Should not have been called
  });

  it('should reset after a long pause', () => {
    throttledFunc = throttle(func, 100);
    throttledFunc(); // Call 1 (leading)
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(50);
    throttledFunc(); // Call 2 (trailing scheduled)
    jest.advanceTimersByTime(50);
    expect(func).toHaveBeenCalledTimes(2); // Call 2 (trailing executed)

    jest.advanceTimersByTime(500); // Long pause
    throttledFunc(); // Call 3 (leading again)
    expect(func).toHaveBeenCalledTimes(3);
  });
});
