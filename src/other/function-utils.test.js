// src/other/function-utils.test.js

const { debounce } = require('./function-utils');

// Mock setTimeout and clearTimeout for testing debounce
jest.useFakeTimers();

describe('Function Utils', () => {
  describe('debounce', () => {
    let func;
    let debouncedFunc;

    beforeEach(() => {
      func = jest.fn();
    });

    test('should debounce a function call', () => {
      debouncedFunc = debounce(func, 100);

      debouncedFunc();
      debouncedFunc();
      debouncedFunc();

      // Function should not have been called yet
      expect(func).not.toHaveBeenCalled();

      // Fast-forward time
      jest.advanceTimersByTime(100);

      // Function should have been called once
      expect(func).toHaveBeenCalledTimes(1);
    });

    test('should pass the last arguments to the debounced function', () => {
      debouncedFunc = debounce(func, 100);

      debouncedFunc(1);
      debouncedFunc(2, 3);
      debouncedFunc(4, 5, 6);

      jest.advanceTimersByTime(100);

      expect(func).toHaveBeenCalledWith(4, 5, 6);
    });

    test('should invoke immediately with leading option', () => {
      debouncedFunc = debounce(func, 100, { leading: true, trailing: false });

      debouncedFunc(1);
      expect(func).toHaveBeenCalledWith(1); // Called immediately

      debouncedFunc(2);
      debouncedFunc(3);
      expect(func).toHaveBeenCalledTimes(1); // Not called again immediately

      jest.advanceTimersByTime(100);
      expect(func).toHaveBeenCalledTimes(1); // No trailing call
    });

    test('should invoke on trailing edge by default', () => {
      debouncedFunc = debounce(func, 100); // trailing: true by default

      debouncedFunc(1);
      debouncedFunc(2);
      jest.advanceTimersByTime(50);
      expect(func).not.toHaveBeenCalled();
      jest.advanceTimersByTime(50);
      expect(func).toHaveBeenCalledTimes(1);
      expect(func).toHaveBeenCalledWith(2);
    });

    test('should cancel delayed invocations', () => {
      debouncedFunc = debounce(func, 100);

      debouncedFunc();
      jest.advanceTimersByTime(50);
      debouncedFunc.cancel();
      jest.advanceTimersByTime(100);

      expect(func).not.toHaveBeenCalled();
    });

    test('should flush delayed invocations immediately', () => {
      debouncedFunc = debounce(func, 100);

      debouncedFunc(1);
      debouncedFunc(2);
      expect(func).not.toHaveBeenCalled();

      debouncedFunc.flush();
      expect(func).toHaveBeenCalledTimes(1);
      expect(func).toHaveBeenCalledWith(2);

      jest.advanceTimersByTime(100);
      expect(func).toHaveBeenCalledTimes(1); // No further calls
    });

    test('should handle multiple calls with different arguments correctly', () => {
      debouncedFunc = debounce(func, 100);

      debouncedFunc('a');
      jest.advanceTimersByTime(50);
      debouncedFunc('b');
      jest.advanceTimersByTime(50);
      debouncedFunc('c');
      jest.advanceTimersByTime(100);

      expect(func).toHaveBeenCalledTimes(1);
      expect(func).toHaveBeenCalledWith('c');
    });

    test('should reset timer on subsequent calls', () => {
      debouncedFunc = debounce(func, 100);

      debouncedFunc(1);
      jest.advanceTimersByTime(50);
      debouncedFunc(2); // This should reset the timer
      jest.advanceTimersByTime(50);
      expect(func).not.toHaveBeenCalled();
      jest.advanceTimersByTime(50); // Total 150ms, but last call was 100ms ago
      expect(func).toHaveBeenCalledTimes(1);
      expect(func).toHaveBeenCalledWith(2);
    });
  });
});
