import { debounce } from './debounce-utils.js';

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

    // Function should not have been called yet
    expect(func).not.toHaveBeenCalled();

    // Advance timers by less than the wait time
    jest.advanceTimersByTime(50);
    expect(func).not.toHaveBeenCalled();

    // Advance timers by the wait time
    jest.advanceTimersByTime(50);
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should call function with correct arguments and context', () => {
    debouncedFunc = debounce(func, 100);
    const context = { a: 1 };

    debouncedFunc.call(context, 1, 2);
    jest.advanceTimersByTime(100);

    expect(func).toHaveBeenCalledWith(1, 2);
    expect(func).toHaveBeenCalledOnLastCallWith(1, 2);
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should debounce with immediate invocation', () => {
    debouncedFunc = debounce(func, 100, true);

    debouncedFunc();
    expect(func).toHaveBeenCalledTimes(1);

    debouncedFunc();
    debouncedFunc();
    expect(func).toHaveBeenCalledTimes(1); // Still only called once immediately

    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1); // No further calls after timeout
  });

  test('should cancel debounced function', () => {
    debouncedFunc = debounce(func, 100);

    debouncedFunc();
    jest.advanceTimersByTime(50);
    debouncedFunc.cancel();
    jest.advanceTimersByTime(50);

    expect(func).not.toHaveBeenCalled();
  });

  test('should return the result of the function', () => {
    const mockFunc = jest.fn((x) => x * 2);
    debouncedFunc = debounce(mockFunc, 100);

    const result1 = debouncedFunc(5);
    expect(result1).toBeUndefined(); // Result is undefined on first call before debounce

    jest.advanceTimersByTime(100);
    const result2 = debouncedFunc(5);
    expect(mockFunc).toHaveBeenCalledWith(5);
    expect(result2).toBe(10); // Result is returned on subsequent calls after debounce
  });

  test('should return the result of the function with immediate invocation', () => {
    const mockFunc = jest.fn((x) => x * 2);
    debouncedFunc = debounce(mockFunc, 100, true);

    const result1 = debouncedFunc(5);
    expect(mockFunc).toHaveBeenCalledWith(5);
    expect(result1).toBe(10); // Result is returned immediately

    jest.advanceTimersByTime(50);
    const result2 = debouncedFunc(10);
    expect(mockFunc).toHaveBeenCalledTimes(1); // Not called again immediately
    expect(result2).toBe(10); // Returns the result of the first call

    jest.advanceTimersByTime(50);
    const result3 = debouncedFunc(15);
    expect(mockFunc).toHaveBeenCalledTimes(2); // Called again after debounce period
    expect(result3).toBe(30);
  });
});
