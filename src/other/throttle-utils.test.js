const { throttle } = require('./throttle-utils');

jest.useFakeTimers();

describe('throttle', () => {
  let func;
  let throttledFunc;

  beforeEach(() => {
    func = jest.fn();
    throttledFunc = throttle(func, 500);
  });

  test('should call the function immediately on the first call', () => {
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should not call the function again if called within the limit', () => {
    throttledFunc(); // Called
    throttledFunc(); // Throttled
    throttledFunc(); // Throttled
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should call the function again after the limit has passed', () => {
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(500);
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(2);
  });

  test('should pass arguments to the throttled function', () => {
    throttledFunc(1, 'test');
    expect(func).toHaveBeenCalledWith(1, 'test');
  });

  test('should execute the function at most once every `limit` milliseconds', () => {
    throttledFunc(); // 1st call at 0ms
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(250);
    throttledFunc(); // 2nd call at 250ms (ignored)
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(250); // Total time = 500ms
    throttledFunc(); // 3rd call at 500ms (executed)
    expect(func).toHaveBeenCalledTimes(2);

    jest.advanceTimersByTime(499); // Total time = 999ms
    throttledFunc(); // 4th call at 999ms (ignored)
    expect(func).toHaveBeenCalledTimes(2);

    jest.advanceTimersByTime(1); // Total time = 1000ms
    throttledFunc(); // 5th call at 1000ms (executed)
    expect(func).toHaveBeenCalledTimes(3);
  });
});
