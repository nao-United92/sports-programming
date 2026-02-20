import { sleep } from './promise-sleep';

jest.useFakeTimers();

describe('sleep', () => {
  test('resolves after the given time', async () => {
    const promise = sleep(100);
    jest.advanceTimersByTime(100);
    await expect(promise).resolves.toBeUndefined();
  });
});
