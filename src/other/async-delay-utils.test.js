import { delay } from './async-delay-utils.js';

describe('delay', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('should delay execution for the specified time', async () => {
    const startTime = Date.now();
    const delayTime = 1000; // 1 second

    const promise = delay(delayTime);
    jest.advanceTimersByTime(delayTime);
    await promise;

    const endTime = Date.now();
    expect(endTime - startTime).toBe(delayTime);
  });

  it('should resolve the promise after the delay', async () => {
    const delayTime = 500;
    let resolved = false;

    const promise = delay(delayTime).then(() => {
      resolved = true;
    });

    expect(resolved).toBe(false);
    jest.advanceTimersByTime(delayTime);
    await promise;
    expect(resolved).toBe(true);
  });

  it('should work with async/await', async () => {
    const delayTime = 200;
    let step = 0;

    const func = async () => {
      step = 1;
      await delay(delayTime);
      step = 2;
    };

    const promise = func();
    expect(step).toBe(1);
    jest.advanceTimersByTime(delayTime);
    await promise;
    expect(step).toBe(2);
  });
});