const { debounce, throttle } = require('./function-control-utils');

jest.useFakeTimers();

describe('Function Control Utilities', () => {
  describe('debounce', () => {
    let func;

    beforeEach(() => {
      func = jest.fn();
    });

    test('should call the function after the wait time', () => {
      const debouncedFunc = debounce(func, 100);
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
      jest.advanceTimersByTime(50);
      expect(func).not.toHaveBeenCalled();
      jest.advanceTimersByTime(50);
      expect(func).toHaveBeenCalledTimes(1);
    });

    test('should call the function immediately if immediate is true', () => {
      const debouncedFunc = debounce(func, 100, true);
      debouncedFunc();
      expect(func).toHaveBeenCalledTimes(1);
      jest.advanceTimersByTime(100);
      expect(func).toHaveBeenCalledTimes(1); // Still 1, not called again
    });

    test('should not call again on trailing edge if immediate is true and called once', () => {
        const debouncedFunc = debounce(func, 100, true);
        debouncedFunc();
        expect(func).toHaveBeenCalledTimes(1);
        jest.advanceTimersByTime(100);
        expect(func).toHaveBeenCalledTimes(1);
    });

    test('should call on leading edge and not trailing edge if called multiple times with immediate=true', () => {
        const debouncedFunc = debounce(func, 100, true);
        debouncedFunc(); // Called here
        debouncedFunc();
        expect(func).toHaveBeenCalledTimes(1);
        jest.advanceTimersByTime(100);
        expect(func).toHaveBeenCalledTimes(1); // Not called again
    });
  });

  describe('throttle', () => {
    let func;

    beforeEach(() => {
      func = jest.fn();
    });

    test('should call the function immediately', () => {
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
      throttledFunc();
      expect(func).toHaveBeenCalledTimes(1);
      jest.advanceTimersByTime(100);
      throttledFunc();
      expect(func).toHaveBeenCalledTimes(2);
    });
  });
});
