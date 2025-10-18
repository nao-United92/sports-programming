const { throttle } = require('./throttle-utils');

jest.useFakeTimers();

describe('throttle', () => {
  let func;

  beforeEach(() => {
    func = jest.fn();
  });

  test('should call the function immediately', () => {
    const throttled = throttle(func, 1000);
    throttled();
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should not call the function again within the wait time', () => {
    const throttled = throttle(func, 1000);
    throttled();
    throttled();
    throttled();
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should call the function again after the wait time has passed', () => {
    const throttled = throttle(func, 1000);
    throttled();
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(1000);
    throttled();
    expect(func).toHaveBeenCalledTimes(2);
  });

  test('should call the function with the latest arguments', () => {
    const throttled = throttle(func, 1000);
    throttled(1);
    jest.advanceTimersByTime(1000);
    throttled(2);
    jest.advanceTimersByTime(1000);
    throttled(3);

    expect(func).toHaveBeenCalledWith(1);
    expect(func).toHaveBeenCalledWith(2);
    expect(func).toHaveBeenCalledWith(3);
    expect(func).toHaveBeenCalledTimes(3);
  });

  test('should execute the last call after the throttle period', () => {
    const throttled = throttle(func, 1000);
    throttled(1); // called
    throttled(2); // ignored
    throttled(3); // queued

    expect(func).toHaveBeenCalledTimes(1);
    expect(func).toHaveBeenCalledWith(1);

    jest.advanceTimersByTime(1000);
    expect(func).toHaveBeenCalledTimes(2);
    expect(func).toHaveBeenCalledWith(3);

    jest.advanceTimersByTime(1000);
    throttled(4);
    expect(func).toHaveBeenCalledTimes(3);
    expect(func).toHaveBeenCalledWith(4);
  });
});