const { debounce, throttle, once } = require('./function-enhancements.js');

jest.useFakeTimers();

describe('Function Enhancements', () => {
  describe('debounce', () => {
    let func;
    let debouncedFunc;

    beforeEach(() => {
      func = jest.fn();
      debouncedFunc = debounce(func, 1000);
    });

    test('should call the function after the wait time', () => {
      debouncedFunc();
      expect(func).not.toHaveBeenCalled();
      jest.advanceTimersByTime(1000);
      expect(func).toHaveBeenCalledTimes(1);
    });

    test('should not call the function if called again within the wait time', () => {
      debouncedFunc();
      jest.advanceTimersByTime(500);
      debouncedFunc();
      jest.advanceTimersByTime(500);
      expect(func).not.toHaveBeenCalled();
      jest.advanceTimersByTime(500);
      expect(func).toHaveBeenCalledTimes(1);
    });
  });

  describe('throttle', () => {
    let func;
    let throttledFunc;

    beforeEach(() => {
      func = jest.fn();
      throttledFunc = throttle(func, 1000);
    });

    test('should call the function immediately', () => {
      throttledFunc();
      expect(func).toHaveBeenCalledTimes(1);
    });

    test('should not call the function again within the wait time', () => {
      throttledFunc();
      throttledFunc();
      throttledFunc();
      expect(func).toHaveBeenCalledTimes(1);
    });

    test('should call the function again after the wait time', () => {
      throttledFunc();
      expect(func).toHaveBeenCalledTimes(1);
      jest.advanceTimersByTime(1000);
      throttledFunc();
      expect(func).toHaveBeenCalledTimes(2);
    });
  });

  describe('once', () => {
    test('should call the original function only once', () => {
      const func = jest.fn();
      const onceFunc = once(func);

      onceFunc();
      onceFunc();
      onceFunc();

      expect(func).toHaveBeenCalledTimes(1);
    });

    test('should return the value of the first call', () => {
      let i = 0;
      const func = () => ++i;
      const onceFunc = once(func);

      const result1 = onceFunc();
      const result2 = onceFunc();
      const result3 = onceFunc();

      expect(result1).toBe(1);
      expect(result2).toBe(1);
      expect(result3).toBe(1);
    });
  });
});
