import { withTimeout } from './promise-timeout';

jest.useFakeTimers();

describe('withTimeout', () => {
  test('resolves if the promise resolves within the timeout', async () => {
    const promise = new Promise(resolve => setTimeout(() => resolve('success'), 50));
    const timedPromise = withTimeout(promise, 100);

    jest.advanceTimersByTime(50);
    await expect(timedPromise).resolves.toBe('success');
  });

  test('rejects if the promise takes longer than the timeout', async () => {
    const promise = new Promise(resolve => setTimeout(() => resolve('success'), 150));
    const timedPromise = withTimeout(promise, 100);

    jest.advanceTimersByTime(100);
    await expect(timedPromise).rejects.toThrow('Timeout');
  });
});
