import { delay, timeout } from './promise-utils.js';

describe('Promise Utilities', () => {
  describe('delay', () => {
    it('should resolve after the specified time', async () => {
      const startTime = Date.now();
      await delay(50);
      const endTime = Date.now();
      expect(endTime - startTime).toBeGreaterThanOrEqual(48); // Allow for slight inaccuracies
    });
  });

  describe('timeout', () => {
    it('should resolve if the promise resolves in time', async () => {
      const fastPromise = Promise.resolve('success');
      await expect(timeout(fastPromise, 100)).resolves.toBe('success');
    });

    it('should reject if the promise takes too long', async () => {
      const slowPromise = delay(200);
      await expect(timeout(slowPromise, 100)).rejects.toThrow('Promise timed out after 100 ms');
    });

    it('should reject with the original promise rejection if it rejects first', async () => {
      const failingPromise = Promise.reject(new Error('Failed'));
      await expect(timeout(failingPromise, 100)).rejects.toThrow('Failed');
    });
  });
});
