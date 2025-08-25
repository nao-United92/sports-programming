const { throttle } = require('./throttle-utils.js');

jest.useFakeTimers();

describe('throttle', () => {
  let func;
  let throttledFunc;

  beforeEach(() => {
    func = jest.fn();
  });

  it('should call the function immediately on the first call', () => {
    throttledFunc = throttle(func, 100);
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should not call the function again within the wait time', () => {
    throttledFunc = throttle(func, 100);
    throttledFunc(); // 1st call
    throttledFunc(); // 2nd call (throttled)
    throttledFunc(); // 3rd call (throttled)
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should call the function again after the wait time has passed', () => {
    throttledFunc = throttle(func, 100);
    throttledFunc(); // 1st call
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(100);
    throttledFunc(); // 2nd call
    expect(func).toHaveBeenCalledTimes(2);
  });

  it('should call the trailing invocation with the last arguments', () => {
    throttledFunc = throttle(func, 100);
    throttledFunc(1);
    throttledFunc(2);
    throttledFunc(3);

    expect(func).toHaveBeenCalledTimes(1);
    expect(func).toHaveBeenCalledWith(1);

    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(2);
    expect(func).toHaveBeenCalledWith(3);
  });

  it('should maintain the correct `this` context', () => {
    const context = { func: jest.fn() };
    throttledFunc = throttle(context.func, 100);

    throttledFunc.call(context);
    expect(context.func).toHaveBeenCalledTimes(1);
    expect(context.func).toHaveBeenCalledWith();
  });
});