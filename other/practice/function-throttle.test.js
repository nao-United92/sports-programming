import { throttle } from './function-throttle.js';

jest.useFakeTimers();

describe('throttle', () => {
  test('should throttle a function', () => {
    const func = jest.fn();
    const throttledFunc = throttle(func, 100);

    throttledFunc();
    throttledFunc();
    throttledFunc();

    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(100);
    throttledFunc();

    expect(func).toHaveBeenCalledTimes(2);
  });
  
  test('should pass arguments', () => {
      const func = jest.fn();
      const throttledFunc = throttle(func, 100);
      
      throttledFunc('hello');
      expect(func).toHaveBeenCalledWith('hello');
  });
});
