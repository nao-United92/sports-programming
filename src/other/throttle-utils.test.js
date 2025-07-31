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

  test('should execute the function immediately on first call', () => {
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

  test('should execute the function again after the limit', () => {
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
});
