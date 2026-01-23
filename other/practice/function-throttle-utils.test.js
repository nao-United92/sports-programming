import { throttle } from './function-throttle-utils.js';

describe('throttle', () => {
  jest.useFakeTimers();

  it('should call the function immediately', () => {
    const func = jest.fn();
    const throttled = throttle(func, 1000);
    throttled();
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should not call the function again within the wait time', () => {
    const func = jest.fn();
    const throttled = throttle(func, 1000);
    throttled();
    throttled();
    throttled();
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should call the function again after the wait time', () => {
    const func = jest.fn();
    const throttled = throttle(func, 1000);

    throttled();
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(1000);
    throttled();
    expect(func).toHaveBeenCalledTimes(2);
  });

  it('should pass arguments to the throttled function', () => {
    const func = jest.fn();
    const throttled = throttle(func, 1000);
    throttled(1, 'test');
    expect(func).toHaveBeenCalledWith(1, 'test');
  });
});
