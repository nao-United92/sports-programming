const { throttle } = require('./function-throttle-utils');

jest.useFakeTimers();

describe('throttle', () => {
  let func;

  beforeEach(() => {
    func = jest.fn();
  });

  test('should call the function immediately on the first call', () => {
    const throttledFunc = throttle(func, 1000);
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should not call the function again within the wait time', () => {
    const throttledFunc = throttle(func, 1000);
    throttledFunc(); // Called at t=0
    throttledFunc(); // Ignored
    throttledFunc(); // Ignored
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should call the function again after the wait time has passed', () => {
    const throttledFunc = throttle(func, 1000);
    throttledFunc(); // Called at t=0
    expect(func).toHaveBeenCalledTimes(1);

    // Fast-forward time
    jest.advanceTimersByTime(1000);

    throttledFunc(); // Called at t=1000
    expect(func).toHaveBeenCalledTimes(2);
  });

  test('should use the latest arguments for the throttled call', () => {
    const throttledFunc = throttle(func, 1000);
    throttledFunc(1);
    expect(func).toHaveBeenCalledWith(1);

    jest.advanceTimersByTime(1000);

    throttledFunc(2);
    throttledFunc(3);
    expect(func).toHaveBeenCalledWith(2);
    expect(func).not.toHaveBeenCalledWith(3);
    expect(func).toHaveBeenCalledTimes(2);
  });

  test('should throw an error for invalid arguments', () => {
    expect(() => throttle('not a function', 1000)).toThrow('First argument must be a function.');
    expect(() => throttle(() => {}, 'not a number')).toThrow('Second argument must be a number.');
  });
});
