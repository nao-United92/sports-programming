import { asyncPoll } from './async-poll-utils.js';

describe('asyncPoll', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('should resolve when the function eventually returns a truthy value', async () => {
    const mockFn = jest.fn();
    mockFn.mockReturnValueOnce(false);
    mockFn.mockReturnValueOnce(false);
    mockFn.mockReturnValueOnce('success');

    const promise = asyncPoll(mockFn, { interval: 100 });

    jest.advanceTimersByTime(100); // First poll
    await Promise.resolve(); // Allow promise chain to resolve
    jest.advanceTimersByTime(100); // Second poll
    await Promise.resolve();
    jest.advanceTimersByTime(100); // Third poll
    await Promise.resolve();

    await expect(promise).resolves.toBe('success');
    expect(mockFn).toHaveBeenCalledTimes(3);
  });

  it('should reject with a timeout error if the function never returns a truthy value', async () => {
    const mockFn = jest.fn(() => false);

    const promise = asyncPoll(mockFn, { interval: 100, timeout: 250 });

    jest.advanceTimersByTime(100);
    await Promise.resolve();
    jest.advanceTimersByTime(100);
    await Promise.resolve();
    jest.advanceTimersByTime(100); // This should trigger timeout
    await Promise.resolve();

    await expect(promise).rejects.toThrow('Polling timed out');
    expect(mockFn).toHaveBeenCalledTimes(2); // Called at 0, 100. Timeout check happens after 200.
  });

  it('should reject with a max retries error if the function never returns a truthy value', async () => {
    const mockFn = jest.fn(() => false);

    const promise = asyncPoll(mockFn, { interval: 100, retries: 2 }); // 2 retries means 3 attempts (initial + 2 retries)

    jest.advanceTimersByTime(100); // Attempt 1
    await Promise.resolve();
    jest.advanceTimersByTime(100); // Attempt 2
    await Promise.resolve();
    jest.advanceTimersByTime(100); // Attempt 3, should trigger max retries
    await Promise.resolve();

    await expect(promise).rejects.toThrow('Polling reached maximum retries');
    expect(mockFn).toHaveBeenCalledTimes(2);
  });

  it('should retry when the function throws an error and eventually succeed', async () => {
    const mockFn = jest.fn();
    mockFn.mockRejectedValueOnce(new Error('Temporary error'));
    mockFn.mockRejectedValueOnce(new Error('Another error'));
    mockFn.mockResolvedValueOnce('final success');

    const promise = asyncPoll(mockFn, { interval: 50 });

    jest.advanceTimersByTime(50); // Attempt 1 (reject)
    await Promise.resolve();
    jest.advanceTimersByTime(50); // Attempt 2 (reject)
    await Promise.resolve();
    jest.advanceTimersByTime(50); // Attempt 3 (resolve)
    await Promise.resolve();

    await expect(promise).resolves.toBe('final success');
    expect(mockFn).toHaveBeenCalledTimes(3);
  });

  it('should reject if the function continuously throws errors and times out', async () => {
    const mockFn = jest.fn(() => {
      throw new Error('Always failing');
    });

    const promise = asyncPoll(mockFn, { interval: 100, timeout: 250 });

    jest.advanceTimersByTime(100);
    await Promise.resolve();
    jest.advanceTimersByTime(100);
    await Promise.resolve();
    jest.advanceTimersByTime(100); // This should trigger timeout
    await Promise.resolve();

    await expect(promise).rejects.toThrow('Polling timed out');
    expect(mockFn).toHaveBeenCalledTimes(3);
  });

  it('should use the specified interval', async () => {
    const mockFn = jest.fn();
    mockFn.mockReturnValueOnce(false);
    mockFn.mockReturnValueOnce('done');

    const promise = asyncPoll(mockFn, { interval: 200, timeout: 500 });

    // Initial call happens immediately. mockFn called 1 time.
    expect(mockFn).toHaveBeenCalledTimes(1);

    // Advance timers and microtasks until the promise resolves
    await jest.runAllTimersAsync(); // This should run all timers and drain microtasks until completion

    // At this point, mockFn should have been called a second time.
    expect(mockFn).toHaveBeenCalledTimes(2);

    await expect(promise).resolves.toBe('done');
    expect(mockFn).toHaveBeenCalledTimes(2);
  });
});
