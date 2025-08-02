import { debounce } from './debounce-utils.js';

jest.useFakeTimers();

describe('debounce', () => {
  let func;
  let debouncedFunc;

  beforeEach(() => {
    func = jest.fn();
  });

  test('should execute function after wait time', () => {
    debouncedFunc = debounce(func, 1000);
    debouncedFunc();
    expect(func).not.toHaveBeenCalled();
    jest.advanceTimersByTime(1000);
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should execute function only once for multiple rapid calls', () => {
    debouncedFunc = debounce(func, 1000);
    for (let i = 0; i < 5; i++) {
      debouncedFunc();
    }
    jest.advanceTimersByTime(1000);
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should reset the timer on subsequent calls', () => {
    debouncedFunc = debounce(func, 1000);
    debouncedFunc();
    jest.advanceTimersByTime(500);
    debouncedFunc(); // Call again before the wait time is over
    jest.advanceTimersByTime(500);
    expect(func).not.toHaveBeenCalled(); // Still not called
    jest.advanceTimersByTime(500);
    expect(func).toHaveBeenCalledTimes(1); // Called now
  });

  test('should execute function immediately if immediate is true', () => {
    debouncedFunc = debounce(func, 1000, true);
    debouncedFunc();
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should not execute again after wait time if immediate is true and called once', () => {
    debouncedFunc = debounce(func, 1000, true);
    debouncedFunc();
    expect(func).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(1000);
    expect(func).toHaveBeenCalledTimes(1); // Still 1
  });

  test('should execute again after wait time if called again after immediate call', () => {
    debouncedFunc = debounce(func, 1000, true);
    debouncedFunc(); // Immediate call
    expect(func).toHaveBeenCalledTimes(1);

    debouncedFunc(); // Second call within the wait time
    jest.advanceTimersByTime(1000);
    expect(func).toHaveBeenCalledTimes(1); // Should not have been called again yet

    debouncedFunc(); // Third call after the wait time
    expect(func).toHaveBeenCalledTimes(2); // Immediate call again
  });

  test('should pass arguments to the debounced function', () => {
    debouncedFunc = debounce(func, 1000);
    debouncedFunc(1, 'test');
    jest.advanceTimersByTime(1000);
    expect(func).toHaveBeenCalledWith(1, 'test');
  });
});
