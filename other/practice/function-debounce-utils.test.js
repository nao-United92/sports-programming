const { debounce } = require('./function-debounce-utils');

jest.useFakeTimers();

describe('debounce', () => {
  let func;
  let debouncedFunc;

  beforeEach(() => {
    func = jest.fn();
  });

  test('should call the function after the wait time', () => {
    debouncedFunc = debounce(func, 100);
    debouncedFunc();
    expect(func).not.toHaveBeenCalled();
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should only call the function once for multiple rapid calls', () => {
    debouncedFunc = debounce(func, 100);
    for (let i = 0; i < 5; i++) {
      debouncedFunc();
    }
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should call the function immediately if immediate is true', () => {
    debouncedFunc = debounce(func, 100, true);
    debouncedFunc();
    expect(func).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(100);
    // Should not be called again
    expect(func).toHaveBeenCalledTimes(1);
  });
});