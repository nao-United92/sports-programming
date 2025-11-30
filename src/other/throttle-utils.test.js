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
    throttled(); // Called at 0ms
    throttled(); // Called at 0ms, should be ignored
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should call the function again after the wait time has passed', () => {
    const func = jest.fn();
    const throttled = throttle(func, 100);

    throttled(); // Called at 0ms
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(50);
    throttled(); // Called at 50ms, should be ignored
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(50); // Total time is 100ms, throttle is over
    throttled(); // Called at 100ms, should be executed
    expect(func).toHaveBeenCalledTimes(2);
  });

  it('should pass arguments to the throttled function', () => {
    const func = jest.fn();
    const throttled = throttle(func, 100);
    throttled(1, 'a');
    expect(func).toHaveBeenCalledWith(1, 'a');
  });
});
