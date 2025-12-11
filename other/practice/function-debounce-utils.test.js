const debounce = require('./function-debounce-utils');

describe('debounce', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  test('should debounce a function', () => {
    const mockFn = jest.fn();
    const debouncedFn = debounce(mockFn, 100);

    debouncedFn();
    debouncedFn();
    debouncedFn();

    // Function should not have been called yet
    expect(mockFn).not.toHaveBeenCalled();

    // Advance time by 50ms, still within debounce window
    jest.advanceTimersByTime(50);
    expect(mockFn).not.toHaveBeenCalled();

    // Call again, resetting the timer
    debouncedFn();
    jest.advanceTimersByTime(50);
    expect(mockFn).not.toHaveBeenCalled();

    // Advance time past the debounce window
    jest.advanceTimersByTime(100);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test('should pass arguments to the debounced function', () => {
    const mockFn = jest.fn();
    const debouncedFn = debounce(mockFn, 100);

    debouncedFn(1, 2);
    jest.advanceTimersByTime(100);

    expect(mockFn).toHaveBeenCalledWith(1, 2);
  });

  test('should maintain the `this` context', () => {
    const obj = {
      value: 1,
      method: jest.fn(function(arg) { this.value = arg; })
    };
    obj.debouncedMethod = debounce(obj.method, 100);

    obj.debouncedMethod(5);
    jest.advanceTimersByTime(100);

    expect(obj.method).toHaveBeenCalledTimes(1);
    expect(obj.value).toBe(5);
  });

  test('should ensure the function is called only once after multiple rapid calls', () => {
    const mockFn = jest.fn();
    const debouncedFn = debounce(mockFn, 50);

    for (let i = 0; i < 10; i++) {
      debouncedFn();
      jest.advanceTimersByTime(10); // Rapid calls within the debounce window
    }
    // Still not called yet
    expect(mockFn).not.toHaveBeenCalled();

    jest.advanceTimersByTime(50); // Advance past the debounce window
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
