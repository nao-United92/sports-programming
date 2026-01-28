const { throttle } = require('./function-throttle');

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

  it('should call the function immediately and then after the wait period', () => {
    throttledFunc = throttle(func, 100);

    throttledFunc(); // Called immediately due to leading: true default
    expect(func).toHaveBeenCalledTimes(1);

    throttledFunc(); // Should not call again within 100ms
    throttledFunc(); // Should not call again within 100ms
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(50);
    throttledFunc(); // Still within 100ms, should not call
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(50); // 100ms passed since first call
    expect(func).toHaveBeenCalledTimes(2); // Trailing call should happen
  });

  it('should not call on leading edge if leading option is false', () => {
    throttledFunc = throttle(func, 100, { leading: false });

    throttledFunc();
    expect(func).not.toHaveBeenCalled(); // Not called immediately

    jest.advanceTimersByTime(50);
    throttledFunc(); // Still not called

    jest.advanceTimersByTime(50); // 100ms passed from first call
    expect(func).toHaveBeenCalledTimes(1); // Trailing call should happen
  });

  it('should not call on trailing edge if trailing option is false', () => {
    throttledFunc = throttle(func, 100, { trailing: false });

    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1); // Leading call

    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1); // No trailing call
  });

  it('should cancel delayed invocations', () => {
    throttledFunc = throttle(func, 100);

    throttledFunc(); // Leading call
    expect(func).toHaveBeenCalledTimes(1);

    throttledFunc(); // Schedule trailing call
    jest.advanceTimersByTime(50);
    throttledFunc.cancel();
    jest.advanceTimersByTime(100);

    expect(func).toHaveBeenCalledTimes(1); // Trailing call should be canceled
  });

  it('should flush delayed invocations', () => {
    throttledFunc = throttle(func, 100, { leading: false });

    throttledFunc(1);
    expect(func).not.toHaveBeenCalled();

    jest.advanceTimersByTime(50);
    throttledFunc(2);
    throttledFunc.flush();

    expect(func).toHaveBeenCalledTimes(1);
    expect(func).toHaveBeenCalledWith(2);
  });
  
  it('should pass arguments and context correctly', () => {
    throttledFunc = throttle(func, 100);
    const context = { id: 1 };

    throttledFunc.call(context, 'arg1');
    jest.advanceTimersByTime(100);

    expect(func).toHaveBeenCalledTimes(2); // Leading + Trailing
    expect(func).toHaveBeenNthCalledWith(1, 'arg1');
    expect(func).toHaveBeenNthCalledWith(2, 'arg1');
  });
});
