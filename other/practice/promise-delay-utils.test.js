import delay from './promise-delay-utils';

describe('delay', () => {
  test('should resolve after the specified time', async () => {
    const start = Date.now();
    await delay(100);
    const end = Date.now();
    expect(end - start).toBeGreaterThanOrEqual(100);
  });

  test('should resolve with no value', async () => {
    const result = await delay(10);
    expect(result).toBeUndefined();
  });
});
