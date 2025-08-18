import { sleep, withTimeout } from './async-timing-utils';

describe('Async Timing Utilities', () => {
  describe('sleep', () => {
    it('should resolve after the specified time', async () => {
      const startTime = Date.now();
      await sleep(50);
      const endTime = Date.now();
      expect(endTime - startTime).toBeGreaterThanOrEqual(48); // Allow for slight inaccuracies
    });
  });

  describe('withTimeout', () => {
    it('should resolve if the promise resolves within the timeout', async () => {
      const fastPromise = Promise.resolve('fast');
      await expect(withTimeout(fastPromise, 100)).resolves.toBe('fast');
    });

    it('should reject if the promise rejects within the timeout', async () => {
      const fastRejectingPromise = Promise.reject(new Error('fast error'));
      await expect(withTimeout(fastRejectingPromise, 100)).rejects.toThrow('fast error');
    });

    it('should reject with a timeout error if the promise takes too long', async () => {
      const slowPromise = new Promise(resolve => setTimeout(() => resolve('slow'), 200));
      await expect(withTimeout(slowPromise, 100)).rejects.toThrow('Promise timed out');
    });

    it('should use a custom timeout error message', async () => {
        const slowPromise = new Promise(resolve => setTimeout(() => resolve('slow'), 200));
        await expect(withTimeout(slowPromise, 100, 'Too slow!')).rejects.toThrow('Too slow!');
    });
  });
});
