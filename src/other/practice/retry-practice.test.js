import { retry } from './retry-practice.js';

jest.useFakeTimers();
jest.setTimeout(120000); // Extend timeout for async tests

describe('retry', () => {
  let mockFn;

  beforeEach(() => {
    mockFn = jest.fn();
  });

  it('should succeed on the first attempt', async () => {
    mockFn.mockResolvedValue('Success');
    await expect(retry(mockFn)).resolves.toBe('Success');
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should retry and succeed after some failures', async () => {
    mockFn
      .mockRejectedValueOnce(new Error('Failure 1'))
      .mockRejectedValueOnce(new Error('Failure 2'))
      .mockResolvedValue('Success');

    const promise = retry(mockFn, 2, 100); // 2 retries + 1 initial attempt = 3 calls

    // Run all timers to allow retries to happen
    jest.runAllTimers();
    await Promise.resolve(); // Ensure all microtasks are resolved

    await expect(promise).resolves.toBe('Success');
    expect(mockFn).toHaveBeenCalledTimes(3);
  });

  it('should reject if all retries fail', async () => {
    mockFn.mockRejectedValue(new Error('Persistent Failure'));

    const promise = retry(mockFn, 2, 100); // 2 retries + 1 initial attempt = 3 calls

    // Run all timers to allow retries to happen
    jest.runAllTimers();
    await Promise.resolve(); // Ensure all microtasks are resolved

    await expect(promise).rejects.toThrow('Persistent Failure');
    expect(mockFn).toHaveBeenCalledTimes(3);
  });

  it('should use default retries and delay if not provided', async () => {
    mockFn
      .mockRejectedValueOnce(new Error('Failure 1'))
      .mockRejectedValueOnce(new Error('Failure 2'))
      .mockRejectedValueOnce(new Error('Failure 3'))
      .mockResolvedValue('Success'); // This will not be reached with default 3 retries

    const promise = retry(mockFn); // Default retries = 3, default delay = 1000

    // Run all timers to allow retries to happen
    jest.runAllTimers();
    await Promise.resolve(); // Ensure all microtasks are resolved

    await expect(promise).rejects.toThrow('Failure 3'); // Last error
    expect(mockFn).toHaveBeenCalledTimes(4); // 1 initial + 3 retries
  });
});
