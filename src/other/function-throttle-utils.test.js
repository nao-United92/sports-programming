const { throttle } = require('./function-throttle-utils');

describe('throttle', () => {
  jest.useFakeTimers();

  test('should call the function immediately', () => {
    const func = jest.fn();
    const throttledFunc = throttle(func, 100);

    throttledFunc();

    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should not call the function again within the delay period', () => {
    const func = jest.fn();
    const throttledFunc = throttle(func, 100);

    throttledFunc();
    throttledFunc();
    throttledFunc();

    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should call the function again after the delay has passed', () => {
    const func = jest.fn();
    const throttledFunc = throttle(func, 100);

    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);

    // Fast-forward time by 100ms
    jest.advanceTimersByTime(100);

    throttledFunc();
    expect(func).toHaveBeenCalledTimes(2);
  });

  test('should pass arguments to the original function', () => {
    const func = jest.fn();
    const throttledFunc = throttle(func, 100);

    throttledFunc(1, 'test');

    expect(func).toHaveBeenCalledWith(1, 'test');
  });
});
