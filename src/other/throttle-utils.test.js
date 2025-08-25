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

  test('should call the function immediately', () => {
    throttledFunc = throttle(func, 100);
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should not call the function again within the limit', () => {
    throttledFunc = throttle(func, 100);
    throttledFunc();
    throttledFunc();
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should call the function again after the limit', () => {
    throttledFunc = throttle(func, 100);
    throttledFunc();
    jest.advanceTimersByTime(50);
    throttledFunc();
    jest.advanceTimersByTime(50);
    expect(func).toHaveBeenCalledTimes(2);
  });

  test('should pass arguments to the throttled function', () => {
    throttledFunc = throttle(func, 100);
    throttledFunc(1, 2, 3);
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledWith(1, 2, 3);
  });

  test('should maintain the correct context', () => {
    throttledFunc = throttle(func, 100);
    const context = { key: 'value' };
    throttledFunc.call(context);
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledOnLastCallWith();
    expect(func.mock.contexts[0]).toBe(context);
  });

  test('should return the last result', () => {
    func.mockReturnValueOnce('first').mockReturnValueOnce('second');
    throttledFunc = throttle(func, 100);
    const result1 = throttledFunc();
    const result2 = throttledFunc();
    jest.advanceTimersByTime(100);
    const result3 = throttledFunc();
    expect(result1).toBe('first');
    expect(result2).toBe('first');
    expect(result3).toBe('second');
  });
});
