import { throttle } from './throttle-utils.js';

jest.useFakeTimers();

describe('throttle', () => {
  test('should call the function only once within the delay', () => {
    const func = jest.fn();
    const throttledFunc = throttle(func, 1000);

    throttledFunc();
    throttledFunc();
    throttledFunc();

    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(1000);

    throttledFunc();

    expect(func).toHaveBeenCalledTimes(2);
  });
});