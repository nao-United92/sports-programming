const { delay, timeout } = require('./promise-helpers');

describe('Promise Helpers', () => {
  describe('delay', () => {
    jest.useFakeTimers();
    test('should resolve after the specified milliseconds', async () => {
      const startTime = Date.now();
      const delayTime = 1000;
      const promise = delay(delayTime);

      jest.advanceTimersByTime(delayTime);

      await promise;
      const endTime = Date.now();
      expect(endTime - startTime).toBe(delayTime);
    });
  });

  describe('timeout', () => {
    jest.useRealTimers();
    test('should resolve if the promise resolves before timeout', async () => {
      const longPromise = new Promise(resolve => setTimeout(() => resolve('success'), 500));
      const result = await timeout(longPromise, 1000);
      expect(result).toBe('success');
    });

    test('should reject if the promise takes longer than timeout', async () => {
      const veryLongPromise = new Promise(resolve => setTimeout(() => resolve('success'), 1000));
      await expect(timeout(veryLongPromise, 500)).rejects.toThrow('Timed out after 500 ms');
    });

    test('should reject if the promise rejects before timeout', async () => {
      const rejectingPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('fail')), 100));
      await expect(timeout(rejectingPromise, 500)).rejects.toThrow('fail');
    });
  });
});
