import { promiseWithTimeout } from './promise-timeout-utils.js';

jest.useFakeTimers();

describe('promiseWithTimeout', () => {
  test('should resolve the promise if it completes before the timeout', async () => {
    const fastPromise = new Promise(resolve => setTimeout(() => resolve('Success'), 500));
    const { promise, cancel } = promiseWithTimeout(fastPromise, 1000);

    const onResolve = jest.fn();
    promise.then(onResolve);

    jest.advanceTimersByTime(500);

    await Promise.resolve();

    expect(onResolve).toHaveBeenCalledWith('Success');
    cancel();
  });

  test('should reject with a timeout error if the promise takes too long', async () => {
    const slowPromise = new Promise(resolve => setTimeout(() => resolve('Success'), 2000));
    const { promise, cancel } = promiseWithTimeout(slowPromise, 1000);

    const onReject = jest.fn();
    promise.catch(onReject);

    jest.advanceTimersByTime(1000);

    await Promise.resolve();

    expect(onReject).toHaveBeenCalledWith(new Error('Promise timed out after 1000 ms'));
    cancel();
  });

  test('should be able to cancel the timeout', async () => {
    const promiseThatWillTimeout = new Promise(resolve => setTimeout(() => resolve('Success'), 1500));
    const { promise, cancel } = promiseWithTimeout(promiseThatWillTimeout, 1000);

    const onReject = jest.fn();
    promise.catch(onReject);

    cancel();

    jest.advanceTimersByTime(1000);

    await Promise.resolve();

    expect(onReject).not.toHaveBeenCalled();

    const onResolve = jest.fn();
    promiseThatWillTimeout.then(onResolve);

    jest.advanceTimersByTime(500);
    await Promise.resolve();
    expect(onResolve).toHaveBeenCalledWith('Success');
  });
});
