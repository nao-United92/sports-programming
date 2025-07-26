import { debounce, throttle, sleep, measureExecutionTime } from './performance-utils.js';

describe('performance-utils', () => {
  describe('debounce', () => {
    jest.useFakeTimers();

    it('should call the function after the delay', () => {
      const mockFn = jest.fn();
      const debouncedFn = debounce(mockFn, 1000);

      debouncedFn();
      expect(mockFn).not.toHaveBeenCalled();

      jest.advanceTimersByTime(1000);
      expect(mockFn).toHaveBeenCalledTimes(1);
    });

    it('should only call the function once for multiple rapid calls', () => {
      const mockFn = jest.fn();
      const debouncedFn = debounce(mockFn, 1000);

      debouncedFn();
      debouncedFn();
      debouncedFn();

      jest.advanceTimersByTime(1000);
      expect(mockFn).toHaveBeenCalledTimes(1);
    });

    it('should pass arguments to the debounced function', () => {
      const mockFn = jest.fn();
      const debouncedFn = debounce(mockFn, 1000);

      debouncedFn(1, 'test');
      jest.advanceTimersByTime(1000);

      expect(mockFn).toHaveBeenCalledWith(1, 'test');
    });
  });

  describe('throttle', () => {
    jest.useFakeTimers();

    it('should call the function immediately on the first call', () => {
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

      throttledFn();
      expect(mockFn).toHaveBeenCalledTimes(1);

      jest.advanceTimersByTime(1000);
      throttledFn();
      expect(mockFn).toHaveBeenCalledTimes(2);
    });

    it('should pass arguments to the throttled function', () => {
      const mockFn = jest.fn();
      const throttledFn = throttle(mockFn, 1000);

      throttledFn(1, 'test');
      expect(mockFn).toHaveBeenCalledWith(1, 'test');
    });
  });

  describe('sleep', () => {
    jest.useFakeTimers();

    it('should resolve after the specified time', async () => {
      const sleepTime = 2000;
      const promise = sleep(sleepTime);

      jest.advanceTimersByTime(sleepTime);
      await expect(promise).resolves.toBeUndefined();
    });
  });

  describe('measureExecutionTime', () => {
    test('should measure the execution time of a function', () => {
      const func = () => {
        for (let i = 0; i < 1000000; i++) {
          // Simulate some work
        }
      };
      const time = measureExecutionTime(func);
      expect(time).toBeGreaterThan(0);
    });
  });
});
