const { sleep } = require('./async-sleep-utils.js');

jest.useFakeTimers();

describe('sleep', () => {
  it('should resolve after the specified time', async () => {
    const startTime = Date.now();
    const sleepPromise = sleep(100);

    jest.advanceTimersByTime(100);

    await sleepPromise;
    const endTime = Date.now();

    expect(endTime - startTime).toBe(100);
  });

  it('should work with 0ms delay', async () => {
    const startTime = Date.now();
    const sleepPromise = sleep(0);

    jest.advanceTimersByTime(0);

    await sleepPromise;
    const endTime = Date.now();

    expect(endTime - startTime).toBe(0);
  });
});
