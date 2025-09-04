import throttle from './throttle-utils.js';

jest.useFakeTimers();

describe('throttle', () => {
  let func;
  beforeEach(() => {
    func = jest.fn();
  });

  test('should not call the function immediately', () => {
    const throttled = throttle(func, 100);
    throttled();
    expect(func).not.toHaveBeenCalled();
  });

  test('should call the function after the wait period', () => {
    const throttled = throttle(func, 100);
    throttled();
    expect(func).not.toHaveBeenCalled();
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should call the function only once for multiple calls within the wait period', () => {
    const throttled = throttle(func, 100);
    throttled(1);
    throttled(2);
    throttled(3);
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should call the function with the latest arguments from the calls within the wait period', () => {
    const throttled = throttle(func, 100);
    throttled(1);
    throttled(2);
    throttled(3);
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledWith(3);
  });

  test('should allow subsequent calls after the wait period', () => {
    const throttled = throttle(func, 100);
    throttled();
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1);

    throttled();
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(2);
  });

  test('should be able to cancel a throttled call', () => {
    const throttled = throttle(func, 100);
    throttled();
    throttled.cancel();
    jest.advanceTimersByTime(100);
    expect(func).not.toHaveBeenCalled();
  });
});