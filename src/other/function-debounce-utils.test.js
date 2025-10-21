const { debounce } = require('./function-debounce-utils');

describe('debounce', () => {
  let func;
  let debouncedFunc;

  beforeEach(() => {
    func = jest.fn();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('should execute the function after the specified wait time', () => {
    debouncedFunc = debounce(func, 100);
    debouncedFunc();
    expect(func).not.toHaveBeenCalled();
    jest.advanceTimersByTime(50);
    expect(func).not.toHaveBeenCalled();
    jest.advanceTimersByTime(50);
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should not execute the function if called again within the wait time', () => {
    debouncedFunc = debounce(func, 100);
    debouncedFunc();
    jest.advanceTimersByTime(50);
    debouncedFunc();
    jest.advanceTimersByTime(60);
    expect(func).not.toHaveBeenCalled();
    jest.advanceTimersByTime(40);
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should execute immediately if immediate is true', () => {
    debouncedFunc = debounce(func, 100, true);
    debouncedFunc();
    expect(func).toHaveBeenCalledTimes(1);
    debouncedFunc();
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should execute again after wait time if immediate is true and called again after wait time', () => {
    debouncedFunc = debounce(func, 100, true);
    debouncedFunc();
    expect(func).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(100);
    debouncedFunc();
    expect(func).toHaveBeenCalledTimes(2);
  });

  it('should pass arguments and context correctly', () => {
    debouncedFunc = debounce(func, 100);
    const context = { a: 1 };
    debouncedFunc.call(context, 1, 2);
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledWith(1, 2);
    expect(func).toHaveBeenCalledOnLastCallWith(1, 2);
    expect(func).toHaveBeenCalledTimes(1);
  });
});
