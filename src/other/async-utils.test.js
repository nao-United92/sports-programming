import { delay, retry, timeout, sleep, parallel, waterfall } from './async-utils.js';

describe('async-utils', () => {
  it('should delay execution', async () => {
    const startTime = Date.now();
    await delay(100);
    const endTime = Date.now();
    expect(endTime - startTime).toBeGreaterThanOrEqual(100);
  });

  it('should retry a failing function', async () => {
    const failingFn = jest.fn()
      .mockRejectedValueOnce(new Error('Failed'))
      .mockResolvedValueOnce('Success');

    const result = await retry(failingFn, 2, 10);
    expect(result).toBe('Success');
    expect(failingFn).toHaveBeenCalledTimes(2);
  });

  it('should throw an error after all retries fail', async () => {
    const failingFn = jest.fn().mockRejectedValue(new Error('Failed'));
    await expect(retry(failingFn, 2, 10)).rejects.toThrow('Failed');
    expect(failingFn).toHaveBeenCalledTimes(3);
  });

  it('should resolve if the promise resolves within the timeout', async () => {
    const fastPromise = Promise.resolve('Success');
    await expect(timeout(fastPromise, 100)).resolves.toBe('Success');
  });

  it('should reject if the promise does not resolve within the timeout', async () => {
    const slowPromise = new Promise(resolve => setTimeout(() => resolve('Success'), 200));
    await expect(timeout(slowPromise, 100)).rejects.toThrow('Operation timed out');
  });
});

describe('sleep', () => {
  jest.useFakeTimers();

  test('should pause execution for the specified duration', async () => {
    const sleepTime = 2000;
    const startTime = Date.now();

    const sleepPromise = sleep(sleepTime);
    jest.advanceTimersByTime(sleepTime);
    await sleepPromise;

    const endTime = Date.now();
    expect(endTime - startTime).toBeGreaterThanOrEqual(sleepTime);
  });
});

describe('parallel', () => {
  test('should run tasks in parallel', async () => {
    const task1 = jest.fn(() => Promise.resolve(1));
    const task2 = jest.fn(() => Promise.resolve(2));
    const results = await parallel([task1, task2]);
    expect(results).toEqual([1, 2]);
    expect(task1).toHaveBeenCalled();
    expect(task2).toHaveBeenCalled();
  });
});

describe('waterfall', () => {
  test('should run tasks in series', async () => {
    const task1 = jest.fn(async () => 1);
    const task2 = jest.fn(async (val) => val + 1);
    const result = await waterfall([task1, task2]);
    expect(result).toBe(2);
    expect(task1).toHaveBeenCalled();
    expect(task2).toHaveBeenCalledWith(1);
  });
});
