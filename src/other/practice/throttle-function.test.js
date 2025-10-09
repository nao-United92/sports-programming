import { throttle } from './throttle-function';

jest.useFakeTimers();

describe('throttle', () => {
  let func;
  let throttledFunc;

  beforeEach(() => {
    func = jest.fn();
    throttledFunc = throttle(func, 1000);
  });

  it('should call the function immediately on the first call', () => {
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should not call the function again within the wait time', () => {
    throttledFunc(); // Called immediately
    throttledFunc(); // Throttled
    throttledFunc(); // Throttled
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should call the function again after the wait time has passed', () => {
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(1000);
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(2);
  });

  it('should pass arguments to the throttled function', () => {
    throttledFunc(1, 'test');
    expect(func).toHaveBeenCalledWith(1, 'test');
  });

  it('should handle multiple throttle cycles correctly', () => {
    throttledFunc(); // Called
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(1000);
    throttledFunc(); // Called
    expect(func).toHaveBeenCalledTimes(2);

    jest.advanceTimersByTime(1000);
    throttledFunc(); // Called
    expect(func).toHaveBeenCalledTimes(3);
  });
});
