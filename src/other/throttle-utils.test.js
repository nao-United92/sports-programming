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

  test('should throttle a function', () => {
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

    throttledFunc(1, 2);
    jest.advanceTimersByTime(100);

    expect(func).toHaveBeenCalledWith(1, 2);
  });

  test('should execute immediately (leading edge)', () => {
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

  test('should cancel delayed function invocations', () => {
    throttledFunc = throttle(func, 100);

    throttledFunc();
    jest.advanceTimersByTime(50);
    throttledFunc();
    throttledFunc.cancel();
    jest.advanceTimersByTime(100);

    expect(func).toHaveBeenCalledTimes(1); // Only the leading call should have happened
  });

  test('should flush delayed function invocations', () => {
    throttledFunc = throttle(func, 100);

    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);

    throttledFunc.flush();
    expect(func).toHaveBeenCalledTimes(2);

    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(2);
  });

  test('should return the result of the last func invocation', () => {
    let callCount = 0;
    const funcWithReturn = jest.fn(() => ++callCount);
    throttledFunc = throttle(funcWithReturn, 100);

    let result1 = throttledFunc(); // Call 1: funcWithReturn called
    jest.advanceTimersByTime(50);
    let result2 = throttledFunc(); // Call 2: funcWithReturn not called
    jest.advanceTimersByTime(50); // Call 3: funcWithReturn called (trailing)

    expect(funcWithReturn).toHaveBeenCalledTimes(2);
    expect(funcWithReturn.mock.results[0].value).toBe(1);
    expect(funcWithReturn.mock.results[1].value).toBe(2);

    let result3 = throttledFunc(); // Call 4: funcWithReturn called
    jest.advanceTimersByTime(100);

    expect(funcWithReturn).toHaveBeenCalledTimes(3);
    expect(funcWithReturn.mock.results[2].value).toBe(3);
  });

  test('should maintain context (this)', () => {
    throttledFunc = throttle(function() { this.called = true; }, 100);
    const context = {};
    throttledFunc.call(context);
    jest.advanceTimersByTime(100);
    expect(context.called).toBe(true);
  });
});
