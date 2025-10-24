import { debounce } from './function-debounce-utils';

describe('debounce', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  test('should debounce a function call', () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func, 100);

    debouncedFunc();
    debouncedFunc();
    debouncedFunc();

    // At this point, func should not have been called yet
    expect(func).not.toHaveBeenCalled();

    jest.advanceTimersByTime(99);
    expect(func).not.toHaveBeenCalled();

    jest.advanceTimersByTime(1);
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should call the function with the last arguments', () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func, 100);

    debouncedFunc(1);
    debouncedFunc(2);
    debouncedFunc(3);

    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledWith(3);
  });

  test('should maintain the correct `this` context', () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func, 100);
    const context = { key: 'value' };

    debouncedFunc.call(context);

    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledOnLastCallWith(); // Check arguments first
    expect(func.mock.contexts[0]).toBe(context); // Then check context
  });

  test('should call the function again after the wait period if invoked again', () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func, 100);

    debouncedFunc();
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1);

    debouncedFunc();
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(2);
  });

  test('should not call the function if not enough time has passed', () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func, 100);

    debouncedFunc();
    jest.advanceTimersByTime(50);
    debouncedFunc();
    jest.advanceTimersByTime(50);
    debouncedFunc();
    jest.advanceTimersByTime(50);

    expect(func).not.toHaveBeenCalled();

    jest.advanceTimersByTime(50);
    expect(func).toHaveBeenCalledTimes(1);
  });
});