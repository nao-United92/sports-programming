import { debounce } from './function-debounce-utils.js';

describe('debounce', () => {
  let func;
  let debouncedFunc;

  beforeEach(() => {
    func = jest.fn();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('should debounce a function', () => {
    debouncedFunc = debounce(func, 100);

    debouncedFunc();
    debouncedFunc();
    debouncedFunc();

    // Function should not have been called yet
    expect(func).not.toHaveBeenCalled();

    // Advance timers by less than the wait time
    jest.advanceTimersByTime(50);
    expect(func).not.toHaveBeenCalled();

    // Advance timers by the wait time
    jest.advanceTimersByTime(50);
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should call the function with the latest arguments', () => {
    debouncedFunc = debounce(func, 100);

    debouncedFunc(1);
    debouncedFunc(2);
    debouncedFunc(3);

    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledWith(3);
  });

  it('should call the function with the correct `this` context', () => {
    debouncedFunc = debounce(func, 100);
    const context = { a: 1 };

    debouncedFunc.call(context);

    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledOnLastCallWith(); // Check if called with no args
    expect(func).toHaveBeenCalledTimes(1);
    expect(func).toHaveBeenCalledWith(); // Ensure it was called
  });

  it('should call immediately if leading option is true', () => {
    debouncedFunc = debounce(func, 100, { leading: true, trailing: false });

    debouncedFunc();
    expect(func).toHaveBeenCalledTimes(1);

    debouncedFunc();
    jest.advanceTimersByTime(50);
    debouncedFunc();
    expect(func).toHaveBeenCalledTimes(1); // Still only one call

    jest.advanceTimersByTime(50);
    debouncedFunc(); // Should call again after wait time passes
    expect(func).toHaveBeenCalledTimes(2);
  });

  it('should not call on trailing edge if trailing option is false', () => {
    debouncedFunc = debounce(func, 100, { trailing: false });

    debouncedFunc();
    jest.advanceTimersByTime(100);
    expect(func).not.toHaveBeenCalled();
  });

  it('should cancel a debounced function', () => {
    debouncedFunc = debounce(func, 100);

    debouncedFunc();
    jest.advanceTimersByTime(50);
    debouncedFunc.cancel();
    jest.advanceTimersByTime(50);

    expect(func).not.toHaveBeenCalled();
  });

  it('should flush a debounced function', () => {
    debouncedFunc = debounce(func, 100);

    debouncedFunc();
    expect(func).not.toHaveBeenCalled();

    debouncedFunc.flush();
    expect(func).toHaveBeenCalledTimes(1);

    // Subsequent calls should still be debounced
    debouncedFunc();
    expect(func).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(2);
  });

  it('should return the result of the last successful invocation on flush', () => {
    let callCount = 0;
    const funcWithReturn = jest.fn(() => ++callCount);
    debouncedFunc = debounce(funcWithReturn, 100);

    debouncedFunc();
    expect(debouncedFunc.flush()).toBe(1);
    expect(funcWithReturn).toHaveBeenCalledTimes(1);

    debouncedFunc();
    debouncedFunc();
    expect(debouncedFunc.flush()).toBe(2);
    expect(funcWithReturn).toHaveBeenCalledTimes(2);
  });

  it('should handle multiple rapid calls correctly with leading and trailing', () => {
    debouncedFunc = debounce(func, 100, { leading: true, trailing: true });

    debouncedFunc(); // Leading call
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(50);
    debouncedFunc(); // Should not call immediately
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(50); // Trailing call
    expect(func).toHaveBeenCalledTimes(2);

    jest.advanceTimersByTime(100);
    debouncedFunc(); // Leading call again
    expect(func).toHaveBeenCalledTimes(3);
  });
});
