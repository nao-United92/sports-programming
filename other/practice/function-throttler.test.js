import { throttle } from './function-throttler.js';

jest.useFakeTimers();

describe('throttle', () => {
  let func;
  let throttledFunc;

  beforeEach(() => {
    func = jest.fn();
    throttledFunc = throttle(func, 500);
  });

  test('should execute the function immediately for the first call', () => {
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should not execute the function again within the limit', () => {
    throttledFunc(); // Executes immediately
    throttledFunc(); // Should be throttled
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(200);
    throttledFunc(); // Still throttled
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should execute the function again after the limit has passed', () => {
    throttledFunc(); // Executes immediately
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(500);
    throttledFunc(); // Executes again
    expect(func).toHaveBeenCalledTimes(2);
  });

  test('should execute the trailing call', () => {
    throttledFunc(); // Executes immediately
    throttledFunc(); // trailing call is queued

    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(500);
    expect(func).toHaveBeenCalledTimes(2);
  });
  
  test('should pass arguments to the throttled function', () => {
    throttledFunc(1, 'test');
    expect(func).toHaveBeenCalledWith(1, 'test');
    
    // a second call is throttled
    throttledFunc(2, 'test2');
    expect(func).not.toHaveBeenCalledWith(2, 'test2');
    
    jest.advanceTimersByTime(500);
    expect(func).toHaveBeenCalledTimes(2);
    expect(func).toHaveBeenLastCalledWith(2, 'test2');
  });
});
