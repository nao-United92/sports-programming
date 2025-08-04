import { sleep } from './sleep-utils.js';

jest.useFakeTimers();

describe('sleep', () => {
  test('should resolve after the specified time', async () => {
    const sleepPromise = sleep(1000);

    jest.advanceTimersByTime(1000);

    await expect(sleepPromise).resolves.toBeUndefined();
  });
});
