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

  it('should debounce a function', () => {
    debouncedFunc = debounce(func, 100);

    debouncedFunc();
    debouncedFunc();
    debouncedFunc();

    expect(func).not.toHaveBeenCalled();

    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should pass the last arguments to the debounced function', () => {
    debouncedFunc = debounce(func, 100);

    debouncedFunc(1);
    debouncedFunc(2, 3);
    debouncedFunc(4, 5, 6);

    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledWith(4, 5, 6);
  });

  it('should call the function immediately with leading option', () => {
    debouncedFunc = debounce(func, 100, { leading: true, trailing: false });

    debouncedFunc(1);
    expect(func).toHaveBeenCalledWith(1);

    debouncedFunc(2);
    jest.advanceTimersByTime(99);
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(1);
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should call the function on trailing edge by default', () => {
    debouncedFunc = debounce(func, 100);

    debouncedFunc(1);
    debouncedFunc(2);

    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1);
    expect(func).toHaveBeenCalledWith(2);
  });

  it('should not call on trailing edge if trailing is false and leading is false', () => {
    debouncedFunc = debounce(func, 100, { leading: false, trailing: false });

    debouncedFunc(1);
    debouncedFunc(2);

    jest.advanceTimersByTime(100);
    expect(func).not.toHaveBeenCalled();
  });

  it('should cancel a debounced function', () => {
    debouncedFunc = debounce(func, 100);

    debouncedFunc();
    debouncedFunc.cancel();

    jest.advanceTimersByTime(100);
    expect(func).not.toHaveBeenCalled();
  });

  it('should flush a debounced function', () => {
    debouncedFunc = debounce(func, 100);

    debouncedFunc(1);
    debouncedFunc(2);

    debouncedFunc.flush();

    expect(func).toHaveBeenCalledTimes(1);
    expect(func).toHaveBeenCalledWith(2);

    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should handle maxWait option', () => {
    debouncedFunc = debounce(func, 50, { maxWait: 100 });

    debouncedFunc();
    jest.advanceTimersByTime(30);
    debouncedFunc();
    jest.advanceTimersByTime(30);
    debouncedFunc();
    jest.advanceTimersByTime(30);
    // Total time passed: 90ms. Should not have called yet.
    expect(func).not.toHaveBeenCalled();

    jest.advanceTimersByTime(10);
    // Total time passed: 100ms. Should have called due to maxWait.
    expect(func).toHaveBeenCalledTimes(1);

    debouncedFunc();
    jest.advanceTimersByTime(50);
    expect(func).toHaveBeenCalledTimes(2);
  });

  it('should return the result of the last function invocation', () => {
    let callCount = 0;
    const funcWithReturn = jest.fn(() => ++callCount);
    debouncedFunc = debounce(funcWithReturn, 100);

    const result1 = debouncedFunc();
    const result2 = debouncedFunc();

    jest.advanceTimersByTime(100);

    const result3 = debouncedFunc(); // This will trigger a new debounce cycle
    jest.advanceTimersByTime(100);

    expect(funcWithReturn).toHaveBeenCalledTimes(2);
    // The debounced function returns the result of the *last* func invocation
    // which happens after the wait time.
    // Before the first invocation, result is undefined.
    expect(result1).toBeUndefined();
    expect(result2).toBeUndefined();
    // After the first invocation, the result is 1.
    // After the second invocation, the result is 2.
    // The debounced function returns the result of the *last* func invocation.
    // So, result3 should be the result of the second call to funcWithReturn.
    expect(result3).toBe(1); // This is tricky. The result is updated *after* the invocation.
  });

  it('should handle `this` context correctly', () => {
    debouncedFunc = debounce(function(arg) { this.value = arg; }, 100);
    const context = { value: 0 };

    debouncedFunc.call(context, 1);
    jest.advanceTimersByTime(100);

    expect(context.value).toBe(1);
  });
});
