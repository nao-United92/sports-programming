const { throttle } = require('./function-throttle-utils.js');

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

  it('should not call the function again within the throttle period', () => {
    throttledFunc(); // Called
    throttledFunc(); // Throttled
    throttledFunc(); // Throttled
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should call the function again after the throttle period has passed', () => {
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(1000);
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(2);
  });

  it('should call the function with the latest arguments after the throttle period', () => {
    throttledFunc(1); // Called with 1
    expect(func).toHaveBeenCalledWith(1);

    throttledFunc(2); // Throttled
    throttledFunc(3); // Throttled, 3 is the latest

    jest.advanceTimersByTime(1000);
    // The trailing call should be executed
    expect(func).toHaveBeenCalledWith(3);
    expect(func).toHaveBeenCalledTimes(2);
  });

  it('should not make a trailing call if not called during the throttle period', () => {
    throttledFunc(1);
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(1000);
    expect(func).toHaveBeenCalledTimes(1); // No more calls
  });
});