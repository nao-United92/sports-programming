const { race } = require('./async-race-utils.js');

// Helper to create a delayed promise
const delay = (ms, value, shouldReject = false) =>
  new Promise((resolve, reject) =>
    setTimeout(() => (shouldReject ? reject(value) : resolve(value)), ms)
  );

describe('race', () => {
  test('should resolve with the value of the first promise to fulfill', async () => {
    const p1 = delay(50, 'one');
    const p2 = delay(100, 'two');
    await expect(race([p1, p2])).resolves.toBe('one');
  });

  test('should resolve even if some promises reject', async () => {
    const p1 = delay(100, 'error1', true);
    const p2 = delay(50, 'two');
    await expect(race([p1, p2])).resolves.toBe('two');
  });

  test('should reject if all promises reject', async () => {
    const p1 = delay(50, 'error1', true);
    const p2 = delay(100, 'error2', true);
    const racePromise = race([p1, p2]);
    await expect(racePromise).rejects.toThrow('All promises were rejected');
    await expect(racePromise).rejects.toHaveProperty('errors', ['error1', 'error2']);
  });

  test('should handle an empty array of promises', async () => {
    await expect(race([])).resolves.toBeUndefined();
  });

  test('should handle non-promise values in the array', async () => {
    await expect(race([1, delay(50, 'two')])).resolves.toBe(1);
  });

  test('should resolve with the first available fulfilled promise', async () => {
    const p1 = delay(200, 'slow');
    const p2 = delay(100, 'fast');
    const p3 = delay(150, 'medium');
    await expect(race([p1, p2, p3])).resolves.toBe('fast');
  });
});
