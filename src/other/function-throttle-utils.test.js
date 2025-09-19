import { throttle } from './function-throttle-utils.js';

jest.useFakeTimers();

describe('throttle', () => {
  let func;

  beforeEach(() => {
    func = jest.fn();
  });

  test('should call the function immediately on the first call (leading edge)', () => {
    const throttled = throttle(func, 100);
    throttled();
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should not call the function again within the wait period', () => {
    const throttled = throttle(func, 100);
    throttled(); // Called at 0ms
    throttled(); // Should be ignored
    throttled(); // Should be ignored
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should call the function again after the wait period', () => {
    const throttled = throttle(func, 100);
    throttled(); // Called at 0ms
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(100);
    throttled(); // Called at 100ms
    expect(func).toHaveBeenCalledTimes(2);
  });

  test('should schedule a trailing call if called multiple times within the wait period', () => {
    const throttled = throttle(func, 100);
    throttled(); // Called at 0ms
    expect(func).toHaveBeenCalledTimes(1);

    throttled(); // Ignored, but schedules trailing call
    throttled(); // Ignored, updates trailing call args

    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(2); // Trailing call
  });

  test('should not make a trailing call if trailing is false', () => {
    const throttled = throttle(func, 100, { trailing: false });
    throttled(); // Called at 0ms
    expect(func).toHaveBeenCalledTimes(1);

    throttled();
    throttled();

    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1); // No trailing call
  });

  test('should not make a leading call if leading is false', () => {
    const throttled = throttle(func, 100, { leading: false });
    throttled(); // Should not be called immediately
    expect(func).not.toHaveBeenCalled();

    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1); // Trailing call
  });

  test('cancel should prevent a scheduled trailing call', () => {
    const throttled = throttle(func, 100, { leading: false });
    throttled();

    throttled.cancel();
    jest.advanceTimersByTime(100);

    expect(func).not.toHaveBeenCalled();
  });

  test('flush should immediately execute a scheduled trailing call', () => {
    const throttled = throttle(func, 100, { leading: false });
    throttled();
    expect(func).not.toHaveBeenCalled();

    throttled.flush();
    expect(func).toHaveBeenCalledTimes(1);
  });
});
