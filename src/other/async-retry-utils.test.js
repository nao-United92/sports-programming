import { retry } from './async-retry-utils';

describe('retry', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  test('should resolve if the async function succeeds on the first try', async () => {
    const mockFn = jest.fn().mockResolvedValue('Success');
    await expect(retry(mockFn)).resolves.toBe('Success');
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test('should retry and resolve if the async function succeeds after some retries', async () => {
    const mockFn = jest.fn()
      .mockRejectedValueOnce(new Error('Fail 1'))
      .mockRejectedValueOnce(new Error('Fail 2'))
      .mockResolvedValue('Success');

    const promise = retry(mockFn, { retries: 2, delay: 100 });

    // Run all timers to allow the retries to happen
    jest.runAllTimers();

    await expect(promise).resolves.toBe('Success');
    expect(mockFn).toHaveBeenCalledTimes(3);
  });

  test('should reject if the async function fails after all retries', async () => {
    const mockFn = jest.fn()
      .mockRejectedValueOnce(new Error('Fail 1'))
      .mockRejectedValueOnce(new Error('Fail 2'))
      .mockRejectedValue(new Error('Final Fail'));

    const promise = retry(mockFn, { retries: 2, delay: 100 });

    // Run all timers to allow the retries to happen
    jest.runAllTimers();

    await expect(promise).rejects.toThrow('Final Fail');
    expect(mockFn).toHaveBeenCalledTimes(3);
  });

  test('should use default retries and delay if not provided', async () => {
    const mockFn = jest.fn()
      .mockRejectedValueOnce(new Error('Fail 1'))
      .mockRejectedValueOnce(new Error('Fail 2'))
      .mockRejectedValueOnce(new Error('Fail 3'))
      .mockResolvedValue('Success');

    const promise = retry(mockFn);

    // Run all timers to allow the retries to happen
    jest.runAllTimers();

    await expect(promise).resolves.toBe('Success');
    expect(mockFn).toHaveBeenCalledTimes(4); // 1 initial + 3 retries
  });

  test('should not retry if retries is 0', async () => {
    const mockFn = jest.fn().mockRejectedValue(new Error('Fail'));
    await expect(retry(mockFn, { retries: 0 })).rejects.toThrow('Fail');
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test('should pass arguments to the async function', async () => {
    const mockFn = jest.fn((a, b) => Promise.resolve(a + b));
    await expect(retry(() => mockFn(1, 2))).resolves.toBe(3);
    expect(mockFn).toHaveBeenCalledWith(1, 2);
  });
});
