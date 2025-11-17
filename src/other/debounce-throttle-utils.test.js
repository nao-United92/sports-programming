const { debounce, throttle } = require('./debounce-throttle-utils');

jest.useFakeTimers();

describe('debounce', () => {
  let func;

  beforeEach(() => {
    func = jest.fn();
  });

  it('should call the function after the specified delay', () => {
    const debouncedFunc = debounce(func, 500);
    debouncedFunc();

    expect(func).not.toHaveBeenCalled();
    jest.advanceTimersByTime(500);
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should only call the function once for multiple rapid calls', () => {
    const debouncedFunc = debounce(func, 500);

    for (let i = 0; i < 5; i++) {
      debouncedFunc();
    }

    jest.advanceTimersByTime(500);
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should reset the timer on subsequent calls', () => {
    const debouncedFunc = debounce(func, 500);

    debouncedFunc();
    jest.advanceTimersByTime(250);
    debouncedFunc();
    jest.advanceTimersByTime(250);

    expect(func).not.toHaveBeenCalled();

    jest.advanceTimersByTime(250);
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should pass arguments to the original function', () => {
    const debouncedFunc = debounce(func, 500);
    debouncedFunc(1, 'test');

    jest.advanceTimersByTime(500);
    expect(func).toHaveBeenCalledWith(1, 'test');
  });
});

describe('throttle', () => {
  let func;

  beforeEach(() => {
    func = jest.fn();
  });

  it('should call the function immediately on the first call', () => {
    const throttledFunc = throttle(func, 500);
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should not call the function again within the time limit', () => {
    const throttledFunc = throttle(func, 500);
    throttledFunc(); // Called
    throttledFunc(); // Throttled
    throttledFunc(); // Throttled

    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should call the function again after the time limit has passed', () => {
    const throttledFunc = throttle(func, 500);
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(500);
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(2);
  });

  it('should pass arguments to the original function', () => {
    const throttledFunc = throttle(func, 500);
    throttledFunc(1, 'test');
    expect(func).toHaveBeenCalledWith(1, 'test');
  });
});