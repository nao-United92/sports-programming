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
    throttled();
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should call the function again after the wait time', () => {
    const func = jest.fn();
    const throttled = throttle(func, 100);
    throttled();
    expect(func).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(100);
    throttled();
    expect(func).toHaveBeenCalledTimes(2);
  });

  it('should use the latest arguments', () => {
    const func = jest.fn();
    const throttled = throttle(func, 100);
    throttled(1);
    throttled(2);
    throttled(3);
    expect(func).toHaveBeenCalledWith(1);
    jest.advanceTimersByTime(100);
    throttled(4);
    expect(func).toHaveBeenCalledWith(4);
  });
});