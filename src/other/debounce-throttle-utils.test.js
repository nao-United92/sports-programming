import { debounce, throttle } from './debounce-throttle-utils.js';

jest.useFakeTimers();

describe('debounce-throttle-utils', () => {
  describe('debounce', () => {
    let func;
    let debouncedFunc;

    beforeEach(() => {
      func = jest.fn();
      debouncedFunc = debounce(func, 500);
    });

    it('should not call the function immediately', () => {
      debouncedFunc();
      expect(func).not.toHaveBeenCalled();
    });

    it('should call the function after the wait time', () => {
      debouncedFunc();
      jest.advanceTimersByTime(500);
      expect(func).toHaveBeenCalledTimes(1);
    });

    it('should only call the function once for multiple rapid calls', () => {
      for (let i = 0; i < 5; i++) {
        debouncedFunc();
      }
      jest.advanceTimersByTime(500);
      expect(func).toHaveBeenCalledTimes(1);
    });

    it('should reset the timer on subsequent calls', () => {
      debouncedFunc();
      jest.advanceTimersByTime(250);
      debouncedFunc();
      jest.advanceTimersByTime(250);
      expect(func).not.toHaveBeenCalled();
      jest.advanceTimersByTime(250);
      expect(func).toHaveBeenCalledTimes(1);
    });
  });

  describe('throttle', () => {
    let func;
    let throttledFunc;

    beforeEach(() => {
      func = jest.fn();
      throttledFunc = throttle(func, 500);
    });

    it('should call the function immediately on the first call', () => {
      throttledFunc();
      expect(func).toHaveBeenCalledTimes(1);
    });

    it('should not call the function again within the limit', () => {
      throttledFunc();
      throttledFunc();
      throttledFunc();
      expect(func).toHaveBeenCalledTimes(1);
    });

    it('should call the function again after the limit has passed', () => {
      throttledFunc();
      expect(func).toHaveBeenCalledTimes(1);

      jest.advanceTimersByTime(500);
      throttledFunc();
      expect(func).toHaveBeenCalledTimes(2);
    });

    it('should call the function multiple times if calls are spaced out', () => {
      throttledFunc();
      jest.advanceTimersByTime(500);
      throttledFunc();
      jest.advanceTimersByTime(500);
      throttledFunc();
      expect(func).toHaveBeenCalledTimes(3);
    });
  });
});
