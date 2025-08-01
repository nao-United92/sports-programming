import { throttle } from './throttle-utils.js';

jest.useFakeTimers();

describe('throttle', () => {
  let func;

  beforeEach(() => {
    func = jest.fn();
  });

  test('should call the function at most once per wait period', () => {
    const throttled = throttle(func, 100);

    throttled();
    throttled();
    throttled();

    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(100);
    throttled();
    expect(func).toHaveBeenCalledTimes(2);
  });

  test('should call the function immediately on the first call (leading edge)', () => {
    const throttled = throttle(func, 100);
    throttled();
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should not call the function on the leading edge if leading is false', () => {
    const throttled = throttle(func, 100, { leading: false });
    throttled();
    expect(func).not.toHaveBeenCalled();

    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should call the function on the trailing edge if calls are made during the cooldown', () => {
    const throttled = throttle(func, 100, { trailing: true });

    throttled(); // leading call
    expect(func).toHaveBeenCalledTimes(1);

    throttled(); // throttled
    throttled(); // throttled

    jest.advanceTimersByTime(100);
    // trailing call
    expect(func).toHaveBeenCalledTimes(2);
  });

    test('should not call the function on the trailing edge if trailing is false', () => {
        const throttled = throttle(func, 100, { trailing: false });

        throttled(); // leading call
        expect(func).toHaveBeenCalledTimes(1);

        throttled(); // throttled
        throttled(); // throttled

        jest.advanceTimersByTime(100);
        // no trailing call
        expect(func).toHaveBeenCalledTimes(1);
    });


  test('should pass arguments to the original function', () => {
    const throttled = throttle(func, 100);
    throttled(1, 'a');

    expect(func).toHaveBeenCalledWith(1, 'a');
  });
});