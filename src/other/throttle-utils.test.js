import { throttle } from './throttle-utils.js';

jest.useFakeTimers();

describe('throttle', () => {
  let func;

  beforeEach(() => {
    func = jest.fn();
  });

  it('should call the function immediately on the first call', () => {
    const throttled = throttle(func, 100);
    throttled();
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should not call the function again within the wait time', () => {
    const throttled = throttle(func, 100);
    throttled();
    throttled();
    throttled();
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should call the function again after the wait time has passed', () => {
    const throttled = throttle(func, 100);
    throttled(); // 1st call
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(50);
    throttled(); // should be ignored
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(50); // total 100ms passed
    throttled(); // 2nd call
    expect(func).toHaveBeenCalledTimes(2);
  });

  it('should call the trailing invocation with the last arguments', () => {
    const throttled = throttle(func, 100);
    throttled(1);
    expect(func).toHaveBeenCalledWith(1);

    throttled(2);
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledWith(2);
    expect(func).toHaveBeenCalledTimes(2);
  });

  it('should reset after the wait time', () => {
    const throttled = throttle(func, 100);
    throttled();
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(100);
    throttled();
    expect(func).toHaveBeenCalledTimes(2);

    jest.advanceTimersByTime(100);
    throttled();
    expect(func).toHaveBeenCalledTimes(3);
  });
});