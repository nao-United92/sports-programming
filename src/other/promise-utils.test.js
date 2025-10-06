import { timeout, allSettled } from './promise-utils.js';

describe('Promise Utilities', () => {
  describe('timeout', () => {
    it('should resolve if the promise resolves in time', async () => {
      const fastPromise = new Promise(resolve => setTimeout(() => resolve('fast'), 50));
      await expect(timeout(fastPromise, 100)).resolves.toBe('fast');
    });

    it('should reject if the promise takes too long', async () => {
      const slowPromise = new Promise(resolve => setTimeout(() => resolve('slow'), 200));
      await expect(timeout(slowPromise, 100)).rejects.toThrow('Promise timed out');
    });

    it('should reject with the original reason if the promise rejects', async () => {
      const failingPromise = new Promise((resolve, reject) => setTimeout(() => reject(new Error('Failed')), 50));
      await expect(timeout(failingPromise, 100)).rejects.toThrow('Failed');
    });
  });

  describe('allSettled', () => {
    it('should settle all promises', async () => {
      const p1 = Promise.resolve(1);
      const p2 = Promise.reject('error');
      const p3 = new Promise(resolve => setTimeout(() => resolve(3), 100));

      const results = await allSettled([p1, p2, p3]);

      expect(results).toEqual([
        { status: 'fulfilled', value: 1 },
        { status: 'rejected', reason: 'error' },
        { status: 'fulfilled', value: 3 },
      ]);
    });
  });
});
