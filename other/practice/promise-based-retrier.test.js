import { retry } from './promise-based-retrier.js';

jest.useFakeTimers();

describe('retry', () => {
  let mockAsyncFunction;

  beforeEach(() => {
    mockAsyncFunction = jest.fn();
  });

  test('should execute the function successfully on the first attempt', async () => {
    mockAsyncFunction.mockResolvedValue('Success');
    await expect(retry(mockAsyncFunction, 3, 100)).resolves.toBe('Success');
    expect(mockAsyncFunction).toHaveBeenCalledTimes(1);
  });

  test('should retry and succeed after a few attempts', async () => {
    mockAsyncFunction
      .mockRejectedValueOnce('Error 1')
      .mockRejectedValueOnce('Error 2')
      .mockResolvedValue('Success');

    const promise = retry(mockAsyncFunction, 2, 100);

    jest.advanceTimersByTime(100); // first retry delay
    await Promise.resolve(); // Allow promise chain to resolve

    jest.advanceTimersByTime(100); // second retry delay
    await Promise.resolve(); // Allow promise chain to resolve

    await expect(promise).resolves.toBe('Success');
    expect(mockAsyncFunction).toHaveBeenCalledTimes(3);
  });

  test('should fail after all retries are exhausted', async () => {
    mockAsyncFunction.mockRejectedValue('Fatal Error');

    const promise = retry(mockAsyncFunction, 2, 100);

    jest.advanceTimersByTime(100); // first retry delay
    await Promise.resolve(); // Allow promise chain to resolve
    
    jest.advanceTimersByTime(100); // second retry delay
    await Promise.resolve(); // Allow promise chain to resolve
    
    await expect(promise).rejects.toBe('Fatal Error');
    expect(mockAsyncFunction).toHaveBeenCalledTimes(3); // 1 initial + 2 retries
  });

  test('should use default retries and delay if not provided', async () => {
    mockAsyncFunction
      .mockRejectedValueOnce('Error')
      .mockRejectedValueOnce('Error')
      .mockResolvedValue('Success');

    const promise = retry(mockAsyncFunction); // Default retries = 3, delay = 100

    jest.advanceTimersByTime(100); // 1st retry
    await Promise.resolve();
    jest.advanceTimersByTime(100); // 2nd retry
    await Promise.resolve();
    jest.advanceTimersByTime(100); // 3rd retry
    await Promise.resolve();

    await expect(promise).resolves.toBe('Success');
    expect(mockAsyncFunction).toHaveBeenCalledTimes(3);
  });
});
