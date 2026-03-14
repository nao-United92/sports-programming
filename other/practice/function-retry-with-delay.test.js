const retryWithDelay = require('./function-retry-with-delay');

describe('retryWithDelay', () => {
  test('resolves if the function succeeds on the first attempt', async () => {
    const fn = jest.fn().mockResolvedValue('success');
    const result = await retryWithDelay(fn, 3, 10);
    expect(result).toBe('success');
    expect(fn).toHaveBeenCalledTimes(1);
  });

  test('retries until success', async () => {
    const fn = jest
      .fn()
      .mockRejectedValueOnce('error')
      .mockRejectedValueOnce('error')
      .mockResolvedValue('success');
    const result = await retryWithDelay(fn, 3, 10);
    expect(result).toBe('success');
    expect(fn).toHaveBeenCalledTimes(3);
  });

  test('throws the last error if all attempts fail', async () => {
    const fn = jest.fn().mockRejectedValue('fatal error');
    await expect(retryWithDelay(fn, 3, 10)).rejects.toBe('fatal error');
    expect(fn).toHaveBeenCalledTimes(3);
  });
});
