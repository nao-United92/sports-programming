import { throttle } from './throttle-utils.js';

jest.useFakeTimers();

describe('throttle', () => {
  let func;

  beforeEach(() => {
    func = jest.fn();
  });

  test('should call the function immediately on the first call by default', () => {
    const throttled = throttle(func, 100);
    throttled();
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should not call the function again within the wait time', () => {
    const throttled = throttle(func, 100);
    throttled();
    throttled();
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should call the function again after the wait time', () => {
    const throttled = throttle(func, 100);
    throttled(); // 1st call
    expect(func).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(100);
    throttled(); // 2nd call
    expect(func).toHaveBeenCalledTimes(2);
  });

  test('trailing call should happen after wait time', () => {
    const throttled = throttle(func, 100);
    throttled(1);
    throttled(2);
    expect(func).toHaveBeenCalledTimes(1);
    expect(func).toHaveBeenCalledWith(1);

    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(2);
    expect(func).toHaveBeenCalledWith(2);
  });

  test('leading: false should prevent immediate call', () => {
    const throttled = throttle(func, 100, { leading: false });
    throttled();
    expect(func).not.toHaveBeenCalled();
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('trailing: false should prevent trailing call', () => {
    const throttled = throttle(func, 100, { trailing: false });
    throttled(); // leading call
    throttled(); // ignored
    expect(func).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1); // no trailing call
  });

  test('cancel should prevent trailing call', () => {
    const throttled = throttle(func, 100, { leading: true, trailing: true });
    throttled();
    throttled();
    throttled.cancel();
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('flush should trigger trailing call immediately', () => {
    const throttled = throttle(func, 100);
    throttled(1);
    throttled(2);
    throttled.flush();
    expect(func).toHaveBeenCalledTimes(2);
    expect(func).toHaveBeenCalledWith(2);
  });
});