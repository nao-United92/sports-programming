const { throttle } = require('./throttle');

jest.useFakeTimers();

describe('throttle', () => {
  let func;
  let throttledFunc;

  beforeEach(() => {
    func = jest.fn();
  });

  test('should execute function immediately for the first call', () => {
    throttledFunc = throttle(func, 1000);
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should not execute function again within the limit', () => {
    throttledFunc = throttle(func, 1000);
    throttledFunc(); // 1st call
    throttledFunc(); // 2nd call
    throttledFunc(); // 3rd call
    expect(func).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(500);
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should execute function again after the limit has passed', () => {
    throttledFunc = throttle(func, 1000);
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(1000);
    throttledFunc();
    jest.advanceTimersByTime(1000);
    expect(func).toHaveBeenCalledTimes(2);
  });

  test('should execute the last call made within the limit after the limit passes', () => {
    throttledFunc = throttle(func, 1000);
    throttledFunc(1);
    expect(func).toHaveBeenCalledWith(1);
    
    throttledFunc(2);
    throttledFunc(3);
    
    jest.advanceTimersByTime(1000);
    expect(func).toHaveBeenCalledTimes(2);
    expect(func).toHaveBeenLastCalledWith(3);
  });
});
