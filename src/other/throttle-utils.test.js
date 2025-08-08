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

  test('should call the function immediately on the first invocation', () => {
    throttledFunc = throttle(func, 100);
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should not call the function again within the throttle limit', () => {
    throttledFunc = throttle(func, 100);
    throttledFunc();
    throttledFunc();
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should call the function after the throttle limit has passed', () => {
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

  test('should pass arguments to the throttled function', () => {
    throttledFunc = throttle(func, 100);
    throttledFunc(1, 2, 3);
    expect(func).toHaveBeenCalledWith(1, 2, 3);
  });

  test('should maintain the correct context', () => {
    throttledFunc = throttle(func, 100);
    const context = { key: 'value' };
    throttledFunc.call(context);
    expect(func).toHaveBeenCalledOnLastCallWith(); // Check if context is passed correctly
    expect(func.mock.contexts[0]).toBe(context);
  });

  test('should return the last result of the throttled function', () => {
    func.mockReturnValueOnce('first').mockReturnValueOnce('second');
    throttledFunc = throttle(func, 100);

    const result1 = throttledFunc();
    expect(result1).toBeUndefined(); // First call returns undefined as per implementation

    jest.advanceTimersByTime(100);
    const result2 = throttledFunc();
    expect(result2).toBe('second');
  });

  test('should call the function at the end of the throttle period if invoked repeatedly', () => {
    throttledFunc = throttle(func, 100);
    throttledFunc();
    jest.advanceTimersByTime(10);
    throttledFunc();
    jest.advanceTimersByTime(10);
    throttledFunc();
    jest.advanceTimersByTime(10);
    throttledFunc();

    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(70); // Total 10 + 10 + 10 + 70 = 100
    expect(func).toHaveBeenCalledTimes(2);
  });
});
