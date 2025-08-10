import { throttle } from './throttle-utils';

describe('throttle', () => {
  let func;
  let throttledFunc;

  beforeEach(() => {
    func = jest.fn();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('should call the function immediately on the first call', () => {
    throttledFunc = throttle(func, 100);
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should not call the function again within the time limit', () => {
    throttledFunc = throttle(func, 100);
    throttledFunc(); // Called
    throttledFunc(); // Throttled
    throttledFunc(); // Throttled
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should call the function again after the time limit has passed', () => {
    throttledFunc = throttle(func, 100);
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(100);
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(2);
  });

  test('should pass arguments to the throttled function', () => {
    throttledFunc = throttle(func, 100);
    throttledFunc(1, 'a', true);
    expect(func).toHaveBeenCalledWith(1, 'a', true);
  });

  test('should maintain the correct context', () => {
    throttledFunc = throttle(func, 100);
    const context = { id: 'test-context' };
    throttledFunc.call(context);
    expect(func.mock.contexts[0]).toBe(context);
  });

  test('should allow multiple calls if spaced out by the limit', () => {
    throttledFunc = throttle(func, 100);

    // First call
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);

    // Second call after limit
    jest.advanceTimersByTime(100);
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(2);

    // Third call after limit
    jest.advanceTimersByTime(100);
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(3);
  });
});