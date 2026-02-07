const { throttle } = require('./function-execution-limiter');

jest.useFakeTimers();

describe('throttle', () => {
  let func;
  let throttledFunc;

  beforeEach(() => {
    func = jest.fn((...args) => args);
    throttledFunc = throttle(func, 500);
  });

  it('should call the function immediately on the first call', () => {
    throttledFunc(1);
    expect(func).toHaveBeenCalledTimes(1);
    expect(func).toHaveBeenCalledWith(1);
  });

  it('should not call the function again within the limit', () => {
    throttledFunc(1);
    throttledFunc(2);
    throttledFunc(3);
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should call the function again after the limit has passed', () => {
    throttledFunc(1);
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(600);
    throttledFunc(2);
    expect(func).toHaveBeenCalledTimes(2);
    expect(func).toHaveBeenCalledWith(2);
  });

  it('should return the result of the last successful invocation', () => {
    const result1 = throttledFunc(1);
    expect(result1).toEqual([1]);

    const result2 = throttledFunc(2); // Should be ignored
    expect(result2).toEqual([1]);

    jest.advanceTimersByTime(600);
    const result3 = throttledFunc(3);
    expect(result3).toEqual([3]);
  });
});
