import { throttle, once } from './function-utils.js';

// Mock timers for throttle test
jest.useFakeTimers();

describe('throttle', () => {
  it('should call the function immediately the first time', () => {
    const func = jest.fn();
    const throttledFunc = throttle(func, 1000);
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should not call the function again within the wait time', () => {
    const func = jest.fn();
    const throttledFunc = throttle(func, 1000);
    throttledFunc();
    throttledFunc();
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should call the function again after the wait time has passed', () => {
    const func = jest.fn();
    const throttledFunc = throttle(func, 1000);

    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);

    // Fast-forward time
    jest.advanceTimersByTime(1000);
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(2);
  });
});

describe('once', () => {
  it('should call the original function only once', () => {
    const func = jest.fn();
    const onceFunc = once(func);

    onceFunc();
    onceFunc();
    onceFunc();

    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should return the result of the first call on subsequent calls', () => {
    let i = 0;
    const func = () => ++i;
    const onceFunc = once(func);

    const result1 = onceFunc();
    const result2 = onceFunc();
    const result3 = onceFunc();

    expect(result1).toBe(1);
    expect(result2).toBe(1);
    expect(result3).toBe(1);
  });
});
