import { throttle } from './throttle-utils';

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

  it('should not call the function again within the wait period', () => {
    const throttled = throttle(func, 100);
    throttled(); // called
    throttled(); // ignored
    throttled(); // ignored
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should call the function again after the wait period has passed', () => {
    const throttled = throttle(func, 100);
    throttled();
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(100);
    throttled();
    expect(func).toHaveBeenCalledTimes(2);
  });

  it('should schedule a trailing call if called during the throttle period', () => {
    const throttled = throttle(func, 100);
    throttled(1); // called immediately
    expect(func).toHaveBeenCalledWith(1);
    expect(func).toHaveBeenCalledTimes(1);

    throttled(2); // ignored for now
    throttled(3); // ignored for now, arguments updated

    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(100); // trailing call should fire
    expect(func).toHaveBeenCalledWith(3);
    expect(func).toHaveBeenCalledTimes(2);
  });

  it('should not have a trailing call if not called during the throttle period', () => {
    const throttled = throttle(func, 100);
    throttled(1);
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1); // No trailing call
  });

  it('should use the latest arguments for the trailing call', () => {
    const throttled = throttle(func, 100);
    throttled('first');
    throttled('second');
    throttled('third');

    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(2);
    expect(func).toHaveBeenLastCalledWith('third');
  });

  it('cancel should prevent a pending trailing call', () => {
    const throttled = throttle(func, 100);
    throttled(1); // called
    throttled(2); // scheduled for trailing call

    throttled.cancel();
    jest.advanceTimersByTime(100);

    expect(func).toHaveBeenCalledTimes(1); // trailing call was cancelled
  });
});