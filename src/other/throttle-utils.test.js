import { throttle } from './throttle-utils.js';

jest.useFakeTimers();

describe('throttle', () => {
  let func;
  let throttledFunc;

  beforeEach(() => {
    func = jest.fn();
  });

  test('should call the function immediately', () => {
    throttledFunc = throttle(func, 1000);
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should not call the function again within the limit', () => {
    throttledFunc = throttle(func, 1000);
    throttledFunc();
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should call the function again after the limit has passed', () => {
    throttledFunc = throttle(func, 1000);
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(1000);
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(2);
  });

  test('should call the function with the latest arguments', () => {
    throttledFunc = throttle(func, 1000);
    throttledFunc(1);
    jest.advanceTimersByTime(1000);
    throttledFunc(2);

    expect(func).toHaveBeenCalledWith(1);
    expect(func).toHaveBeenCalledWith(2);
  });

  test('queued call should execute after the limit', () => {
    throttledFunc = throttle(func, 1000);
    throttledFunc(1); // Called immediately
    expect(func).toHaveBeenCalledTimes(1);

    throttledFunc(2); // Queued
    jest.advanceTimersByTime(500);
    expect(func).toHaveBeenCalledTimes(1); // Still not called

    jest.advanceTimersByTime(500);
    expect(func).toHaveBeenCalledTimes(2); // Queued call executed
    expect(func).toHaveBeenCalledWith(2);
  });
});
