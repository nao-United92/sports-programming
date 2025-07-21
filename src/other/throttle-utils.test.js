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

  test('should execute the function immediately and then after the limit', () => {
    throttledFunc = throttle(func, 100);
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);
    throttledFunc(); // Should not call immediately
    expect(func).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(100);
    throttledFunc(); // Should call again after limit
    expect(func).toHaveBeenCalledTimes(2);
  });

  test('should not execute the function more than once within the limit', () => {
    throttledFunc = throttle(func, 100);
    throttledFunc();
    throttledFunc();
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
    expect(func).toHaveBeenCalledWith(1, 2);
  });

  test('should return the last result of the function', () => {
    func.mockReturnValueOnce('first result').mockReturnValueOnce('second result');
    throttledFunc = throttle(func, 100);
    const result1 = throttledFunc();
    const result2 = throttledFunc();
    expect(result1).toBe('first result');
    expect(result2).toBe('first result'); // Should return the same result as it's throttled
    jest.advanceTimersByTime(100);
    const result3 = throttledFunc();
    expect(result3).toBe('second result');
  });
});
