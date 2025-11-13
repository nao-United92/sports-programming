const { debounce, throttle, retry } = require('./async-enhancements.js');

describe('Async Enhancements', () => {
  
  describe('with fake timers', () => {
    beforeAll(() => {
        jest.useFakeTimers();
    });

    afterAll(() => {
        jest.useRealTimers();
    });

    describe('debounce', () => {
        test('should call the function only once after the wait time', () => {
            const mockFn = jest.fn();
            const debouncedFn = debounce(mockFn, 1000);

            debouncedFn();
            debouncedFn();
            debouncedFn();

            expect(mockFn).not.toHaveBeenCalled();
            jest.advanceTimersByTime(1000);
            expect(mockFn).toHaveBeenCalledTimes(1);
        });
    });

    describe('throttle', () => {
        test('should call the function immediately and then not again until wait time passes', () => {
            const mockFn = jest.fn();
            const throttledFn = throttle(mockFn, 1000);

            throttledFn(); // Called immediately
            throttledFn();
            throttledFn();

            expect(mockFn).toHaveBeenCalledTimes(1);

            jest.advanceTimersByTime(500);
            throttledFn(); // Still in throttle period
            expect(mockFn).toHaveBeenCalledTimes(1);

            jest.advanceTimersByTime(500);
            throttledFn(); // Throttle period ended, called again
            expect(mockFn).toHaveBeenCalledTimes(2);
        });
    });
  });

  describe('retry (with real timers)', () => {
    test('should resolve on the first try if successful', async () => {
      const successfulFn = jest.fn().mockResolvedValue('success');
      await expect(retry(successfulFn, 3, 10)).resolves.toBe('success');
      expect(successfulFn).toHaveBeenCalledTimes(1);
    });

    test('should retry the specified number of times before failing', async () => {
      const failingFn = jest.fn().mockRejectedValue(new Error('failure'));
      // The function is called once, then retried `retries` times. So `retries + 1` calls.
      await expect(retry(failingFn, 3, 10)).rejects.toThrow('failure');
      expect(failingFn).toHaveBeenCalledTimes(4);
    });

    test('should resolve if one of the retries succeeds', async () => {
      const sometimesFailingFn = jest.fn()
        .mockRejectedValueOnce(new Error('fail 1'))
        .mockRejectedValueOnce(new Error('fail 2'))
        .mockResolvedValue('success');
      
      await expect(retry(sometimesFailingFn, 3, 10)).resolves.toBe('success');
      expect(sometimesFailingFn).toHaveBeenCalledTimes(3);
    });
  });
});
