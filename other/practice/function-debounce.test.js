const { debounce } = require('./function-debounce');

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

  it('should debounce a function with default trailing behavior', () => {
    debouncedFunc = debounce(func, 100);

    debouncedFunc();
    debouncedFunc();
    debouncedFunc();

    // Function should not have been called yet
    expect(func).not.toHaveBeenCalled();

    // Advance timers by 100ms
    jest.advanceTimersByTime(100);

    // Now it should be called once
    expect(func).toHaveBeenCalledTimes(1);

    debouncedFunc();
    jest.advanceTimersByTime(50);
    debouncedFunc();
    jest.advanceTimersByTime(50); // total 100ms from last call
    expect(func).toHaveBeenCalledTimes(1); // Still not called again

    jest.advanceTimersByTime(50); // total 150ms from last call, 100ms from the very last debouncedFunc()
    expect(func).toHaveBeenCalledTimes(2); // Now called again
  });

  it('should call immediately with leading option', () => {
    debouncedFunc = debounce(func, 100, { leading: true, trailing: false });

    debouncedFunc(1);
    expect(func).toHaveBeenCalledWith(1);
    expect(func).toHaveBeenCalledTimes(1);

    debouncedFunc(2); // Should not call immediately again
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(100);
    debouncedFunc(3); // Should call immediately after wait period
    expect(func).toHaveBeenCalledWith(3);
    expect(func).toHaveBeenCalledTimes(2);
  });

  it('should cancel delayed invocations', () => {
    debouncedFunc = debounce(func, 100);

    debouncedFunc();
    jest.advanceTimersByTime(50);
    debouncedFunc.cancel();
    jest.advanceTimersByTime(100);

    expect(func).not.toHaveBeenCalled();
  });

  it('should flush delayed invocations', () => {
    debouncedFunc = debounce(func, 100);

    debouncedFunc(1);
    jest.advanceTimersByTime(50);
    debouncedFunc(2);
    debouncedFunc.flush();

    expect(func).toHaveBeenCalledTimes(1);
    expect(func).toHaveBeenCalledWith(2);
  });
  
  it('should pass arguments and context correctly', () => {
    debouncedFunc = debounce(func, 100);
    const context = { key: 'value' };

    debouncedFunc.call(context, 'arg1', 'arg2');
    jest.advanceTimersByTime(100);

    expect(func).toHaveBeenCalledTimes(1);
    expect(func).toHaveBeenCalledWith('arg1', 'arg2');
    expect(func).toHaveBeenLastCalledWith('arg1', 'arg2');
  });
});
