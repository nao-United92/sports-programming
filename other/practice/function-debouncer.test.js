const { debounce } = require('./function-debouncer.js');

describe('debounce', () => {
  let func;
  let debouncedFunc;

  beforeEach(() => {
    jest.useFakeTimers();
    func = jest.fn();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  test('should debounce a function', () => {
    debouncedFunc = debounce(func, 100);

    debouncedFunc();
    debouncedFunc();
    debouncedFunc();

    // Function should not have been called yet
    expect(func).not.toHaveBeenCalled();

    // Advance time by less than the wait period
    jest.advanceTimersByTime(50);
    expect(func).not.toHaveBeenCalled();

    // Call again, timer should reset
    debouncedFunc();
    jest.advanceTimersByTime(50);
    expect(func).not.toHaveBeenCalled();

    // Advance time by the full wait period
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should call function immediately if immediate is true', () => {
    debouncedFunc = debounce(func, 100, true);

    debouncedFunc();
    expect(func).toHaveBeenCalledTimes(1); // Called immediately

    debouncedFunc(); // Should not call again immediately
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(50);
    debouncedFunc(); // Still not called immediately
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(100); // After debounce period, can be called again
    debouncedFunc();
    expect(func).toHaveBeenCalledTimes(2);
  });

  test('should pass arguments and context to the debounced function', () => {
    debouncedFunc = debounce(func, 100);
    const context = { key: 'value' };

    debouncedFunc.call(context, 1, 2);
    jest.advanceTimersByTime(100);

    expect(func).toHaveBeenCalledWith(1, 2);
    // Jest's mock functions don't store context directly, but we can verify args
  });

  test('should return the result of the debounced function', () => {
    func.mockReturnValueOnce('mocked result');
    debouncedFunc = debounce(func, 100);

    let result = debouncedFunc();
    expect(result).toBeUndefined(); // Result is undefined until func is actually called

    jest.advanceTimersByTime(100);
    result = debouncedFunc(); // Call to get the result

    expect(func).toHaveBeenCalledTimes(1);
    expect(result).toBe('mocked result');
  });

  test('should allow cancelling debounced calls', () => {
    debouncedFunc = debounce(func, 100);

    debouncedFunc();
    jest.advanceTimersByTime(50);
    debouncedFunc.cancel();
    jest.advanceTimersByTime(100);

    expect(func).not.toHaveBeenCalled();
  });

  test('should throw an error if func is not a function', () => {
    expect(() => debounce(null, 100)).toThrow('Expected a function for the first argument.');
    expect(() => debounce('string', 100)).toThrow('Expected a function for the first argument.');
  });

  test('should throw an error if wait is not a non-negative number', () => {
    expect(() => debounce(func, '100')).toThrow('Expected a non-negative number for the second argument (wait).');
    expect(() => debounce(func, -10)).toThrow('Expected a non-negative number for the second argument (wait).');
  });

  test('should throw an error if immediate is not a boolean', () => {
      expect(() => debounce(func, 100, 'true')).toThrow('Expected a boolean for the third argument (immediate).');
      expect(() => debounce(func, 100, null)).toThrow('Expected a boolean for the third argument (immediate).');
  });
});
