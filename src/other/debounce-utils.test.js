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

  test('should not call the function immediately', () => {
    debouncedFunc = debounce(func, 100);
    debouncedFunc();
    expect(func).not.toHaveBeenCalled();
  });

  test('should call the function after the delay', () => {
    debouncedFunc = debounce(func, 100);
    debouncedFunc();
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should only call the function once if invoked multiple times within the delay', () => {
    debouncedFunc = debounce(func, 100);
    debouncedFunc();
    jest.advanceTimersByTime(50);
    debouncedFunc();
    jest.advanceTimersByTime(50);
    debouncedFunc();
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should pass arguments to the debounced function', () => {
    debouncedFunc = debounce(func, 100);
    debouncedFunc(1, 2, 3);
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledWith(1, 2, 3);
  });

  test('should maintain the correct context', () => {
    debouncedFunc = debounce(func, 100);
    const context = { key: 'value' };
    debouncedFunc.call(context);
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledOnLastCallWith(); // Check if context is passed correctly
    expect(func.mock.contexts[0]).toBe(context);
  });

  test('should call the function again after the delay if invoked after the previous call completed', () => {
    debouncedFunc = debounce(func, 100);
    debouncedFunc();
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1);

    debouncedFunc();
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(2);
  });
});