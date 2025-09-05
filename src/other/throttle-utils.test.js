import { throttle } from './throttle-utils.js';

// We need to use fake timers to test throttle
jest.useFakeTimers();

describe('throttle', () => {
  let func;

  beforeEach(() => {
    func = jest.fn();
  });

  it('should call the function immediately on the first call', () => {
    const throttled = throttle(func, 100);
    throttled();
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should not call the function again within the wait period', () => {
    const throttled = throttle(func, 100);
    throttled(); // Call 1
    throttled(); // Call 2 (should be ignored)
    throttled(); // Call 3 (should be ignored)
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should call the function again after the wait period', () => {
    const throttled = throttle(func, 100);
    throttled();
    expect(func).toHaveBeenCalledTimes(1);

    // Fast-forward time
    jest.advanceTimersByTime(100);
    throttled();
    expect(func).toHaveBeenCalledTimes(2);
  });

  it('should handle trailing calls', () => {
    const throttled = throttle(func, 100, { leading: true, trailing: true });
    throttled(); // leading call
    expect(func).toHaveBeenCalledTimes(1);

    throttled(); // trailing call setup
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(2);
  });

  it('should not trigger a trailing call if not invoked during the wait period', () => {
    const throttled = throttle(func, 100, { trailing: true });
    throttled();
    expect(func).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1); // No second call because it wasn't called again
  });

  it('should cancel the throttled function', () => {
    const throttled = throttle(func, 100, { trailing: true });
    throttled();
    throttled();
    throttled.cancel();
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1); // Only the leading call, trailing is cancelled
  });

  it('should flush the throttled function', () => {
    const throttled = throttle(func, 100, { trailing: true });
    throttled(); // leading call
    throttled(); // trailing call setup

    throttled.flush();
    expect(func).toHaveBeenCalledTimes(2);
  });
});
