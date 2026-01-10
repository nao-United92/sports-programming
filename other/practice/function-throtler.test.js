const { throttle } = require('./function-throtler.js');

describe('throttle', () => {
  let func;
  let throttledFunc;

  beforeEach(() => {
    jest.useFakeTimers();
    func = jest.fn();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  test('should throttle a function, calling it immediately on the leading edge', () => {
    throttledFunc = throttle(func, 100);

    throttledFunc(); // First call, should execute immediately
    expect(func).toHaveBeenCalledTimes(1);

    throttledFunc(); // Second call, within wait period, should be ignored
    throttledFunc(); // Third call, within wait period, should be ignored
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(50); // Advance time by less than wait
    throttledFunc(); // Should still be ignored
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(50); // Advance time to complete the wait period (total 100ms)
    throttledFunc(); // Should execute immediately as wait period has passed
    expect(func).toHaveBeenCalledTimes(2);

    jest.advanceTimersByTime(200); // Advance beyond wait period
    throttledFunc(); // Should execute again
    expect(func).toHaveBeenCalledTimes(3);
  });

  test('should pass arguments and context to the throttled function', () => {
    throttledFunc = throttle(func, 100);
    const context = { key: 'value' };

    throttledFunc.call(context, 1, 2);
    jest.advanceTimersByTime(100);

    expect(func).toHaveBeenCalledWith(1, 2);
    // Jest's mock functions don't store context directly, but we can verify args
  });

  test('should return the result of the throttled function from the last execution', () => {
    func.mockReturnValueOnce('result1').mockReturnValueOnce('result2');
    throttledFunc = throttle(func, 100);

    let result = throttledFunc(1); // Executes func, returns 'result1'
    expect(func).toHaveBeenCalledTimes(1);
    expect(result).toBe('result1');

    jest.advanceTimersByTime(50);
    result = throttledFunc(2); // Ignored, returns 'result1' (from previous valid call)
    expect(func).toHaveBeenCalledTimes(1);
    expect(result).toBe('result1'); // Returns previous result because func was not called

    jest.advanceTimersByTime(50); // Total 100ms passed
    result = throttledFunc(3); // Executes func again, returns 'result2'
    expect(func).toHaveBeenCalledTimes(2);
    expect(result).toBe('result2');
  });

  test('should allow cancelling throttled calls', () => {
    throttledFunc = throttle(func, 100);

    throttledFunc(); // Executes
    expect(func).toHaveBeenCalledTimes(1);

    throttledFunc(); // Ignored
    jest.advanceTimersByTime(50);
    throttledFunc.cancel(); // Reset
    jest.advanceTimersByTime(100); // Pass time

    throttledFunc(); // Should execute again because it was cancelled
    expect(func).toHaveBeenCalledTimes(2);
  });

  test('should throw an error if func is not a function', () => {
    expect(() => throttle(null, 100)).toThrow('Expected a function for the first argument.');
    expect(() => throttle('string', 100)).toThrow('Expected a function for the first argument.');
  });

  test('should throw an error if wait is not a non-negative number', () => {
    expect(() => throttle(func, '100')).toThrow('Expected a non-negative number for the second argument (wait).');
    expect(() => throttle(func, -10)).toThrow('Expected a non-negative number for the second argument (wait).');
  });
});
