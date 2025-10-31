const { throttle } = require('./function-throttle-utils');

jest.useFakeTimers();

describe('throttle', () => {
  let func;
  let throttledFunc;

  beforeEach(() => {
    func = jest.fn();
    throttledFunc = throttle(func, 500);
  });

  it('should call the function immediately on the first call', () => {
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should not call the function again within the limit period', () => {
    throttledFunc(); // Called once
    throttledFunc(); // Should be ignored
    throttledFunc(); // Should be ignored

    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should call the function again after the limit period has passed', () => {
    throttledFunc(); // Called once
    expect(func).toHaveBeenCalledTimes(1);

    // Fast-forward time
    jest.advanceTimersByTime(500);

    throttledFunc(); // Should be called again
    expect(func).toHaveBeenCalledTimes(2);
  });

  it('should pass arguments to the original function', () => {
    throttledFunc(1, 'test');
    expect(func).toHaveBeenCalledWith(1, 'test');
  });

  it('should ignore subsequent calls within the throttle period and their arguments', () => {
    throttledFunc('first');
    throttledFunc('second');
    throttledFunc('third');

    expect(func).toHaveBeenCalledTimes(1);
    expect(func).toHaveBeenCalledWith('first');

    jest.advanceTimersByTime(500);

    throttledFunc('fourth');
    expect(func).toHaveBeenCalledTimes(2);
    expect(func).toHaveBeenCalledWith('fourth');
  });

  it('should handle multiple throttle periods correctly', () => {
    // First call
    throttledFunc(1);
    expect(func).toHaveBeenCalledTimes(1);
    expect(func).toHaveBeenLastCalledWith(1);

    // Second call within limit, should be ignored
    jest.advanceTimersByTime(250);
    throttledFunc(2);
    expect(func).toHaveBeenCalledTimes(1);

    // Third call after limit, should execute
    jest.advanceTimersByTime(250); // Total time = 500
    throttledFunc(3);
    expect(func).toHaveBeenCalledTimes(2);
    expect(func).toHaveBeenLastCalledWith(3);

    // Fourth call after another limit, should execute
    jest.advanceTimersByTime(500);
    throttledFunc(4);
    expect(func).toHaveBeenCalledTimes(3);
    expect(func).toHaveBeenLastCalledWith(4);
  });
});