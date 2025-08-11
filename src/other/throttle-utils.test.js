import { throttle } from './throttle-utils.js';

describe('throttle', () => {
  jest.useFakeTimers();

  it('should call the function immediately', () => {
    const func = jest.fn();
    const throttled = throttle(func, 100);
    throttled();
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should not call the function again within the wait time', () => {
    const func = jest.fn();
    const throttled = throttle(func, 100);
    throttled();
    throttled();
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should call the function again after the wait time', () => {
    const func = jest.fn();
    const throttled = throttle(func, 100);
    throttled();
    jest.advanceTimersByTime(100);
    throttled();
    expect(func).toHaveBeenCalledTimes(2);
  });
});