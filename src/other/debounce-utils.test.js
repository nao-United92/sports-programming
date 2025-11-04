
import { debounce } from './debounce-utils.js';

jest.useFakeTimers();

describe('debounce', () => {
  let func;
  let debouncedFunc;

  beforeEach(() => {
    func = jest.fn();
  });

  test('should call the function after the wait time', () => {
    debouncedFunc = debounce(func, 500);

    debouncedFunc();
    expect(func).not.toHaveBeenCalled();

    jest.advanceTimersByTime(250);
    debouncedFunc();
    expect(func).not.toHaveBeenCalled();

    jest.advanceTimersByTime(500);
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should not call the function if cleared before wait time', () => {
    debouncedFunc = debounce(func, 500);

    debouncedFunc();
    jest.advanceTimersByTime(250);
    debouncedFunc();
    jest.advanceTimersByTime(250);
    // Not called yet, timer was reset
    expect(func).not.toHaveBeenCalled();

    // Fast-forward to after the last call's debounce period
    jest.advanceTimersByTime(250);
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should handle immediate=true correctly', () => {
    debouncedFunc = debounce(func, 500, true);

    debouncedFunc();
    expect(func).toHaveBeenCalledTimes(1);

    // Should not call again within the wait time
    debouncedFunc();
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(500);

    // Can be called again after the wait time
    debouncedFunc();
    expect(func).toHaveBeenCalledTimes(2);
  });

   test('should pass arguments to the original function', () => {
    debouncedFunc = debounce(func, 500);
    debouncedFunc(1, 'test');
    jest.advanceTimersByTime(500);
    expect(func).toHaveBeenCalledWith(1, 'test');
  });
});
