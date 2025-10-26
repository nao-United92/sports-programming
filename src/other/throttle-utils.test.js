
import { throttle } from './throttle-utils';

jest.useFakeTimers();

describe('throttle', () => {
  let func;

  beforeEach(() => {
    func = jest.fn();
  });

  it('should call the function immediately on the first call', () => {
    const throttledFunc = throttle(func, 1000);
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should not call the function again within the limit', () => {
    const throttledFunc = throttle(func, 1000);
    throttledFunc();
    throttledFunc();
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should call the function again after the limit has passed', () => {
    const throttledFunc = throttle(func, 1000);
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(1000);
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(2);
  });

  it('should pass arguments to the throttled function', () => {
    const throttledFunc = throttle(func, 1000);
    throttledFunc(1, 'test');
    expect(func).toHaveBeenCalledWith(1, 'test');
  });

  it('should execute the last call after the throttle period', () => {
    const throttledFunc = throttle(func, 1000);
    throttledFunc(1);
    expect(func).toHaveBeenCalledTimes(1);
    expect(func).toHaveBeenCalledWith(1);

    throttledFunc(2);
    throttledFunc(3);
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(1000);
    expect(func).toHaveBeenCalledTimes(2);
    expect(func).toHaveBeenLastCalledWith(3);
  });
});
