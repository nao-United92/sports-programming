const { debounce, throttle } = require('./performance-utils');

jest.useFakeTimers();

describe('debounce', () => {
  let func;

  beforeEach(() => {
    func = jest.fn();
  });

  test('should call the function only once after the wait time', () => {
    const debouncedFunc = debounce(func, 1000);

    debouncedFunc();
    debouncedFunc();
    debouncedFunc();

    // At this point, func should not have been called
    expect(func).not.toHaveBeenCalled();

    // Fast-forward time by 1000ms
    jest.advanceTimersByTime(1000);

    // Now, func should have been called exactly once
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should reset the timer if called again within the wait time', () => {
    const debouncedFunc = debounce(func, 1000);

    debouncedFunc();
    jest.advanceTimersByTime(500);
    debouncedFunc();
    jest.advanceTimersByTime(500);
    debouncedFunc();

    expect(func).not.toHaveBeenCalled();

    jest.advanceTimersByTime(1000);
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should pass arguments to the debounced function', () => {
    const debouncedFunc = debounce(func, 1000);
    debouncedFunc(1, 'test');

    jest.advanceTimersByTime(1000);

    expect(func).toHaveBeenCalledWith(1, 'test');
  });
});

describe('throttle', () => {
  let func;

  beforeEach(() => {
    func = jest.fn();
  });

  test('should call the function immediately on the first call', () => {
    const throttledFunc = throttle(func, 1000);
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should not call the function again within the limit time', () => {
    const throttledFunc = throttle(func, 1000);

    throttledFunc(); // Called
    throttledFunc(); // Throttled
    throttledFunc(); // Throttled

    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should call the function again after the limit time has passed', () => {
    const throttledFunc = throttle(func, 1000);

    throttledFunc(); // Called
    expect(func).toHaveBeenCalledTimes(1);

    // Fast-forward time
    jest.advanceTimersByTime(1000);

    throttledFunc(); // Called again
    expect(func).toHaveBeenCalledTimes(2);
  });

  test('should pass arguments to the throttled function', () => {
    const throttledFunc = throttle(func, 1000);
    throttledFunc('arg1', 2);
    expect(func).toHaveBeenCalledWith('arg1', 2);
  });
});
