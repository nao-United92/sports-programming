import { debounce, throttle } from './function-timing-utils';

// Mock timers
jest.useFakeTimers();

describe('debounce', () => {
  it('should only call the function after the wait time', () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func, 1000);

    debouncedFunc();
    debouncedFunc();
    debouncedFunc();

    // At this point, the function should not have been called yet
    expect(func).not.toHaveBeenCalled();

    // Fast-forward time by 1000ms
    jest.advanceTimersByTime(1000);

    // Now the function should have been called once
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should call the function immediately if immediate is true', () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func, 1000, true);

    debouncedFunc();

    // The function should have been called immediately
    expect(func).toHaveBeenCalledTimes(1);

    // Fast-forward time, it should not be called again
    jest.advanceTimersByTime(1000);
    expect(func).toHaveBeenCalledTimes(1);
  });
});

describe('throttle', () => {
  it('should call the function immediately, then not again until the limit has passed', () => {
    const func = jest.fn();
    const throttledFunc = throttle(func, 1000);

    throttledFunc();
    throttledFunc();

    // The function should have been called once immediately
    expect(func).toHaveBeenCalledTimes(1);

    // Fast-forward time by 500ms
    jest.advanceTimersByTime(500);
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);

    // Fast-forward time by another 500ms (total 1000ms)
    jest.advanceTimersByTime(500);
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(2);
  });
});
