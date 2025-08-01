import { debounce } from './debounce-utils.js';

jest.useFakeTimers();

describe('debounce', () => {
  let func;
  let debouncedFunc;

  beforeEach(() => {
    func = jest.fn();
  });

  test('should debounce a function, calling it after the wait time', () => {
    debouncedFunc = debounce(func, 1000);

    debouncedFunc();
    debouncedFunc();
    debouncedFunc();

    // Function should not have been called yet
    expect(func).not.toHaveBeenCalled();

    // Fast-forward time by 1000ms
    jest.advanceTimersByTime(1000);

    // Now the function should have been called exactly once
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should call the function with the last provided arguments', () => {
    debouncedFunc = debounce(func, 1000);

    debouncedFunc(1);
    debouncedFunc(2);
    debouncedFunc(3);

    jest.advanceTimersByTime(1000);

    expect(func).toHaveBeenCalledWith(3);
  });

  test('should handle immediate=true correctly, calling the function on the leading edge', () => {
    debouncedFunc = debounce(func, 1000, true);

    debouncedFunc();
    expect(func).toHaveBeenCalledTimes(1);

    debouncedFunc();
    // Should not be called again immediately
    expect(func).toHaveBeenCalledTimes(1);

    // Fast-forward time
    jest.advanceTimersByTime(1000);
    debouncedFunc();
    // Should be called again after the timeout has passed
    expect(func).toHaveBeenCalledTimes(2);
  });

  test('trailing edge invocation should not occur if immediate is true', () => {
    debouncedFunc = debounce(func, 1000, true);

    debouncedFunc(); // Called here
    expect(func).toHaveBeenCalledTimes(1);

    // Fast-forward time
    jest.advanceTimersByTime(1000);

    // Should not be called again at the end of the timeout
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should reset the timeout on subsequent calls', () => {
    debouncedFunc = debounce(func, 1000);

    debouncedFunc();
    jest.advanceTimersByTime(500);
    debouncedFunc();
    jest.advanceTimersByTime(500);
    debouncedFunc();

    expect(func).not.toHaveBeenCalled();

    jest.advanceTimersByTime(1000);
    expect(func).toHaveBeenCalledTimes(1);
  });
});