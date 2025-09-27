import { promisePool } from './promise-pool-utils';

const delay = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));

describe('promisePool', () => {
  test('should run promises in parallel with limited concurrency', async () => {
    const start = Date.now();
    const promiseFns = [
      () => delay(100, 1),
      () => delay(100, 2),
      () => delay(100, 3),
      () => delay(100, 4),
      () => delay(100, 5),
    ];

    const results = await promisePool(promiseFns, 2);
    const end = Date.now();

    expect(results).toEqual([1, 2, 3, 4, 5]);
    // With concurrency 2, 5 promises of 100ms should take ~300ms
    expect(end - start).toBeGreaterThanOrEqual(290); // Allow for slight timing variations
    expect(end - start).toBeLessThan(400);
  });

  test('should handle an empty array of promises', async () => {
    const results = await promisePool([], 3);
    expect(results).toEqual([]);
  });

  test('should handle concurrency greater than the number of promises', async () => {
    const promiseFns = [
      () => Promise.resolve(1),
      () => Promise.resolve(2),
    ];
    const results = await promisePool(promiseFns, 5);
    expect(results).toEqual([1, 2]);
  });

  test('should reject if any promise rejects', async () => {
    const promiseFns = [
      () => Promise.resolve(1),
      () => Promise.reject(new Error('Test Error')),
      () => Promise.resolve(3),
    ];

    await expect(promisePool(promiseFns, 2)).rejects.toThrow('Test Error');
  });
});
