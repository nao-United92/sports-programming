import { promiseAllSettled } from './promise-all-settled-utils.js';

describe('promiseAllSettled', () => {
  test('should settle all promises', async () => {
    const promises = [
      Promise.resolve(1),
      Promise.reject('error'),
      Promise.resolve(3),
    ];

    const results = await promiseAllSettled(promises);

    expect(results).toEqual([
      { status: 'fulfilled', value: 1 },
      { status: 'rejected', reason: 'error' },
      { status: 'fulfilled', value: 3 },
    ]);
  });

  test('should handle empty array', async () => {
    const results = await promiseAllSettled([]);
    expect(results).toEqual([]);
  });

  test('should handle non-promise values in array', async () => {
    const promises = [1, 'hello', true];
    const results = await promiseAllSettled(promises);
    expect(results).toEqual([
      { status: 'fulfilled', value: 1 },
      { status: 'fulfilled', value: 'hello' },
      { status: 'fulfilled', value: true },
    ]);
  });

  test('should reject if input is not an array', async () => {
    await expect(promiseAllSettled('not an array')).rejects.toThrow('The input must be an array.');
  });
});
