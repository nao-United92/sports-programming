// src/other/async-utils.test.js

const { retry } = require('./async-utils');

// Mock setTimeout and clearTimeout for testing retry delays
jest.useFakeTimers();

describe('Async Utils', () => {
  describe('retry', () => {
    let mockAsyncFunction;

    beforeEach(() => {
      mockAsyncFunction = jest.fn();
    });

    test('should resolve immediately if the async function succeeds on the first attempt', async () => {
      mockAsyncFunction.mockResolvedValue('success');

      await expect(retry(mockAsyncFunction)).resolves.toBe('success');
      expect(mockAsyncFunction).toHaveBeenCalledTimes(1);
    });

    test('should retry the async function a specified number of times before failing', async () => {
      mockAsyncFunction
        .mockRejectedValueOnce(new Error('fail 1'))
        .mockRejectedValueOnce(new Error('fail 2'))
        .mockRejectedValueOnce(new Error('fail 3'))
        .mockResolvedValue('success'); // Should succeed on 4th attempt (3 retries + 1 initial)

      await expect(retry(mockAsyncFunction, { retries: 3, delay: 100 })).resolves.toBe('success');
      expect(mockAsyncFunction).toHaveBeenCalledTimes(4);
      expect(jest.runAllTimers).toHaveBeenCalledTimes(3); // 3 delays for 3 retries
    });

    test('should reject if all retries fail', async () => {
      const error = new Error('All attempts failed');
      mockAsyncFunction
        .mockRejectedValueOnce(new Error('fail 1'))
        .mockRejectedValueOnce(new Error('fail 2'))
        .mockRejectedValueOnce(error);

      await expect(retry(mockAsyncFunction, { retries: 2, delay: 100 })).rejects.toThrow('All attempts failed');
      expect(mockAsyncFunction).toHaveBeenCalledTimes(3); // 1 initial + 2 retries
      expect(jest.runAllTimers).toHaveBeenCalledTimes(2); // 2 delays for 2 retries
    });

    test('should use the specified delay between retries', async () => {
      mockAsyncFunction
        .mockRejectedValueOnce(new Error('fail 1'))
        .mockRejectedValueOnce(new Error('fail 2'))
        .mockResolvedValue('success');

      const promise = retry(mockAsyncFunction, { retries: 2, delay: 500 });

      expect(mockAsyncFunction).toHaveBeenCalledTimes(1);
      jest.advanceTimersByTime(499);
      expect(mockAsyncFunction).toHaveBeenCalledTimes(1); // Not yet retried
      jest.advanceTimersByTime(1); // 500ms passed
      expect(mockAsyncFunction).toHaveBeenCalledTimes(2); // First retry

      jest.advanceTimersByTime(499);
      expect(mockAsyncFunction).toHaveBeenCalledTimes(2); // Not yet retried
      jest.advanceTimersByTime(1); // 500ms passed
      expect(mockAsyncFunction).toHaveBeenCalledTimes(3); // Second retry

      await promise; // Wait for the promise to resolve
      expect(mockAsyncFunction).toHaveBeenCalledTimes(3);
    });

    test('should default to 3 retries and 1000ms delay', async () => {
      mockAsyncFunction
        .mockRejectedValueOnce(new Error('fail 1'))
        .mockRejectedValueOnce(new Error('fail 2'))
        .mockRejectedValueOnce(new Error('fail 3'))
        .mockRejectedValueOnce(new Error('fail 4')) // 1 initial + 3 retries = 4 calls
        .mockResolvedValue('success');

      await expect(retry(mockAsyncFunction)).resolves.toBe('success');
      expect(mockAsyncFunction).toHaveBeenCalledTimes(4);
      expect(jest.runAllTimers).toHaveBeenCalledTimes(3); // 3 delays
    });

    test('should handle async function that returns a promise', async () => {
      mockAsyncFunction.mockImplementation(() => Promise.resolve('async success'));
      await expect(retry(mockAsyncFunction)).resolves.toBe('async success');
      expect(mockAsyncFunction).toHaveBeenCalledTimes(1);
    });

    test('should handle async function that throws an error', async () => {
      mockAsyncFunction.mockImplementation(() => {
        throw new Error('sync error');
      });
      await expect(retry(mockAsyncFunction, { retries: 0 })).rejects.toThrow('sync error');
      expect(mockAsyncFunction).toHaveBeenCalledTimes(1);
    });
  });
});