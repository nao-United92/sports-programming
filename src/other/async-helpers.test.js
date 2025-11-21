const { sleep, withTimeout } = require('./async-helpers');

jest.useFakeTimers();

describe('Async Helpers', () => {
  describe('sleep', () => {
    test('should resolve after the specified time', async () => {
      const sleepPromise = sleep(1000);
      jest.advanceTimersByTime(1000);
      await expect(sleepPromise).resolves.toBeUndefined();
    });

    test('should not resolve before the time has passed', async () => {
        const onResolve = jest.fn();
        const sleepPromise = sleep(1000).then(onResolve);
        jest.advanceTimersByTime(999);
        expect(onResolve).not.toHaveBeenCalled();
        jest.advanceTimersByTime(1);
        await sleepPromise; // Ensure promise is settled before checking mock
        expect(onResolve).toHaveBeenCalled();
    });
  });

  describe('withTimeout', () => {
    test('should resolve with the promise value if it resolves in time', async () => {
      const fastPromise = new Promise(resolve => setTimeout(() => resolve('Success'), 50));
      const promiseWithTimeout = withTimeout(fastPromise, 100);
      
      jest.advanceTimersByTime(50);

      await expect(promiseWithTimeout).resolves.toBe('Success');
    });

    test('should reject with a timeout error if the promise takes too long', async () => {
      const slowPromise = new Promise(resolve => setTimeout(() => resolve('Success'), 200));
      const promiseWithTimeout = withTimeout(slowPromise, 100);

      jest.advanceTimersByTime(100);

      await expect(promiseWithTimeout).rejects.toThrow('Timed out in 100ms.');
    });

    test('should reject with the original promise rejection if it rejects in time', async () => {
        const failingPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('Failure')), 50));
        const promiseWithTimeout = withTimeout(failingPromise, 100);

        jest.advanceTimersByTime(50);

        await expect(promiseWithTimeout).rejects.toThrow('Failure');
    });
  });
});
