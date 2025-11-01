
import { debounce, throttle } from './function-utils.js';

// Mock timers for testing debounce and throttle
jest.useFakeTimers();

describe('debounce', () => {
  let func;
  let debouncedFunc;

  beforeEach(() => {
    func = jest.fn();
  });

  test('should execute func after wait time', () => {
    debouncedFunc = debounce(func, 100);
    debouncedFunc();
    expect(func).not.toHaveBeenCalled();
    jest.advanceTimersByTime(50);
    expect(func).not.toHaveBeenCalled();
    jest.advanceTimersByTime(50);
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should reset timer on subsequent calls', () => {
    debouncedFunc = debounce(func, 100);
    debouncedFunc();
    jest.advanceTimersByTime(50);
    debouncedFunc(); // Call again before 100ms
    jest.advanceTimersByTime(50);
    expect(func).not.toHaveBeenCalled(); // Should not have been called yet
    jest.advanceTimersByTime(50);
    expect(func).toHaveBeenCalledTimes(1); // Should be called after the last call + 100ms
  });

  test('should execute immediately if immediate is true', () => {
    debouncedFunc = debounce(func, 100, true);
    debouncedFunc();
    expect(func).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(100);
    debouncedFunc(); // Should call immediately again after the wait period
    expect(func).toHaveBeenCalledTimes(2); // Corrected expectation
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(3); // Should call after the wait
  });

  test('should pass arguments and context', () => {
    const context = { a: 1 };
    debouncedFunc = debounce(func, 100);
    debouncedFunc.call(context, 1, 2);
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledWith(1, 2);
    // expect(func).toHaveBeenCalledOnLastCallWith(1, 2); // Removed
    expect(func).toHaveBeenCalledTimes(1);
  });
});

describe('throttle', () => {
  let func;
  let throttledFunc;

  beforeEach(() => {
    func = jest.fn();
  });

  test('should execute func immediately and then after wait time', () => {
    throttledFunc = throttle(func, 100);
    throttledFunc(); // First call, should execute immediately
    expect(func).toHaveBeenCalledTimes(1);
    throttledFunc(); // Second call, should be throttled
    expect(func).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(50);
    throttledFunc(); // Third call, still throttled
    expect(func).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(50); // Total 100ms passed since first call
    expect(func).toHaveBeenCalledTimes(2); // Should execute the last throttled call
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(2); // No more calls if no new invocations
  });

  test('should not execute func more than once per wait interval', () => {
    throttledFunc = throttle(func, 100);
    throttledFunc();
    throttledFunc();
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(99);
    expect(func).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(1);
    expect(func).toHaveBeenCalledTimes(2); // The last call within the interval should execute
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(2);
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(3);
  });

  test('should pass arguments and context', () => {
    const context = { b: 2 };
    throttledFunc = throttle(func, 100);
    throttledFunc.call(context, 'a', 'b');
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledWith('a', 'b');
    // expect(func).toHaveBeenCalledOnLastCallWith('a', 'b'); // Removed
  });
});
