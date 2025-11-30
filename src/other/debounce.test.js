const { debounce } = require('./debounce');

jest.useFakeTimers();

describe('debounce', () => {
  let func;

  beforeEach(() => {
    func = jest.fn();
  });

  it('should call the function only once after the specified delay', () => {
    const debouncedFunc = debounce(func, 500);

    for (let i = 0; i < 10; i++) {
      debouncedFunc();
    }

    // Function should not have been called yet
    expect(func).not.toHaveBeenCalled();

    // Fast-forward time by 500ms
    jest.advanceTimersByTime(500);

    // Now the function should have been called exactly once
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should pass the arguments of the very last call', () => {
    const debouncedFunc = debounce(func, 500);
    debouncedFunc(1, 'a');
    debouncedFunc(2, 'b');
    debouncedFunc(3, 'c');

    jest.advanceTimersByTime(500);

    expect(func).toHaveBeenCalledTimes(1);
    expect(func).toHaveBeenCalledWith(3, 'c');
  });

  it('should maintain the correct `this` context', () => {
    const obj = {
      func: func,
      debouncedMethod: debounce(function() { this.func(); }, 500),
    };

    obj.debouncedMethod();
    jest.advanceTimersByTime(500);

    expect(func).toHaveBeenCalledTimes(1);
    expect(func.mock.instances[0]).toBe(obj);
  });

  it('should reset the timeout if called again within the delay period', () => {
    const debouncedFunc = debounce(func, 500);

    debouncedFunc();
    jest.advanceTimersByTime(400);
    expect(func).not.toHaveBeenCalled();

    debouncedFunc(); // Call again, resetting the timer
    jest.advanceTimersByTime(400);
    expect(func).not.toHaveBeenCalled();

    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should allow cancelling the delayed call', () => {
    const debouncedFunc = debounce(func, 500);
    debouncedFunc();
    
    debouncedFunc.cancel();

    jest.advanceTimersByTime(500);
    expect(func).not.toHaveBeenCalled();
  });

  it('should allow flushing to immediately invoke the function', () => {
    const debouncedFunc = debounce(func, 500);
    debouncedFunc(1, 2);

    const result = debouncedFunc.flush();

    expect(func).toHaveBeenCalledTimes(1);
    expect(func).toHaveBeenCalledWith(1, 2);
    // Check if flush returns the result of the function call
    func.mockReturnValue('flushed');
    const debouncedFunc2 = debounce(func, 500);
    debouncedFunc2();
    const flushResult = debouncedFunc2.flush();
    expect(flushResult).toBe('flushed');
  });
});
