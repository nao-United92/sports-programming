
import { delay, retry, withTimeout, asyncPool } from './async-advanced-utils';

describe('delay', () => {
  jest.useFakeTimers();

  test('should delay execution for the specified milliseconds', async () => {
    const mockFn = jest.fn();
    const promise = delay(1000).then(mockFn);

    expect(mockFn).not.toHaveBeenCalled();

    jest.advanceTimersByTime(500);
    expect(mockFn).not.toHaveBeenCalled();

    jest.advanceTimersByTime(500);
    await promise; // Ensure the promise resolves
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});

describe('retry', () => {
  jest.useFakeTimers();

  test('should succeed on first attempt', async () => {
    const mockFn = jest.fn(() => Promise.resolve('Success'));
    await expect(retry(mockFn)).resolves.toBe('Success');
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test('should retry and succeed after some failures', async () => {
    let callCount = 0;
    const mockFn = jest.fn(() => {
      callCount++;
      if (callCount < 2) {
        return Promise.reject(new Error('Temporary error'));
      } else {
        return Promise.resolve('Success after retry');
      }
    });

    const promise = retry(mockFn, 2, 100);

    // First call
    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(callCount).toBe(1);

    jest.advanceTimersByTime(100);
    // Second call (retry)
    expect(mockFn).toHaveBeenCalledTimes(2);
    expect(callCount).toBe(2);

    await expect(promise).resolves.toBe('Success after retry');
  });

  test('should reject if all retries fail', async () => {
    const mockFn = jest.fn(() => Promise.reject(new Error('Persistent error')));
    const promise = retry(mockFn, 1, 100);

    // First call
    expect(mockFn).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(100);
    // Second call (retry)
    expect(mockFn).toHaveBeenCalledTimes(2);

    await expect(promise).rejects.toThrow('Persistent error');
  });

  test('should use default retries and delay', async () => {
    let callCount = 0;
    const mockFn = jest.fn(() => {
      callCount++;
      return Promise.reject(new Error('Error'));
    });

    const promise = retry(mockFn);

    // Initial call + 3 retries = 4 calls
    jest.advanceTimersByTime(1000);
    jest.advanceTimersByTime(1000);
    jest.advanceTimersByTime(1000);

    await expect(promise).rejects.toThrow('Error');
    expect(mockFn).toHaveBeenCalledTimes(4);
  });
});

describe('withTimeout', () => {
  jest.useFakeTimers();

  test('should resolve if promise resolves before timeout', async () => {
    const longRunningPromise = new Promise(resolve => setTimeout(() => resolve('Done'), 500));
    const resultPromise = withTimeout(longRunningPromise, 1000);

    jest.advanceTimersByTime(500);
    await expect(resultPromise).resolves.toBe('Done');
  });

  test('should reject if promise rejects before timeout', async () => {
    const failingPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('Failed')), 500));
    const resultPromise = withTimeout(failingPromise, 1000);

    jest.advanceTimersByTime(500);
    await expect(resultPromise).rejects.toThrow('Failed');
  });

  test('should reject with timeout error if promise takes too long', async () => {
    const veryLongRunningPromise = new Promise(resolve => setTimeout(() => resolve('Done'), 2000));
    const resultPromise = withTimeout(veryLongRunningPromise, 1000);

    jest.advanceTimersByTime(1000);
    await expect(resultPromise).rejects.toThrow('Operation timed out');
  });

  test('should use custom error message for timeout', async () => {
    const veryLongRunningPromise = new Promise(resolve => setTimeout(() => resolve('Done'), 2000));
    const resultPromise = withTimeout(veryLongRunningPromise, 1000, 'Custom timeout message');

    jest.advanceTimersByTime(1000);
    await expect(resultPromise).rejects.toThrow('Custom timeout message');
  });
});

describe('asyncPool', () => {
  jest.useFakeTimers();

  test('should run tasks in parallel with a limit', async () => {
    const results = [];
    const tasks = [
      () => delay(100).then(() => results.push(1)),
      () => delay(200).then(() => results.push(2)),
      () => delay(50).then(() => results.push(3)),
      () => delay(150).then(() => results.push(4)),
      () => delay(100).then(() => results.push(5)),
    ];

    const poolPromise = asyncPool(2, tasks);

    // Initially, first two tasks should start
    jest.advanceTimersByTime(50);
    await Promise.resolve(); // allow promises to settle
    // Task 3 (50ms) should have finished
    expect(results).toEqual([3]);

    jest.advanceTimersByTime(50);
    await Promise.resolve();
    // Task 1 (100ms) should have finished
    expect(results).toEqual([3, 1]);

    jest.advanceTimersByTime(100);
    await Promise.resolve();
    // Task 4 (150ms) and 2 (200ms) should have finished
    expect(results).toEqual([3, 1, 4, 2]);

    jest.advanceTimersByTime(50);
    await Promise.resolve();
    // Task 5 (100ms) should have finished
    expect(results).toEqual([3, 1, 4, 2, 5]);

    await poolPromise;
  });

  test('should return results in the correct order', async () => {
    const tasks = [
      () => delay(100).then(() => 1),
      () => delay(50).then(() => 2),
    ];
    const promise = asyncPool(2, tasks);
    jest.runAllTimers();
    const results = await promise;
    expect(results).toEqual([1, 2]);
  });
});
