const { debounce, throttle } = require('./function-control');

jest.useFakeTimers();

describe('Function Control', () => {
  describe('debounce', () => {
    let func;
    beforeEach(() => {
      func = jest.fn();
    });

    test('should call the function only once after the wait time', () => {
      const debouncedFunc = debounce(func, 100);
      debouncedFunc();
      debouncedFunc();
      debouncedFunc();
      expect(func).not.toHaveBeenCalled();
      jest.advanceTimersByTime(100);
      expect(func).toHaveBeenCalledTimes(1);
    });

    test('should reset the timer if called again within the wait time', () => {
      const debouncedFunc = debounce(func, 100);
      debouncedFunc();
      jest.advanceTimersByTime(50);
      debouncedFunc();
      expect(func).not.toHaveBeenCalled();
      jest.advanceTimersByTime(100);
      expect(func).toHaveBeenCalledTimes(1);
    });

    test('should call the function immediately if immediate is true', () => {
        const debouncedFunc = debounce(func, 100, true);
        debouncedFunc();
        expect(func).toHaveBeenCalledTimes(1);
        jest.advanceTimersByTime(50);
        debouncedFunc();
        expect(func).toHaveBeenCalledTimes(1); // Still 1, not called again
        jest.advanceTimersByTime(100);
        debouncedFunc();
        expect(func).toHaveBeenCalledTimes(2); // Called again after wait time
    });
  });

  describe('throttle', () => {
    let func;
    beforeEach(() => {
      func = jest.fn();
    });

    test('should call the function immediately on the first call', () => {
      const throttledFunc = throttle(func, 100);
      throttledFunc();
      expect(func).toHaveBeenCalledTimes(1);
    });

    test('should not call the function again within the limit', () => {
      const throttledFunc = throttle(func, 100);
      throttledFunc();
      throttledFunc();
      throttledFunc();
      expect(func).toHaveBeenCalledTimes(1);
    });

    test('should call the function again after the limit has passed', () => {
      const throttledFunc = throttle(func, 100);
      throttledFunc(); // Called at t=0
      expect(func).toHaveBeenCalledTimes(1);

      jest.advanceTimersByTime(50);
      throttledFunc(); // Ignored at t=50
      expect(func).toHaveBeenCalledTimes(1);

      jest.advanceTimersByTime(50); // Total time = 100
      throttledFunc(); // Called at t=100
      expect(func).toHaveBeenCalledTimes(2);
    });
  });
});
