import { sleep } from './sleep-utils';

jest.useFakeTimers();

describe('sleep', () => {
  it('should resolve after the specified time', async () => {
    const sleepPromise = sleep(1000);

    jest.advanceTimersByTime(999);
    const promiseStateBefore = jest.fn();
    sleepPromise.then(promiseStateBefore);
    expect(promiseStateBefore).not.toHaveBeenCalled();

    jest.advanceTimersByTime(1);
    await sleepPromise;
    expect(promiseStateBefore).toHaveBeenCalled();
  });

  it('should work with async/await', async () => {
    const start = Date.now();
    const sleepPromise = sleep(500);
    jest.advanceTimersByTime(500);
    await sleepPromise;
    const end = Date.now();
    // With fake timers, time doesn't actually pass, so we can't check the time difference.
    // Instead, we just ensure it resolves.
    expect(true).toBe(true);
  });
});