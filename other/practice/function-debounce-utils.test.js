const debounce = require('./function-debounce-utils');

describe('debounce', () => {
  let func;
  let debouncedFunc;

  beforeEach(() => {
    jest.useFakeTimers();
    func = jest.fn();
    debouncedFunc = debounce(func, 100);
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  test('should not call the function immediately', () => {
    debouncedFunc();
    expect(func).not.toHaveBeenCalled();
  });

  test('should call the function after the delay if not called again', () => {
    debouncedFunc();
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should call the function only once if called multiple times within the delay', () => {
    debouncedFunc();
    debouncedFunc();
    debouncedFunc();
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should call the function with the last arguments', () => {
    debouncedFunc(1);
    debouncedFunc(2, 3);
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledWith(2, 3);
  });

  test('should apply the correct `this` context', () => {
    const context = {
      value: 42
    };
    let capturedThis = null;
    const mockFuncWithThis = jest.fn(function() {
      capturedThis = this;
    });
    const debouncedMockFunc = debounce(mockFuncWithThis, 100);

    debouncedMockFunc.call(context);
    jest.advanceTimersByTime(100);

    expect(mockFuncWithThis).toHaveBeenCalledTimes(1);
    expect(capturedThis).toBe(context);
  });

  test('should call the function again after the delay if called after a previous call has executed', () => {
    debouncedFunc();
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1);

    debouncedFunc();
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(2);
  });

  test('should not call the function if timers are not advanced', () => {
    debouncedFunc();
    jest.advanceTimersByTime(50);
    debouncedFunc();
    jest.advanceTimersByTime(50);
    debouncedFunc();
    expect(func).not.toHaveBeenCalled();
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1);
  });
});