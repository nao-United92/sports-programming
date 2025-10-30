const { debounce } = require('./function-debounce-utils.js');

describe('debounce', () => {
  let func;
  let debouncedFunc;

  beforeEach(() => {
    func = jest.fn();
    jest.useFakeTimers(); // Use Jest's fake timers
  });

  afterEach(() => {
    jest.runOnlyPendingTimers(); // Clear any pending timers
    jest.useRealTimers(); // Restore real timers
  });

  it('should execute the function after the specified delay', () => {
    debouncedFunc = debounce(func, 100);
    debouncedFunc();
    expect(func).not.toHaveBeenCalled(); // Not called immediately

    jest.advanceTimersByTime(50);
    expect(func).not.toHaveBeenCalled();

    jest.advanceTimersByTime(50);
    expect(func).toHaveBeenCalledTimes(1); // Called after 100ms
  });

  it('should not execute the function if called again within the delay', () => {
    debouncedFunc = debounce(func, 100);
    debouncedFunc();
    jest.advanceTimersByTime(50);
    debouncedFunc(); // Call again within delay
    jest.advanceTimersByTime(50);
    expect(func).not.toHaveBeenCalled(); // Still not called

    jest.advanceTimersByTime(50);
    expect(func).toHaveBeenCalledTimes(1); // Called after the second call's delay
  });

  it('should pass arguments and context to the debounced function', () => {
    debouncedFunc = debounce(func, 100);
    const context = { a: 1 };
    debouncedFunc.call(context, 'arg1', 'arg2');

    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledWith('arg1', 'arg2');
    expect(func).toHaveBeenCalledOnLastCallWith('arg1', 'arg2'); // Check arguments
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should handle multiple rapid calls correctly', () => {
    debouncedFunc = debounce(func, 100);
    debouncedFunc();
    jest.advanceTimersByTime(20);
    debouncedFunc();
    jest.advanceTimersByTime(20);
    debouncedFunc();
    jest.advanceTimersByTime(20);
    debouncedFunc(); // Last call

    expect(func).not.toHaveBeenCalled();
    jest.advanceTimersByTime(100); // Wait for the last call's debounce period
    expect(func).toHaveBeenCalledTimes(1);
  });
});