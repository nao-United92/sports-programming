import { asyncRetry } from './async-retry-utils.js';

jest.useFakeTimers();

describe('asyncRetry', () => {
  test('should succeed on the first attempt', async () => {
    const successfulFn = jest.fn().mockResolvedValue('success');
    await expect(asyncRetry(successfulFn)).resolves.toBe('success');
    expect(successfulFn).toHaveBeenCalledTimes(1);
  });

  test('should retry on failure and eventually succeed', async () => {
    const failingFn = jest.fn()
      .mockRejectedValueOnce(new Error('fail 1'))
      .mockRejectedValueOnce(new Error('fail 2'))
      .mockResolvedValue('success');

    await expect(asyncRetry(failingFn, { retries: 3 })).resolves.toBe('success');
    expect(failingFn).toHaveBeenCalledTimes(3);
  });

  test('should fail after all retries are exhausted', async () => {
    const failingFn = jest.fn().mockRejectedValue(new Error('persistent failure'));
    const retries = 2;

    await expect(asyncRetry(failingFn, { retries })).rejects.toThrow('persistent failure');
    expect(failingFn).toHaveBeenCalledTimes(retries + 1);
  });

  test('should respect the delay between retries', async () => {
    const failingFn = jest.fn()
      .mockRejectedValueOnce(new Error('fail'))
      .mockResolvedValue('success');
    const delay = 1000;

    const promise = asyncRetry(failingFn, { retries: 1, delay });

    // At this point, the first call should have failed, and we should be waiting.
    expect(failingFn).toHaveBeenCalledTimes(1);
    
    // Advance timers by less than the delay
    jest.advanceTimersByTime(delay - 1);
    expect(failingFn).toHaveBeenCalledTimes(1); // Still only called once

    // Advance timers past the delay
    jest.advanceTimersByTime(1);
    
    // Now the second call should be triggered
    await expect(promise).resolves.toBe('success');
    expect(failingFn).toHaveBeenCalledTimes(2);
  });

  test('should pass arguments to the async function', async () => {
    const fn = jest.fn().mockResolvedValue('done');
    await asyncRetry(() => fn(1, 'arg2'), { retries: 1 });
    expect(fn).toHaveBeenCalledWith(1, 'arg2');
  });
});