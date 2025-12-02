import { throttle } from './throttle-utils';

jest.useFakeTimers();

describe('throttle', () => {
  let func;

  beforeEach(() => {
    func = jest.fn();
  });

  test('should call the function immediately on the first call', () => {
    const throttledFunc = throttle(func, 1000);
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should not call the function again within the wait time', () => {
    const throttledFunc = throttle(func, 1000);
    throttledFunc(); // Called
    throttledFunc(); // Ignored
    throttledFunc(); // Ignored
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should call the function again after the wait time has passed', () => {
    const throttledFunc = throttle(func, 1000);
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(1000);
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(2);
  });

  test('should pass arguments and `this` context correctly', () => {
    const throttledFunc = throttle(func, 1000);
    const context = { name: 'test' };
    
    throttledFunc.call(context, 1, 'a');
    
    expect(func).toHaveBeenCalledWith(1, 'a');
    expect(func.mock.instances[0]).toBe(context);
  });

  test('should execute the last call made during the cooldown period (trailing call)', () => {
    const throttledFunc = throttle(func, 1000);
    
    // First call, executes immediately
    throttledFunc(1);
    expect(func).toHaveBeenCalledTimes(1);
    expect(func).toHaveBeenCalledWith(1);

    // These calls are within the cooldown period
    throttledFunc(2);
    throttledFunc(3);

    // Fast-forward time to just before the end of the cooldown
    jest.advanceTimersByTime(999);
    expect(func).toHaveBeenCalledTimes(1); // No new calls yet

    // Fast-forward past the cooldown
    jest.advanceTimersByTime(1);
    
    // The trailing call with the latest arguments (3) should have executed
    expect(func).toHaveBeenCalledTimes(2);
    expect(func).toHaveBeenCalledWith(3);

    // Another call right after should be ignored
    throttledFunc(4);
    expect(func).toHaveBeenCalledTimes(2);
  });
});