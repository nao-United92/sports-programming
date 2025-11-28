const { promiseWithTimeout } = require('./async-timeout-utils');

jest.useFakeTimers();

describe('promiseWithTimeout', () => {
  let clearTimeoutSpy;

  beforeEach(() => {
    clearTimeoutSpy = jest.spyOn(global, 'clearTimeout');
  });

  afterEach(() => {
    jest.clearAllTimers();
    clearTimeoutSpy.mockRestore();
  });

  test('should resolve with the original promise value if it resolves in time', async () => {
    const fastPromise = new Promise(resolve => setTimeout(() => resolve('Success'), 50));
    const promise = promiseWithTimeout(fastPromise, 100);

    jest.advanceTimersByTime(50);

    await expect(promise).resolves.toBe('Success');
  });

  test('should reject with the original promise error if it rejects in time', async () => {
    const fastRejectingPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('Failure')), 50));
    const promise = promiseWithTimeout(fastRejectingPromise, 100);

    jest.advanceTimersByTime(50);

    await expect(promise).rejects.toThrow('Failure');
  });

  test('should reject with a default timeout error if the promise times out', async () => {
    const slowPromise = new Promise(resolve => setTimeout(() => resolve('Success'), 200));
    const promise = promiseWithTimeout(slowPromise, 100);

    jest.advanceTimersByTime(100);

    await expect(promise).rejects.toThrow('Promise timed out');
  });

  test('should reject with a custom timeout error if provided', async () => {
    const slowPromise = new Promise(resolve => setTimeout(() => resolve('Success'), 200));
    const customError = new Error('Operation took too long');
    const promise = promiseWithTimeout(slowPromise, 100, customError);

    jest.advanceTimersByTime(100);

    await expect(promise).rejects.toThrow('Operation took too long');
  });

  test('should clear the timeout when the promise resolves', async () => {
    const fastPromise = new Promise(resolve => setTimeout(() => resolve('Success'), 50));
    const promise = promiseWithTimeout(fastPromise, 100);

    jest.advanceTimersByTime(50);
    await promise;

    expect(clearTimeoutSpy).toHaveBeenCalledTimes(1);
  });

  test('should clear the timeout when the promise rejects', async () => {
    const fastRejectingPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('Failure')), 50));
    const promise = promiseWithTimeout(fastRejectingPromise, 100);

    jest.advanceTimersByTime(50);
    await expect(promise).rejects.toThrow('Failure');

    expect(clearTimeoutSpy).toHaveBeenCalledTimes(1);
  });
});
