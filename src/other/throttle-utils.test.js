import { throttle } from './throttle-utils';

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

  test('should execute the function immediately on first call (leading edge)', () => {
    throttledFunc = throttle(func, 100);
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should not execute the function if called again within the limit', () => {
    throttledFunc = throttle(func, 100);
    throttledFunc();
    throttledFunc();
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should execute the function again after the limit (trailing edge)', () => {
    throttledFunc = throttle(func, 100);
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(50);
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(50);
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(2);
  });

  test('should pass arguments and context correctly', () => {
    throttledFunc = throttle(func, 100);
    const context = { key: 'value' };
    throttledFunc.call(context, 1, 2);
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledWith(1, 2);
  });

  test('should return the result of the first call within the limit', () => {
    func.mockReturnValueOnce('first result').mockReturnValueOnce('second result');
    throttledFunc = throttle(func, 100);
    const result1 = throttledFunc();
    const result2 = throttledFunc();
    expect(result1).toBe('first result');
    expect(result2).toBe('first result');
    jest.advanceTimersByTime(100);
    const result3 = throttledFunc();
    expect(result3).toBe('second result');
  });

  test('should cancel the throttled function', () => {
    throttledFunc = throttle(func, 100);
    throttledFunc();
    throttledFunc.cancel();
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1);
    throttledFunc(); // Should execute immediately after cancel
    expect(func).toHaveBeenCalledTimes(2);
  });

  describe('options', () => {
    test('should not execute on leading edge if leading is false', () => {
      throttledFunc = throttle(func, 100, { leading: false });
      throttledFunc();
      expect(func).not.toHaveBeenCalled();
      jest.advanceTimersByTime(100);
      expect(func).toHaveBeenCalledTimes(1);
    });

    test('should not execute on trailing edge if trailing is false', () => {
      throttledFunc = throttle(func, 100, { trailing: false });
      throttledFunc();
      expect(func).toHaveBeenCalledTimes(1);
      jest.advanceTimersByTime(50);
      throttledFunc();
      jest.advanceTimersByTime(100);
      expect(func).toHaveBeenCalledTimes(1);
    });

    test('should execute only on leading edge if trailing is false and leading is true', () => {
      throttledFunc = throttle(func, 100, { leading: true, trailing: false });
      throttledFunc();
      expect(func).toHaveBeenCalledTimes(1);
      jest.advanceTimersByTime(50);
      throttledFunc();
      jest.advanceTimersByTime(100);
      expect(func).toHaveBeenCalledTimes(1);
      throttledFunc();
      expect(func).toHaveBeenCalledTimes(2);
    });

    test('should execute only on trailing edge if leading is false and trailing is true', () => {
      throttledFunc = throttle(func, 100, { leading: false, trailing: true });
      throttledFunc();
      expect(func).not.toHaveBeenCalled();
      jest.advanceTimersByTime(50);
      throttledFunc();
      expect(func).not.toHaveBeenCalled();
      jest.advanceTimersByTime(50);
      expect(func).toHaveBeenCalledTimes(1);
    });

    test('should not execute at all if both leading and trailing are false', () => {
      throttledFunc = throttle(func, 100, { leading: false, trailing: false });
      throttledFunc();
      jest.advanceTimersByTime(100);
      expect(func).not.toHaveBeenCalled();
    });
  });
});
