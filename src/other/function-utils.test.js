import { debounce, throttle } from './function-utils.js';

// Mock timers for testing
jest.useFakeTimers();

describe('debounce', () => {
  it('should only call the function after the wait time has passed', () => {
    const mockFn = jest.fn();
    const debouncedFn = debounce(mockFn, 1000);

    debouncedFn();
    debouncedFn();
    debouncedFn();

    expect(mockFn).not.toHaveBeenCalled();

    // Fast-forward time by 1000ms
    jest.advanceTimersByTime(1000);

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should apply the correct `this` and arguments', () => {
    const mockFn = jest.fn();
    const debouncedFn = debounce(mockFn, 1000);
    const context = { debouncedFn };

    context.debouncedFn(1, 'test');

    jest.advanceTimersByTime(1000);

    expect(mockFn).toHaveBeenCalledWith(1, 'test');
    expect(mockFn).toHaveBeenCalledWith(1, 'test');
  });
});

describe('throttle', () => {
  it('should call the function immediately', () => {
    const mockFn = jest.fn();
    const throttledFn = throttle(mockFn, 1000);

    throttledFn();

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should not call the function again within the limit', () => {
    const mockFn = jest.fn();
    const throttledFn = throttle(mockFn, 1000);

    throttledFn();
    throttledFn();
    throttledFn();

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should call the function again after the limit has passed', () => {
    const mockFn = jest.fn();
    const throttledFn = throttle(mockFn, 1000);

    throttledFn(); // Called at 0ms
    expect(mockFn).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(500);
    throttledFn(); // Should be ignored
    expect(mockFn).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(500); // Total time is 1000ms
    throttledFn(); // Should be called
    expect(mockFn).toHaveBeenCalledTimes(2);
  });
});