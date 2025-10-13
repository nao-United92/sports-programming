import { debounce, throttle } from './function-utils';

describe('Function Utilities', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  describe('debounce', () => {
    it('should debounce a function', () => {
      const func = jest.fn();
      const debouncedFunc = debounce(func, 100);

      debouncedFunc();
      debouncedFunc();
      debouncedFunc();

      // Function should not have been called yet
      expect(func).not.toHaveBeenCalled();

      jest.advanceTimersByTime(50);
      expect(func).not.toHaveBeenCalled();

      jest.advanceTimersByTime(50); // 100ms passed since last call
      expect(func).toHaveBeenCalledTimes(1);

      debouncedFunc();
      jest.advanceTimersByTime(50);
      expect(func).toHaveBeenCalledTimes(1);

      jest.advanceTimersByTime(50); // 100ms passed since last call
      expect(func).toHaveBeenCalledTimes(2);
    });

    it('should pass arguments and context correctly', () => {
      const func = jest.fn(function(a, b) {
        return this.value + a + b;
      });
      const debouncedFunc = debounce(func, 100);
      const context = { value: 10 };

      debouncedFunc.call(context, 1, 2);
      jest.advanceTimersByTime(100);

      expect(func).toHaveBeenCalledWith(1, 2);
    });
  });

  describe('throttle', () => {
    it('should throttle a function', () => {
      const func = jest.fn();
      const throttledFunc = throttle(func, 100);

      throttledFunc(); // Should be called immediately
      throttledFunc(); // Should be ignored
      throttledFunc(); // Should be ignored

      expect(func).toHaveBeenCalledTimes(1);

      jest.advanceTimersByTime(50);
      throttledFunc(); // Should be ignored
      expect(func).toHaveBeenCalledTimes(1);

      jest.advanceTimersByTime(50); // 100ms passed since first call, should call again
      expect(func).toHaveBeenCalledTimes(2);

      throttledFunc(); // Should be called immediately after the 2nd call
      expect(func).toHaveBeenCalledTimes(3);

      jest.advanceTimersByTime(50);
      throttledFunc(); // Should be ignored
      expect(func).toHaveBeenCalledTimes(3);

      jest.advanceTimersByTime(50); // 100ms passed since 3rd call, should call again
      expect(func).toHaveBeenCalledTimes(4);
    });

    it('should pass arguments and context correctly', () => {
      const func = jest.fn(function(a, b) {
        return this.value + a + b;
      });
      const throttledFunc = throttle(func, 100);
      const context = { value: 10 };

      throttledFunc.call(context, 1, 2);
      jest.advanceTimersByTime(100);

      expect(func).toHaveBeenCalledWith(1, 2);
    });
  });
});
