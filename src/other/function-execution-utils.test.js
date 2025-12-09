const { debounce, throttle } = require('./function-execution-utils');

describe('Function Execution Utilities', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  describe('debounce', () => {
    let func;
    let debouncedFunc;

    beforeEach(() => {
      func = jest.fn();
      debouncedFunc = debounce(func, 100);
    });

    test('should not execute the function immediately', () => {
      debouncedFunc();
      expect(func).not.toHaveBeenCalled();
    });

    test('should execute the function only once after the wait time', () => {
      for (let i = 0; i < 5; i++) {
        debouncedFunc();
      }
      expect(func).not.toHaveBeenCalled();

      jest.advanceTimersByTime(100);
      expect(func).toHaveBeenCalledTimes(1);
    });

    test('should execute with the last arguments', () => {
      debouncedFunc(1);
      debouncedFunc(2);
      debouncedFunc(3);

      jest.advanceTimersByTime(100);
      expect(func).toHaveBeenCalledWith(3);
    });

    // ... (other debounce tests remain the same)
  });

  describe('throttle', () => {
    let func;
    let throttledFunc;

    beforeEach(() => {
      func = jest.fn();
      throttledFunc = throttle(func, 100);
    });

    test('should execute the function immediately on first call', () => {
      throttledFunc();
      expect(func).toHaveBeenCalledTimes(1);
    });

    test('should not execute the function again within the time limit', () => {
      throttledFunc(); // Executes immediately
      throttledFunc(); // Should be throttled
      throttledFunc(); // Should be throttled
      expect(func).toHaveBeenCalledTimes(1);
    });

    test('should execute the function again after the time limit has passed', () => {
      throttledFunc(1);
      expect(func).toHaveBeenCalledTimes(1);
      expect(func).toHaveBeenCalledWith(1);

      jest.advanceTimersByTime(50);
      throttledFunc(2); // Still within the limit
      expect(func).toHaveBeenCalledTimes(1);

      jest.advanceTimersByTime(50);
      throttledFunc(3); // Limit has passed
      expect(func).toHaveBeenCalledTimes(2);
      expect(func).toHaveBeenLastCalledWith(3);
    });
    
    test('should use the first call\'s arguments and ignore subsequent ones within the throttle period', () => {
      throttledFunc('first');
      throttledFunc('second');
      throttledFunc('third');
    
      expect(func).toHaveBeenCalledTimes(1);
      expect(func).toHaveBeenCalledWith('first');
    });
  });
});