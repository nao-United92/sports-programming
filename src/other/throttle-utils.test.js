import { throttle } from './throttle-utils.js';

describe('throttle', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('should throttle a function', () => {
    const func = jest.fn();
    const throttledFunc = throttle(func, 100);

    throttledFunc();
    throttledFunc();
    throttledFunc();

    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(100);

    expect(func).toHaveBeenCalledTimes(2);
  });

  it('should invoke the function with the latest arguments', () => {
    const func = jest.fn();
    const throttledFunc = throttle(func, 100);

    throttledFunc(1);
    throttledFunc(2);
    throttledFunc(3);

    jest.advanceTimersByTime(100);

    expect(func).toHaveBeenCalledWith(3);
  });

  it('should support a `leading` option', () => {
    const func = jest.fn();
    const throttledFunc = throttle(func, 100, { leading: true });

    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(50);
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(50);
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(2);
  });

  it('should support a `trailing` option', () => {
    const func = jest.fn();
    const throttledFunc = throttle(func, 100, { trailing: true });

    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(100);
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(2);
  });

  it('should support a `cancel` method', () => {
    const func = jest.fn();
    const throttledFunc = throttle(func, 100);

    throttledFunc();
    throttledFunc.cancel();

    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1); // The first call is immediate
  });

  it('should support a `flush` method', () => {
    const func = jest.fn();
    const throttledFunc = throttle(func, 100);

    throttledFunc();
    throttledFunc();
    throttledFunc.flush();

    expect(func).toHaveBeenCalledTimes(2);
  });
});
