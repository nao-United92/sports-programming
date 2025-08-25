const { promiseWithTimeout } = require('./promise-timeout-utils.js');

jest.useFakeTimers();

describe('promiseWithTimeout', () => {
  it('should resolve with the promise value if it resolves before the timeout', async () => {
    const slowPromise = new Promise(resolve => setTimeout(() => resolve('Success'), 50));
    const promise = promiseWithTimeout(slowPromise, 100);

    jest.advanceTimersByTime(50);

    await expect(promise).resolves.toBe('Success');
  });

  it('should reject with the promise error if it rejects before the timeout', async () => {
    const slowPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('Failure')), 50));
    const promise = promiseWithTimeout(slowPromise, 100);

    jest.advanceTimersByTime(50);

    await expect(promise).rejects.toThrow('Failure');
  });

  it('should reject with a timeout error if the promise takes too long to resolve', async () => {
    const verySlowPromise = new Promise(resolve => setTimeout(() => resolve('Success'), 200));
    const promise = promiseWithTimeout(verySlowPromise, 100);

    jest.advanceTimersByTime(100);

    await expect(promise).rejects.toThrow('Promise timed out');
  });

  it('should use a custom error message for the timeout', async () => {
    const verySlowPromise = new Promise(resolve => setTimeout(() => resolve('Success'), 200));
    const promise = promiseWithTimeout(verySlowPromise, 100, 'Request took too long to complete');

    jest.advanceTimersByTime(100);

    await expect(promise).rejects.toThrow('Request took too long to complete');
  });
});