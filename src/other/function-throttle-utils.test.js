import { throttle } from './function-throttle-utils';

describe('throttle', () => {
  let func;
  let throttledFunc;

  beforeEach(() => {
    func = jest.fn();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('should throttle a function', () => {
    throttledFunc = throttle(func, 100);

    throttledFunc(); // Called immediately
    throttledFunc(); // Ignored
    throttledFunc(); // Ignored

    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(50);
    throttledFunc(); // Ignored
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(50); // 100ms total
    expect(func).toHaveBeenCalledTimes(2); // Trailing call

    throttledFunc(); // Called immediately
    expect(func).toHaveBeenCalledTimes(3);
  });

  it('should pass the last arguments to the throttled function', () => {
    throttledFunc = throttle(func, 100);

    throttledFunc(1);
    throttledFunc(2, 3);
    throttledFunc(4, 5, 6);

    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledWith(4, 5, 6);
  });

  it('should call the function immediately with leading option (default)', () => {
    throttledFunc = throttle(func, 100, { leading: true, trailing: false });

    throttledFunc(1);
    expect(func).toHaveBeenCalledWith(1);
    expect(func).toHaveBeenCalledTimes(1);

    throttledFunc(2);
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should not call on leading edge if leading is false', () => {
    throttledFunc = throttle(func, 100, { leading: false });

    throttledFunc(1);
    expect(func).not.toHaveBeenCalled();

    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1);
    expect(func).toHaveBeenCalledWith(1);
  });

  it('should call on trailing edge by default', () => {
    throttledFunc = throttle(func, 100);

    throttledFunc(1);
    throttledFunc(2);

    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(2);
    expect(func).toHaveBeenCalledWith(2);
  });

  it('should not call on trailing edge if trailing is false', () => {
    throttledFunc = throttle(func, 100, { trailing: false });

    throttledFunc(1);
    throttledFunc(2);

    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1);
    expect(func).toHaveBeenCalledWith(1);
  });

  it('should cancel a throttled function', () => {
    throttledFunc = throttle(func, 100);

    throttledFunc();
    jest.advanceTimersByTime(50);
    throttledFunc.cancel();

    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should flush a throttled function', () => {
    throttledFunc = throttle(func, 100, { leading: false });

    throttledFunc(1);
    throttledFunc(2);

    expect(func).not.toHaveBeenCalled();

    throttledFunc.flush();

    expect(func).toHaveBeenCalledTimes(1);
    expect(func).toHaveBeenCalledWith(2);

    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should return the result of the last function invocation', () => {
    let callCount = 0;
    const funcWithReturn = jest.fn(() => ++callCount);
    throttledFunc = throttle(funcWithReturn, 100);

    const result1 = throttledFunc();
    jest.advanceTimersByTime(50);
    const result2 = throttledFunc();
    jest.advanceTimersByTime(50);

    expect(funcWithReturn).toHaveBeenCalledTimes(2);
    expect(result1).toBe(1);
    expect(result2).toBe(1); // Result of the first call, as the second was throttled
  });

  it('should handle `this` context correctly', () => {
    throttledFunc = throttle(function(arg) { this.value = arg; }, 100);
    const context = { value: 0 };

    throttledFunc.call(context, 1);
    jest.advanceTimersByTime(100);

    expect(context.value).toBe(1);
  });
});