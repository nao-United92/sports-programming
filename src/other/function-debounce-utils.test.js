import { debounce } from './function-debounce-utils';

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

  test('should debounce a function', () => {
    debouncedFunc = debounce(func, 100);

    debouncedFunc();
    debouncedFunc();
    debouncedFunc();

    expect(func).not.toHaveBeenCalled();

    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should pass arguments to the debounced function', () => {
    debouncedFunc = debounce(func, 100);

    debouncedFunc(1, 2);
    jest.advanceTimersByTime(100);

    expect(func).toHaveBeenCalledWith(1, 2);
  });

  test('should execute immediately with leading option', () => {
    debouncedFunc = debounce(func, 100, { leading: true, trailing: false });

    debouncedFunc(1);
    expect(func).toHaveBeenCalledWith(1);

    debouncedFunc(2);
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should not execute on trailing edge when trailing is false', () => {
    debouncedFunc = debounce(func, 100, { trailing: false });

    debouncedFunc();
    jest.advanceTimersByTime(100);
    expect(func).not.toHaveBeenCalled();
  });

  test('should cancel delayed function calls', () => {
    debouncedFunc = debounce(func, 100);

    debouncedFunc();
    debouncedFunc.cancel();
    jest.advanceTimersByTime(100);

    expect(func).not.toHaveBeenCalled();
  });

  test('should flush delayed function calls immediately', () => {
    debouncedFunc = debounce(func, 100);

    debouncedFunc(1);
    expect(func).not.toHaveBeenCalled();

    debouncedFunc.flush();
    expect(func).toHaveBeenCalledTimes(1);
    expect(func).toHaveBeenCalledWith(1);

    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should handle multiple calls within the wait period', () => {
    debouncedFunc = debounce(func, 100);

    debouncedFunc(1);
    jest.advanceTimersByTime(50);
    debouncedFunc(2);
    jest.advanceTimersByTime(50);
    debouncedFunc(3);
    jest.advanceTimersByTime(100);

    expect(func).toHaveBeenCalledTimes(1);
    expect(func).toHaveBeenCalledWith(3);
  });

  test('should work with maxWait option', () => {
    debouncedFunc = debounce(func, 100, { maxWait: 200 });

    debouncedFunc(1);
    jest.advanceTimersByTime(50);
    debouncedFunc(2);
    jest.advanceTimersByTime(50);
    debouncedFunc(3);
    jest.advanceTimersByTime(50);
    debouncedFunc(4);
    jest.advanceTimersByTime(50);

    // At 200ms, func should have been called once due to maxWait
    expect(func).toHaveBeenCalledTimes(1);
    expect(func).toHaveBeenCalledWith(4); // The last call before maxWait triggered

    jest.advanceTimersByTime(100); // Another 100ms, total 300ms
    expect(func).toHaveBeenCalledTimes(2);
    expect(func).toHaveBeenCalledWith(4); // The last call after maxWait triggered
  });
});