import { throttle } from './throttle-utils.js';

jest.useFakeTimers();

describe('throttle', () => {
  let func;
  let throttledFunc;

  beforeEach(() => {
    func = jest.fn();
    throttledFunc = throttle(func, 1000);
  });

  test('should call the function immediately on the first call', () => {
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should not call the function again within the wait time', () => {
    throttledFunc(); // First call
    throttledFunc(); // Second call within 1000ms
    throttledFunc(); // Third call

    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should call the function again after the wait time has passed', () => {
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);

    // Fast-forward time
    jest.advanceTimersByTime(1000);

    throttledFunc();
    expect(func).toHaveBeenCalledTimes(2);
  });

  test('should call the function with the correct arguments', () => {
    throttledFunc(1, 'a');
    expect(func).toHaveBeenCalledWith(1, 'a');

    jest.advanceTimersByTime(1000);

    throttledFunc(2, 'b');
    expect(func).toHaveBeenCalledWith(2, 'b');
  });

  test('multiple calls within the throttle period result in one call', () => {
    // Call 5 times in a row
    for (let i = 0; i < 5; i++) {
      throttledFunc(i);
    }
    expect(func).toHaveBeenCalledTimes(1);
    expect(func).toHaveBeenCalledWith(0); // Only the first call goes through

    // Wait for throttle period to end
    jest.advanceTimersByTime(1000);

    // Call again
    throttledFunc(5);
    expect(func).toHaveBeenCalledTimes(2);
    expect(func).toHaveBeenCalledWith(5);
  });
});