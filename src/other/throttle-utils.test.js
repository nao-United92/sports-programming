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

  test('should throttle function calls with leading edge by default', () => {
    throttledFunc = throttle(func, 100);

    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);

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

  test('should throttle function calls with trailing edge', () => {
    throttledFunc = throttle(func, 100, { leading: false, trailing: true });

    throttledFunc();
    expect(func).not.toHaveBeenCalled();

    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1);

    throttledFunc();
    throttledFunc();
    jest.advanceTimersByTime(50);
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(50);
    expect(func).toHaveBeenCalledTimes(2);
  });

  test('should throttle function calls with both leading and trailing edges', () => {
    throttledFunc = throttle(func, 100, { leading: true, trailing: true });

    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);

    throttledFunc();
    jest.advanceTimersByTime(50);
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(50);
    expect(func).toHaveBeenCalledTimes(2);

    throttledFunc();
    expect(func).toHaveBeenCalledTimes(3);
  });

  test('should cancel delayed function invocations', () => {
    throttledFunc = throttle(func, 100, { leading: false, trailing: true });

    throttledFunc();
    jest.advanceTimersByTime(50);
    throttledFunc.cancel();
    jest.advanceTimersByTime(50);
    expect(func).not.toHaveBeenCalled();
  });

  test('should flush delayed function invocations', () => {
    throttledFunc = throttle(func, 100, { leading: false, trailing: true });

    throttledFunc('arg1', 'arg2');
    expect(func).not.toHaveBeenCalled();

    throttledFunc.flush();
    expect(func).toHaveBeenCalledTimes(1);
    expect(func).toHaveBeenCalledWith('arg1', 'arg2');
  });

  test('should pass arguments correctly', () => {
    throttledFunc = throttle(func, 100);
    throttledFunc(1, 2);
    expect(func).toHaveBeenCalledWith(1, 2);

    jest.advanceTimersByTime(100);
    throttledFunc(3, 4);
    expect(func).toHaveBeenCalledWith(3, 4);
  });

  test('should handle context correctly', () => {
    throttledFunc = throttle(func, 100);
    const context = { a: 1 };
    throttledFunc.call(context);
    expect(func).toHaveBeenCalledOnLastCallWith(); // Check if called with no args
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(100);
    throttledFunc.call(context, 5, 6);
    expect(func).toHaveBeenCalledOnLastCallWith(5, 6);
    expect(func).toHaveBeenCalledTimes(2);
  });
});