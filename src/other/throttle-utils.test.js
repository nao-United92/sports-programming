
import { throttle } from './throttle-utils.js';

jest.useFakeTimers();

describe('throttle', () => {
  let func;
  let throttledFunc;

  beforeEach(() => {
    func = jest.fn();
  });

  test('should call the function immediately', () => {
    throttledFunc = throttle(func, 500);
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should not call the function again within the limit', () => {
    throttledFunc = throttle(func, 500);
    throttledFunc(); // Called
    throttledFunc(); // Not called
    throttledFunc(); // Not called
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should call the function again after the limit has passed', () => {
    throttledFunc = throttle(func, 500);

    // First call
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);

    // Advance time by 250ms, should not be able to call again
    jest.advanceTimersByTime(250);
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);

    // Advance time by another 250ms (total 500ms), should be able to call again
    jest.advanceTimersByTime(250);
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(2);
  });

  test('should pass arguments to the original function', () => {
    throttledFunc = throttle(func, 500);
    throttledFunc(1, 'test');
    expect(func).toHaveBeenCalledWith(1, 'test');
  });
});
