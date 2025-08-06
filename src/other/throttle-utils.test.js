import { throttle } from './throttle-utils.js';

jest.useFakeTimers();

describe('throttle', () => {
  let func;

  beforeEach(() => {
    func = jest.fn();
  });

  test('should call the function immediately on the first call', () => {
    const throttledFunc = throttle(func, 100);
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should not call the function again within the wait time', () => {
    const throttledFunc = throttle(func, 100);
    throttledFunc();
    throttledFunc();
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should call the function again after the wait time', () => {
    const throttledFunc = throttle(func, 100);
    throttledFunc(); // Called immediately
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(50);
    throttledFunc(); // Throttled
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(50); // Total 100ms passed
    throttledFunc(); // Called again because wait time has passed
    expect(func).toHaveBeenCalledTimes(2);
  });

  test('should call the trailing invocation with the last arguments', () => {
    const throttledFunc = throttle(func, 100);
    throttledFunc(1);
    expect(func).toHaveBeenCalledWith(1);
    
    throttledFunc(2);
    throttledFunc(3);

    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(2);
    expect(func).toHaveBeenCalledWith(3);
  });

  test('should handle multiple separate calls correctly', () => {
    const throttledFunc = throttle(func, 100);
    
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);
    
    jest.advanceTimersByTime(100);
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(2);

    jest.advanceTimersByTime(100);
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(3);
  });
});
