const { throttle } = require('./throttle-utils');

// Mock timers to control time-based logic like setTimeout
jest.useFakeTimers();

describe('throttle', () => {
  let func;
  let throttledFunc;

  beforeEach(() => {
    func = jest.fn();
  });

  it('should call the function immediately for the first time', () => {
    throttledFunc = throttle(func, 1000);
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should not call the function again within the wait period', () => {
    throttledFunc = throttle(func, 1000);
    throttledFunc(); // Called at 0ms
    throttledFunc(); // Called at 0ms, should be ignored
    throttledFunc(); // Called at 0ms, should be ignored
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should call the function again after the wait period has passed', () => {
    throttledFunc = throttle(func, 1000);
    throttledFunc(); // Called at 0ms
    expect(func).toHaveBeenCalledTimes(1);

    // Fast-forward time by 1000ms
    jest.advanceTimersByTime(1000);
    throttledFunc(); // Called at 1000ms
    expect(func).toHaveBeenCalledTimes(2);
  });

  it('should call the trailing invocation if called multiple times within the wait period', () => {
    throttledFunc = throttle(func, 1000, { trailing: true });
    throttledFunc(); // leading call
    expect(func).toHaveBeenCalledTimes(1);

    throttledFunc(); // should schedule a trailing call
    throttledFunc(); // should schedule a trailing call

    // Fast-forward time
    jest.advanceTimersByTime(1000);
    expect(func).toHaveBeenCalledTimes(2); // trailing call
  });

  it('should not call the leading invocation if leading is false', () => {
    throttledFunc = throttle(func, 1000, { leading: false });
    throttledFunc();
    expect(func).not.toHaveBeenCalled();

    // Fast-forward time
    jest.advanceTimersByTime(1000);
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should handle arguments correctly', () => {
    throttledFunc = throttle(func, 1000);
    throttledFunc(1, 'a');
    expect(func).toHaveBeenCalledWith(1, 'a');
  });

  it('should use the latest arguments for the trailing call', () => {
    throttledFunc = throttle(func, 1000, { leading: false, trailing: true });
    throttledFunc(1);
    throttledFunc(2);
    throttledFunc(3);

    jest.advanceTimersByTime(1000);
    expect(func).toHaveBeenCalledWith(3);
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('cancel should prevent a trailing invocation', () => {
    throttledFunc = throttle(func, 1000, { trailing: true });
    throttledFunc(); // leading
    expect(func).toHaveBeenCalledTimes(1);

    throttledFunc(); // schedule trailing
    throttledFunc.cancel();

    jest.advanceTimersByTime(1000);
    expect(func).toHaveBeenCalledTimes(1); // no trailing call
  });

  it('flush should immediately trigger a pending trailing invocation', () => {
    throttledFunc = throttle(func, 1000, { trailing: true });
    throttledFunc(); // leading
    expect(func).toHaveBeenCalledTimes(1);

    throttledFunc(1); // schedule trailing
    throttledFunc.flush();

    expect(func).toHaveBeenCalledWith(1);
    expect(func).toHaveBeenCalledTimes(2); // trailing call flushed
  });
});