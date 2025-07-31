import { debounce } from './debounce-utils';

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

  test('should execute the function after the delay', () => {
    debouncedFunc = debounce(func, 100);
    debouncedFunc();
    expect(func).not.toHaveBeenCalled();
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should not execute the function if called again within the delay', () => {
    debouncedFunc = debounce(func, 100);
    debouncedFunc();
    jest.advanceTimersByTime(50);
    debouncedFunc();
    jest.advanceTimersByTime(50);
    expect(func).not.toHaveBeenCalled();
    jest.advanceTimersByTime(50);
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should execute immediately if immediate is true', () => {
    debouncedFunc = debounce(func, 100, true);
    debouncedFunc();
    expect(func).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should not execute again immediately if called multiple times with immediate true', () => {
    debouncedFunc = debounce(func, 100, true);
    debouncedFunc();
    debouncedFunc();
    debouncedFunc();
    expect(func).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should execute after delay if immediate is true and called again after delay', () => {
    debouncedFunc = debounce(func, 100, true);
    debouncedFunc();
    expect(func).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(100);
    debouncedFunc();
    expect(func).toHaveBeenCalledTimes(2);
  });

  test('should cancel the debounced function', () => {
    debouncedFunc = debounce(func, 100);
    debouncedFunc();
    debouncedFunc.cancel();
    jest.advanceTimersByTime(100);
    expect(func).not.toHaveBeenCalled();
  });

  test('should pass arguments and context correctly', () => {
    debouncedFunc = debounce(func, 100);
    const context = { key: 'value' };
    debouncedFunc.call(context, 1, 2);
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledWith(1, 2);
  });

  test('should return the result of the function', () => {
    func.mockReturnValue('test result');
    debouncedFunc = debounce(func, 100, true);
    const result = debouncedFunc();
    expect(result).toBe('test result');
  });
});
