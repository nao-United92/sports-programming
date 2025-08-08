import { debounce } from './debounce-utils';

describe('debounce', () => {
  let func;

  beforeEach(() => {
    jest.useFakeTimers();
    func = jest.fn();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  test('should debounce the function call', () => {
    const debouncedFunc = debounce(func, 100);

    debouncedFunc();
    debouncedFunc();
    debouncedFunc();

    expect(func).not.toHaveBeenCalled();

    jest.advanceTimersByTime(100);

    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should call the function with the latest arguments', () => {
    const debouncedFunc = debounce(func, 100);

    debouncedFunc(1);
    debouncedFunc(2);
    debouncedFunc(3);

    jest.advanceTimersByTime(100);

    expect(func).toHaveBeenCalledWith(3);
  });

  test('cancel should prevent the function from being called', () => {
    const debouncedFunc = debounce(func, 100);

    debouncedFunc();
    debouncedFunc.cancel();

    jest.advanceTimersByTime(100);

    expect(func).not.toHaveBeenCalled();
  });

  test('flush should immediately invoke the function', () => {
    const debouncedFunc = debounce(func, 100);

    debouncedFunc(1);
    debouncedFunc(2);
    debouncedFunc.flush();

    expect(func).toHaveBeenCalledTimes(1);
    expect(func).toHaveBeenCalledWith(2);

    jest.advanceTimersByTime(100);

    expect(func).toHaveBeenCalledTimes(1); // Should not be called again
  });

  test('should preserve the context (this binding)', () => {
    const debouncedFunc = debounce(function() {
      this.count = (this.count || 0) + 1;
    }, 100);

    const context = {};
    debouncedFunc.call(context);
    debouncedFunc.call(context);

    jest.advanceTimersByTime(100);

    expect(context.count).toBe(1);
  });
});
