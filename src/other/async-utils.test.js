import { delay, retry, timeout, sleep, parallel, waterfall, promisify, allSettled, asyncPool, memoizeAsync } from './async-utils.js';

// Use fake timers for most tests
jest.useFakeTimers();

describe('async-utils with fake timers', () => {
  it('should delay execution', async () => {
    const promise = delay(100);
    jest.advanceTimersByTime(100);
    await promise;
  });

  it('should retry a failing function', async () => {
    const failingFn = jest.fn()
      .mockRejectedValueOnce(new Error('Failed'))
      .mockResolvedValueOnce('Success');

    const promise = retry(failingFn, 2, 10);
    
    // Let the first call fail and trigger the retry
    await Promise.resolve();
    jest.advanceTimersByTime(10);
    await Promise.resolve();

    await expect(promise).resolves.toBe('Success');
    expect(failingFn).toHaveBeenCalledTimes(2);
  });

  it('should throw an error after all retries fail', async () => {
    const failingFn = jest.fn().mockRejectedValue(new Error('Failed'));
    const promise = retry(failingFn, 2, 10);

    // Run all timers to exhaust retries
    jest.runAllTimers();

    await expect(promise).rejects.toThrow('Failed');
    expect(failingFn).toHaveBeenCalledTimes(3);
  });

  it('should resolve if the promise resolves within the timeout', async () => {
    const fastPromise = Promise.resolve('Success');
    await expect(timeout(fastPromise, 100)).resolves.toBe('Success');
    expect(jest.getTimerCount()).toBe(0);
  });

  it('should reject if the promise does not resolve within the timeout', async () => {
    const slowPromise = new Promise(resolve => setTimeout(() => resolve('Success'), 200));
    const promise = timeout(slowPromise, 100);
    jest.advanceTimersByTime(100);
    await expect(promise).rejects.toThrow('Operation timed out');
  });

  test('sleep should pause execution for the specified duration', async () => {
    const sleepTime = 2000;
    const sleepPromise = sleep(sleepTime);
    jest.advanceTimersByTime(sleepTime);
    await sleepPromise;
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

describe('promisify', () => {
  test('should resolve with the result of the callback', async () => {
    const callbackStyleFn = (cb) => {
      cb(null, 'Success');
    };
    const promisedFn = promisify(callbackStyleFn);
    await expect(promisedFn()).resolves.toBe('Success');
  });

  test('should reject with the error of the callback', async () => {
    const callbackStyleFn = (cb) => {
      cb(new Error('Failure'));
    };
    const promisedFn = promisify(callbackStyleFn);
    await expect(promisedFn()).rejects.toThrow('Failure');
  });
});

describe('allSettled', () => {
  test('should resolve with an array of settled promises', async () => {
    const promises = [
      Promise.resolve(1),
      Promise.reject('Error'),
      Promise.resolve(3)
    ];
    const results = await allSettled(promises);
    expect(results).toEqual([
      { status: 'fulfilled', value: 1 },
      { status: 'rejected', reason: 'Error' },
      { status: 'fulfilled', value: 3 }
    ]);
  });
});

describe('asyncPool with real timers', () => {
  jest.useRealTimers();

  it('should run tasks with limited concurrency', async () => {
    const results = [];
    const concurrencyLog = [];
    let currentConcurrency = 0;

    const task = (id, delayMs) => async () => {
      currentConcurrency++;
      concurrencyLog.push(currentConcurrency);
      await new Promise(r => setTimeout(r, delayMs));
      results.push(id);
      currentConcurrency--;
    };

    const tasks = [
      task(1, 100),
      task(2, 100),
      task(3, 100),
      task(4, 100),
      task(5, 100),
    ];

    await asyncPool(2, tasks);

    expect(results).toEqual([1, 2, 3, 4, 5]);
    // Check if concurrency limit was respected
    concurrencyLog.forEach(count => {
      expect(count).toBeLessThanOrEqual(2);
    });
  }, 1000); // Timeout for this test
});

describe('memoizeAsync with fake timers', () => {
  jest.useFakeTimers();

  test('should call the async function only once for the same arguments', async () => {
    const asyncFn = jest.fn(async (a, b) => {
      await delay(10);
      return a + b;
    });

    const memoized = memoizeAsync(asyncFn);

    const p1 = memoized(1, 2);
    const p2 = memoized(1, 2);

    jest.advanceTimersByTime(10);

    const res1 = await p1;
    const res2 = await p2;

    expect(res1).toBe(3);
    expect(res2).toBe(3);
    expect(asyncFn).toHaveBeenCalledTimes(1);
  });

  test('should call the async function again for different arguments', async () => {
    const asyncFn = jest.fn(async (a, b) => {
      await delay(10);
      return a + b;
    });

    const memoized = memoizeAsync(asyncFn);

    const p1 = memoized(1, 2);
    jest.advanceTimersByTime(10);
    await p1;

    const p2 = memoized(2, 3);
    jest.advanceTimersByTime(10);
    await p2;

    expect(asyncFn).toHaveBeenCalledTimes(2);
  });

  test('should use a custom resolver for the cache key', async () => {
    const asyncFn = jest.fn(async (obj) => {
      await delay(10);
      return obj.value;
    });

    const resolver = (obj) => obj.id;
    const memoized = memoizeAsync(asyncFn, resolver);

    const p1 = memoized({ id: 1, value: 10 });
    const p2 = memoized({ id: 1, value: 20 });

    jest.advanceTimersByTime(10);
    
    const res1 = await p1;
    const res2 = await p2;

    expect(res1).toBe(10);
    expect(res2).toBe(10);
    expect(asyncFn).toHaveBeenCalledTimes(1);
  });

  test('should re-run the function if the previous call failed', async () => {
    let shouldFail = true;
    const asyncFn = jest.fn(async () => {
      await delay(10);
      if (shouldFail) {
        shouldFail = false;
        throw new Error('Failed');
      }
      return 'Success';
    });

    const memoized = memoizeAsync(asyncFn);

    const p1 = memoized();
    jest.advanceTimersByTime(10);
    await expect(p1).rejects.toThrow('Failed');

    const p2 = memoized();
    jest.advanceTimersByTime(10);
    const result = await p2;

    expect(result).toBe('Success');
    expect(asyncFn).toHaveBeenCalledTimes(2);
  });
});
