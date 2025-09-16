import { debounce } from './debounce-utils';

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

  test('should debounce a function', () => {
    debouncedFunc = debounce(func, 100);

    debouncedFunc();
    debouncedFunc();
    debouncedFunc();

    expect(func).not.toHaveBeenCalled();

    jest.advanceTimersByTime(100);

    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should pass arguments to the debounced function', () => {
    debouncedFunc = debounce(func, 100);

    debouncedFunc(1, 2);
    jest.advanceTimersByTime(100);

    expect(func).toHaveBeenCalledWith(1, 2);
  });

  test('should execute immediately with leading option', () => {
    debouncedFunc = debounce(func, 100, { leading: true, trailing: false });

    debouncedFunc();
    expect(func).toHaveBeenCalledTimes(1);

    debouncedFunc();
    jest.advanceTimersByTime(50);
    debouncedFunc();
    jest.advanceTimersByTime(100);

    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should not execute immediately with leading: false', () => {
    debouncedFunc = debounce(func, 100, { leading: false });

    debouncedFunc();
    expect(func).not.toHaveBeenCalled();

    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should cancel delayed function invocations', () => {
    debouncedFunc = debounce(func, 100);

    debouncedFunc();
    jest.advanceTimersByTime(50);
    debouncedFunc.cancel();
    jest.advanceTimersByTime(100);

    expect(func).not.toHaveBeenCalled();
  });

  test('should flush delayed function invocations', () => {
    debouncedFunc = debounce(func, 100);

    debouncedFunc();
    expect(func).not.toHaveBeenCalled();

    debouncedFunc.flush();
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should handle maxWait option - simplified', () => {
    debouncedFunc = debounce(func, 100, { maxWait: 200 });

    debouncedFunc(); // Call at 0ms
    jest.advanceTimersByTime(199); // Advance almost to maxWait
    debouncedFunc(); // Call at 199ms
    jest.advanceTimersByTime(1); // Advance to 200ms

    expect(func).toHaveBeenCalledTimes(1); // Should be called once due to maxWait

    jest.advanceTimersByTime(100); // Advance to 300ms for trailing edge
    expect(func).toHaveBeenCalledTimes(2); // Should be called again
  });

  test('should return the result of the last func invocation', () => {
    let callCount = 0;
    const funcWithReturn = jest.fn(() => ++callCount);
    debouncedFunc = debounce(funcWithReturn, 100);

    debouncedFunc();
    debouncedFunc();
    jest.advanceTimersByTime(100);

    expect(funcWithReturn).toHaveBeenCalledTimes(1);
    expect(funcWithReturn.mock.results[0].value).toBe(1);

    debouncedFunc();
    jest.advanceTimersByTime(100);

    expect(funcWithReturn).toHaveBeenCalledTimes(2);
    expect(funcWithReturn.mock.results[1].value).toBe(2);
  });

  test('should maintain context (this)', () => {
    debouncedFunc = debounce(function() { this.called = true; }, 100);
    const context = {};
    debouncedFunc.call(context);
    jest.advanceTimersByTime(100);
    expect(context.called).toBe(true);
  });
});
