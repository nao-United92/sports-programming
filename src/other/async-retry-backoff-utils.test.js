import { retryWithBackoff } from './async-retry-backoff-utils.js';

describe('retryWithBackoff', () => {
  let mockFn;
  let consoleWarnSpy;

  beforeEach(() => {
    mockFn = jest.fn();
    jest.useFakeTimers();
    consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
    consoleWarnSpy.mockRestore();
  });

  it('should succeed on the first attempt if no errors occur', async () => {
    mockFn.mockResolvedValue('success');
    await expect(retryWithBackoff(mockFn)).resolves.toBe('success');
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should retry and succeed after some failures', async () => {
    mockFn
      .mockRejectedValueOnce(new Error('fail 1'))
      .mockRejectedValueOnce(new Error('fail 2'))
      .mockResolvedValue('success');

    const promise = retryWithBackoff(mockFn, { retries: 2, delay: 10 });

    // First call fails
    expect(mockFn).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(10);
    await Promise.resolve(); // Allow promise chain to resolve

    // Second call fails
    expect(mockFn).toHaveBeenCalledTimes(2);
    jest.advanceTimersByTime(10 * 2); // Advance for second retry delay (exponential)
    await Promise.resolve(); // Allow promise chain to resolve

    // Third call succeeds
    expect(mockFn).toHaveBeenCalledTimes(3);
    await expect(promise).resolves.toBe('success');
  });

  it('should fail after all retries are exhausted', async () => {
    mockFn.mockRejectedValue(new Error('always fail'));

    const promise = retryWithBackoff(mockFn, { retries: 2, delay: 10 });

    // First call fails
    expect(mockFn).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(10);
    await Promise.resolve();

    // Second call fails
    expect(mockFn).toHaveBeenCalledTimes(2);
    jest.advanceTimersByTime(10 * 2);
    await Promise.resolve();

    // Third call fails (last retry)
    expect(mockFn).toHaveBeenCalledTimes(3);
    await expect(promise).rejects.toThrow('always fail');
  });

  it('should apply exponential backoff delay', async () => {
    mockFn
      .mockRejectedValueOnce(new Error('fail 1'))
      .mockRejectedValueOnce(new Error('fail 2'))
      .mockRejectedValueOnce(new Error('fail 3'))
      .mockResolvedValue('success');

    const options = { retries: 3, delay: 10, factor: 2 };
    const promise = retryWithBackoff(mockFn, options);

    // Attempt 1
    expect(mockFn).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(options.delay); // Delay for retry 1 (10ms)
    await Promise.resolve();

    // Attempt 2
    expect(mockFn).toHaveBeenCalledTimes(2);
    jest.advanceTimersByTime(options.delay * options.factor); // Delay for retry 2 (20ms)
    await Promise.resolve();

    // Attempt 3
    expect(mockFn).toHaveBeenCalledTimes(3);
    jest.advanceTimersByTime(options.delay * options.factor * options.factor); // Delay for retry 3 (40ms)
    await Promise.resolve();

    // Attempt 4 (succeeds)
    expect(mockFn).toHaveBeenCalledTimes(4);
    await expect(promise).resolves.toBe('success');
  });

  it('should respect maxDelay', async () => {
    mockFn
      .mockRejectedValueOnce(new Error('fail 1'))
      .mockRejectedValueOnce(new Error('fail 2'))
      .mockRejectedValueOnce(new Error('fail 3'))
      .mockResolvedValue('success');

    const options = { retries: 3, delay: 10, factor: 2, maxDelay: 25 }; // Max delay is 25
    const promise = retryWithBackoff(mockFn, options);

    // Attempt 1
    expect(mockFn).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(options.delay); // Delay 1: 10ms
    await Promise.resolve();

    // Attempt 2
    expect(mockFn).toHaveBeenCalledTimes(2);
    jest.advanceTimersByTime(options.delay * options.factor); // Delay 2: 20ms
    await Promise.resolve();

    // Attempt 3
    expect(mockFn).toHaveBeenCalledTimes(3);
    // Next delay would be 40ms, but maxDelay is 25ms, so it should be 25ms
    jest.advanceTimersByTime(options.maxDelay);
    await Promise.resolve();

    // Attempt 4 (succeeds)
    expect(mockFn).toHaveBeenCalledTimes(4);
    await expect(promise).resolves.toBe('success');
  });

  it('should use shouldRetry function to prevent retries for specific errors', async () => {
    mockFn
      .mockRejectedValueOnce(new Error('retryable error'))
      .mockRejectedValueOnce(new Error('non-retryable error'))
      .mockResolvedValue('success');

    const shouldRetry = (error) => error.message === 'retryable error';
    const promise = retryWithBackoff(mockFn, { retries: 2, delay: 10, shouldRetry });

    // Attempt 1 fails with retryable error
    expect(mockFn).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(10);
    await Promise.resolve();

    // Attempt 2 fails with non-retryable error, should not retry further
    expect(mockFn).toHaveBeenCalledTimes(2);
    await expect(promise).rejects.toThrow('non-retryable error');
    expect(mockFn).toHaveBeenCalledTimes(2); // No further calls
  });

  it('should not retry if retries option is 0', async () => {
    mockFn.mockRejectedValue(new Error('fail'));
    await expect(retryWithBackoff(mockFn, { retries: 0 })).rejects.toThrow('fail');
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should work with non-async functions that throw errors', async () => {
    let callCount = 0;
    const syncFn = () => {
      callCount++;
      if (callCount < 3) {
        throw new Error('sync fail');
      }
      return 'sync success';
    };

    const promise = retryWithBackoff(syncFn, { retries: 2, delay: 10 });

    expect(callCount).toBe(1); // First call
    jest.advanceTimersByTime(10);
    await Promise.resolve();

    expect(callCount).toBe(2); // Second call
    jest.advanceTimersByTime(20);
    await Promise.resolve();

    expect(callCount).toBe(3); // Third call
    await expect(promise).resolves.toBe('sync success');
  });

  it('should pass arguments to the retried function', async () => {
    mockFn
      .mockRejectedValueOnce(new Error('fail'))
      .mockResolvedValueOnce((a, b) => a + b);

    const promise = retryWithBackoff(() => mockFn(1, 2), { retries: 1, delay: 10 });

    jest.advanceTimersByTime(10);
    await Promise.resolve(); // Ensure the promise chain resolves after timer advance

    await expect(promise).resolves.toBe(3);
    expect(mockFn).toHaveBeenCalledWith(1, 2);
  });
});
