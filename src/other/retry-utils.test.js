import { retry } from './retry-utils.js';

vi.useFakeTimers();

describe('retry', () => {
  test('should succeed on the first attempt', async () => {
    const asyncFn = vi.fn().mockResolvedValue('success');
    const retriedFn = retry(asyncFn);
    await expect(retriedFn()).resolves.toBe('success');
    expect(asyncFn).toHaveBeenCalledTimes(1);
  });

  test('should succeed after one failure', async () => {
    const asyncFn = vi.fn()
      .mockRejectedValueOnce(new Error('fail'))
      .mockResolvedValue('success');
    
    const retriedFn = retry(asyncFn, { retries: 3, delay: 100 });
    const promise = retriedFn();

    await vi.advanceTimersByTimeAsync(100);

    await expect(promise).resolves.toBe('success');
    expect(asyncFn).toHaveBeenCalledTimes(2);
  });

  test('should fail after all retries are exhausted', async () => {
    const error = new Error('fail');
    const asyncFn = vi.fn().mockRejectedValue(error);
    const retriedFn = retry(asyncFn, { retries: 4, delay: 50 });

    const promise = retriedFn();

    await vi.advanceTimersByTimeAsync(50 * 3);

    await expect(promise).rejects.toThrow('fail');
    expect(asyncFn).toHaveBeenCalledTimes(4);
  });

  test('should pass arguments to the wrapped function', async () => {
    const asyncFn = vi.fn().mockResolvedValue('done');
    const retriedFn = retry(asyncFn);
    await retriedFn(1, 'two', { three: 3 });
    expect(asyncFn).toHaveBeenCalledWith(1, 'two', { three: 3 });
  });
});
