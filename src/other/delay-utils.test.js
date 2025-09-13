import { delay } from './delay-utils.js';

describe('delay', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('should resolve after the specified duration', async () => {
    const delayPromise = delay(1000);

    jest.advanceTimersByTime(999);
    const promiseStateBefore = await Promise.race([delayPromise, Promise.resolve('pending')]);
    expect(promiseStateBefore).toBe('pending');

    jest.advanceTimersByTime(1);
    const promiseStateAfter = await Promise.race([delayPromise.then(() => 'resolved'), Promise.resolve('pending')]);
    expect(promiseStateAfter).toBe('resolved');
  });

  it('should resolve immediately if the duration is 0', async () => {
    const delayPromise = delay(0);
    const promiseState = await Promise.race([delayPromise.then(() => 'resolved'), Promise.resolve('pending')]);
    expect(promiseState).toBe('resolved');
  });
});