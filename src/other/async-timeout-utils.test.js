const { withTimeout } = require('./async-timeout-utils.js');

// A helper function to create a promise that resolves after a delay.
const delay = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));

describe('withTimeout', () => {
  test('should resolve with the original promise value if it resolves before timeout', async () => {
    const fastPromise = delay(50, 'resolved');
    const promiseWithTimeout = withTimeout(fastPromise, 100);
    await expect(promiseWithTimeout).resolves.toBe('resolved');
  });

  test('should reject with the original promise error if it rejects before timeout', async () => {
    const failingPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('original error')), 50));
    const promiseWithTimeout = withTimeout(failingPromise, 100);
    await expect(promiseWithTimeout).rejects.toThrow('original error');
  });

  test('should reject with a timeout error if the promise does not resolve in time', async () => {
    const slowPromise = delay(200, 'too slow');
    const promiseWithTimeout = withTimeout(slowPromise, 100);
    await expect(promiseWithTimeout).rejects.toThrow('Promise timed out');
  });

  test('should use a custom timeout error message if provided', async () => {
    const slowPromise = delay(200, 'too slow');
    const promiseWithTimeout = withTimeout(slowPromise, 100, 'Operation took too long');
    await expect(promiseWithTimeout).rejects.toThrow('Operation took too long');
  });

  test('should handle promises that are already resolved', async () => {
    const resolvedPromise = Promise.resolve('already done');
    const promiseWithTimeout = withTimeout(resolvedPromise, 100);
    await expect(promiseWithTimeout).resolves.toBe('already done');
  });
});
