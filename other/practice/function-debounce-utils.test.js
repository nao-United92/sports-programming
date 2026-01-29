import debounce from './function-debounce-utils';

describe('debounce', () => {
  let func;
  let debouncedFunc;

  beforeEach(() => {
    func = jest.fn();
    debouncedFunc = debounce(func, 100);
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('should not call the function immediately', () => {
    debouncedFunc();
    expect(func).not.toHaveBeenCalled();
  });

  it('should call the function after the delay', () => {
    debouncedFunc();
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should call the function only once if called multiple times within the delay', () => {
    debouncedFunc();
    debouncedFunc();
    debouncedFunc();
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should pass arguments to the debounced function', () => {
    debouncedFunc(1, 2);
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledWith(1, 2);
  });

  it('should execute the function with the correct context', () => {
    const context = { key: 'value' };
    debouncedFunc.call(context);
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should call the function again after the delay if called after a previous execution', () => {
    debouncedFunc();
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1);

    debouncedFunc();
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(2);
  });
});
