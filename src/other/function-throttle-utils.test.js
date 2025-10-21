const { throttle } = require('./function-throttle-utils');

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

  it('should call the function immediately', () => {
    throttledFunc = throttle(func, 100);
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should not call the function again within the time limit', () => {
    throttledFunc = throttle(func, 100);
    throttledFunc();
    throttledFunc();
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should call the function again after the time limit', () => {
    throttledFunc = throttle(func, 100);
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(100);
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(2);
  });

  it('should pass arguments to the original function', () => {
    throttledFunc = throttle(func, 100);
    throttledFunc(1, 'test');
    expect(func).toHaveBeenCalledWith(1, 'test');
  });

  it('should maintain the context of the original function', () => {
    const context = { func: jest.fn() };
    const throttled = throttle(context.func, 100);
    throttled.call(context);
    expect(context.func).toHaveBeenCalledTimes(1);
    expect(context.func).toHaveBeenCalledWith();
  });

  it('should return the result of the last invoked function call', () => {
    const funcWithReturn = jest.fn(x => x * 2);
    const throttled = throttle(funcWithReturn, 100);

    const result1 = throttled(2);
    expect(result1).toBe(4);

    const result2 = throttled(3); // This call should be throttled
    expect(result2).toBe(4); // Returns the result of the first call

    jest.advanceTimersByTime(100);
    const result3 = throttled(4);
    expect(result3).toBe(8);
  });
});