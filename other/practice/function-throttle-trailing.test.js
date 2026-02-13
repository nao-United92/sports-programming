import throttleTrailing from './function-throttle-trailing';

describe('throttleTrailing', () => {
  let func;
  let throttledFunc;

  beforeEach(() => {
    func = jest.fn();
    throttledFunc = throttleTrailing(func, 100);
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  test('should call the function once after the wait period for a single call', () => {
    throttledFunc();
    expect(func).not.toHaveBeenCalled();
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should call the function once after the wait period for multiple calls within the period', () => {
    throttledFunc(1);
    throttledFunc(2);
    throttledFunc(3);
    expect(func).not.toHaveBeenCalled();
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1);
    expect(func).toHaveBeenCalledWith(3); // Should be called with the arguments of the last call
  });

  test('should reset the timer and allow new calls after the wait period has passed', () => {
    throttledFunc(1);
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledWith(1);

    throttledFunc(2);
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledWith(2);
    expect(func).toHaveBeenCalledTimes(2);
  });

  test('should pass the correct `this` context', () => {
    const context = {
      name: 'test'
    };
    throttledFunc.call(context, 1);
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledWith(1);
    expect(func.mock.contexts[func.mock.contexts.length - 1]).toBe(context);
    expect(func.mock.contexts[func.mock.contexts.length - 1]).toBe(context);
  });

  test('should handle calls with no arguments', () => {
    throttledFunc();
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1);
    expect(func).toHaveBeenCalledWith();
  });
});
