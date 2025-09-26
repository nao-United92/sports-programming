const { debounce } = require('./debounce-utils.js');

jest.useFakeTimers();

describe('debounce', () => {
  let func;
  let debouncedFunc;

  beforeEach(() => {
    func = jest.fn();
  });

  test('should debounce a function: trailing edge', () => {
    debouncedFunc = debounce(func, 100);

    debouncedFunc();
    debouncedFunc();
    debouncedFunc();

    expect(func).not.toHaveBeenCalled();

    jest.advanceTimersByTime(100);

    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should invoke with the latest arguments', () => {
    debouncedFunc = debounce(func, 100);
    debouncedFunc(1);
    debouncedFunc(2);
    debouncedFunc(3);

    jest.advanceTimersByTime(100);

    expect(func).toHaveBeenCalledWith(3);
  });

  test('should support leading: true option', () => {
    debouncedFunc = debounce(func, 100, { leading: true });

    debouncedFunc(); // Should be called immediately
    debouncedFunc();
    debouncedFunc();

    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(100);

    // No more calls after the timeout
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('leading: true and trailing: true (default)', () => {
    debouncedFunc = debounce(func, 100, { leading: true });

    debouncedFunc(); // leading call
    expect(func).toHaveBeenCalledTimes(1);

    debouncedFunc();
    debouncedFunc();

    jest.advanceTimersByTime(100);
    // trailing call
    expect(func).toHaveBeenCalledTimes(2);
  });
  
  test('leading: true and trailing: false', () => {
    debouncedFunc = debounce(func, 100, { leading: true, trailing: false });

    debouncedFunc(); // leading call
    expect(func).toHaveBeenCalledTimes(1);

    debouncedFunc();
    debouncedFunc();

    jest.advanceTimersByTime(100);
    // No trailing call
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('cancel method should prevent execution', () => {
    debouncedFunc = debounce(func, 100);
    debouncedFunc();
    debouncedFunc.cancel();

    jest.advanceTimersByTime(100);

    expect(func).not.toHaveBeenCalled();
  });

  test('flush method should invoke immediately', () => {
    debouncedFunc = debounce(func, 100);
    debouncedFunc(1, 2);

    expect(func).not.toHaveBeenCalled();

    debouncedFunc.flush();

    expect(func).toHaveBeenCalledTimes(1);
    expect(func).toHaveBeenCalledWith(1, 2);
  });
});