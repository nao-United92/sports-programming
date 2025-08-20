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

  test('should not call the function again within the throttle time', () => {
    throttledFunc = throttle(func, 100);
    throttledFunc(); // First call, executed immediately
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(50);
    throttledFunc(); // Should schedule a trailing call, not execute immediately
    throttledFunc(); // Should update the scheduled trailing call
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should call the function after the throttle time has passed', () => {
    throttledFunc = throttle(func, 100);
    throttledFunc(); // 0ms: Call 1
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(50); // 50ms
    throttledFunc(); // 50ms: Schedule trailing call for 100ms from lastCallTime (0ms) -> at 100ms
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(50); // 100ms: Trailing call executes
    expect(func).toHaveBeenCalledTimes(2);
  });

  test('should call the function with the latest arguments', () => {
    throttledFunc = throttle(func, 100);
    throttledFunc(1); // Call 1 with arg 1
    expect(func).toHaveBeenCalledWith(1);

    jest.advanceTimersByTime(50);
    throttledFunc(2); // Schedule trailing call with arg 2
    jest.advanceTimersByTime(50); // Trailing call executes
    expect(func).toHaveBeenCalledWith(2);
  });

  test('should maintain the correct context', () => {
    throttledFunc = throttle(func, 100);
    const context = { a: 1 };
    throttledFunc.call(context, 'arg1'); // Call 1 with context
    expect(func).toHaveBeenCalledWith('arg1');
    expect(func.mock.contexts[0]).toBe(context);

    jest.advanceTimersByTime(50);
    const context2 = { b: 2 };
    throttledFunc.call(context2, 'arg2'); // Schedule trailing call with context2
    jest.advanceTimersByTime(50);
    expect(func).toHaveBeenCalledWith('arg2');
    expect(func.mock.contexts[1]).toBe(context2);
  });
});