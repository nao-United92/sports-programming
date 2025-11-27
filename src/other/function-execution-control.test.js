const { debounce, throttle } = require('./function-execution-control');

describe('Function Execution Control', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  describe('debounce', () => {
    test('should call the function only once after the wait time', () => {
      const mockFn = jest.fn();
      const debouncedFn = debounce(mockFn, 500);

      debouncedFn();
      debouncedFn();
      debouncedFn();

      // At this point, the function should not have been called yet
      expect(mockFn).not.toHaveBeenCalled();

      // Fast-forward time by 500ms
      jest.advanceTimersByTime(500);

      // Now the function should have been called exactly once
      expect(mockFn).toHaveBeenCalledTimes(1);
    });

    test('should pass arguments to the debounced function', () => {
      const mockFn = jest.fn();
      const debouncedFn = debounce(mockFn, 500);

      debouncedFn(1, 'test');

      jest.advanceTimersByTime(500);

      expect(mockFn).toHaveBeenCalledWith(1, 'test');
    });

    test('should reset the timer if called again within the wait time', () => {
      const mockFn = jest.fn();
      const debouncedFn = debounce(mockFn, 500);

      debouncedFn();
      jest.advanceTimersByTime(300);
      debouncedFn(); // Called again, timer should reset
      jest.advanceTimersByTime(300);

      // 300 + 300 = 600ms, but timer was reset at 300ms, so it shouldn't have fired
      expect(mockFn).not.toHaveBeenCalled();

      jest.advanceTimersByTime(200); // Total time since last call is 500ms

      expect(mockFn).toHaveBeenCalledTimes(1);
    });
  });

  describe('throttle', () => {
    test('should call the function immediately on the first call', () => {
      const mockFn = jest.fn();
      const throttledFn = throttle(mockFn, 500);

      throttledFn();

      expect(mockFn).toHaveBeenCalledTimes(1);
    });

    test('should not call the function again within the limit time', () => {
      const mockFn = jest.fn();
      const throttledFn = throttle(mockFn, 500);

      throttledFn();
      throttledFn();
      throttledFn();

      expect(mockFn).toHaveBeenCalledTimes(1);
    });

    test('should call the function again after the limit time has passed', () => {
      const mockFn = jest.fn();
      const throttledFn = throttle(mockFn, 500);

      throttledFn(); // Called at 0ms
      expect(mockFn).toHaveBeenCalledTimes(1);

      jest.advanceTimersByTime(300);
      throttledFn(); // Called at 300ms, should be ignored
      expect(mockFn).toHaveBeenCalledTimes(1);

      jest.advanceTimersByTime(200); // Total time is 500ms
      throttledFn(); // Called at 500ms, should be executed
      expect(mockFn).toHaveBeenCalledTimes(2);
    });

    test('should pass arguments to the throttled function', () => {
        const mockFn = jest.fn();
        const throttledFn = throttle(mockFn, 500);

        throttledFn(1, 'test');

        expect(mockFn).toHaveBeenCalledWith(1, 'test');
    });
  });
});
