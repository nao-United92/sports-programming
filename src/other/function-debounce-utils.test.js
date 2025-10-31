const { debounce } = require('./function-debounce-utils');

jest.useFakeTimers();

describe('debounce', () => {
  let func;
  let debouncedFunc;

  beforeEach(() => {
    func = jest.fn();
    debouncedFunc = debounce(func, 500);
  });

  it('should not call the function immediately', () => {
    debouncedFunc();
    expect(func).not.toHaveBeenCalled();
  });

  it('should call the function after the specified delay', () => {
    debouncedFunc();
    expect(func).not.toHaveBeenCalled();

    // Fast-forward time
    jest.advanceTimersByTime(500);

    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should only call the function once for multiple rapid calls', () => {
    for (let i = 0; i < 5; i++) {
      debouncedFunc();
    }

    // Fast-forward time
    jest.advanceTimersByTime(500);

    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should reset the timer on subsequent calls', () => {
    debouncedFunc();
    jest.advanceTimersByTime(250); // Halfway through the wait time
    debouncedFunc(); // Another call resets the timer

    jest.advanceTimersByTime(250); // Original timer would have fired now, but it was reset
    expect(func).not.toHaveBeenCalled();

    jest.advanceTimersByTime(250); // New timer fires now
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should pass arguments to the original function', () => {
    debouncedFunc(1, 'test');

    jest.advanceTimersByTime(500);

    expect(func).toHaveBeenCalledWith(1, 'test');
  });

  it('should use the latest arguments from the most recent call', () => {
    debouncedFunc(1);
    debouncedFunc(2);
    debouncedFunc(3);

    jest.advanceTimersByTime(500);

    expect(func).toHaveBeenCalledWith(3);
    expect(func).toHaveBeenCalledTimes(1);
  });
});
