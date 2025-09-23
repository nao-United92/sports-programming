import { debounce } from './function-debounce-advanced-utils.js';

describe('Function Debounce Advanced Utilities', () => {
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

  test('should debounce a function call', () => {
    debouncedFunc = debounce(func, 100);

    debouncedFunc();
    debouncedFunc();
    debouncedFunc();

    expect(func).not.toHaveBeenCalled();

    jest.advanceTimersByTime(99);
    expect(func).not.toHaveBeenCalled();

    jest.advanceTimersByTime(1);
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should call immediately if immediate is true', () => {
    debouncedFunc = debounce(func, 100, true);

    debouncedFunc();
    expect(func).toHaveBeenCalledTimes(1);

    debouncedFunc();
    debouncedFunc();
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(100);
    debouncedFunc();
    expect(func).toHaveBeenCalledTimes(2);
  });

  test('should pass arguments and context correctly', () => {
    debouncedFunc = debounce(func, 100);
    const context = { a: 1 };

    debouncedFunc.call(context, 1, 2);
    jest.advanceTimersByTime(100);

    expect(func).toHaveBeenCalledWith(1, 2);
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should cancel a debounced function call', () => {
    debouncedFunc = debounce(func, 100);

    debouncedFunc();
    jest.advanceTimersByTime(50);
    debouncedFunc.cancel();
    jest.advanceTimersByTime(50);

    expect(func).not.toHaveBeenCalled();
  });

  test('should flush a debounced function call immediately', () => {
    debouncedFunc = debounce(func, 100);

    debouncedFunc();
    expect(func).not.toHaveBeenCalled();

    debouncedFunc.flush();
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should return the result of the last function call when flushed', () => {
    let counter = 0;
    const increment = () => ++counter;
    debouncedFunc = debounce(increment, 100);

    debouncedFunc();
    debouncedFunc();
    jest.advanceTimersByTime(100); // func called, counter becomes 1

    debouncedFunc(); // Schedule another call
    const finalResult = debouncedFunc.flush(); // Flush the pending call, counter becomes 2

    expect(finalResult).toBe(2);
  });

  test('should return the result of the immediate function call when immediate is true', () => {
    let counter = 0;
    const increment = () => ++counter;
    debouncedFunc = debounce(increment, 100, true);

    let result1 = debouncedFunc();
    expect(result1).toBe(1);

    let result2 = debouncedFunc();
    expect(result2).toBe(1);

    jest.advanceTimersByTime(100);
    let result3 = debouncedFunc();
    expect(result3).toBe(2);
  });
});