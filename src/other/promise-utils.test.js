import { debounce } from './promise-utils.js';

jest.useFakeTimers();

describe('Promise Utilities', () => {
  describe('debounce', () => {
    let func;
    let debouncedFunc;

    beforeEach(() => {
      func = jest.fn();
    });

    it('should debounce a function', () => {
      debouncedFunc = debounce(func, 100);

      debouncedFunc();
      debouncedFunc();
      debouncedFunc();

      // At this point, func should not have been called
      expect(func).not.toHaveBeenCalled();

      // Fast-forward time by 100ms
      jest.advanceTimersByTime(100);

      // Now func should have been called once
      expect(func).toHaveBeenCalledTimes(1);
    });

    it('should call the function with the latest arguments', () => {
      debouncedFunc = debounce(func, 100);

      debouncedFunc(1);
      debouncedFunc(2);
      debouncedFunc(3);

      jest.advanceTimersByTime(100);

      expect(func).toHaveBeenCalledWith(3);
    });

    it('should support a `leading` option', () => {
      debouncedFunc = debounce(func, 100, { leading: true });

      debouncedFunc();
      expect(func).toHaveBeenCalledTimes(1);

      debouncedFunc();
      expect(func).toHaveBeenCalledTimes(1); // Still 1 because of the debounce timeout

      jest.advanceTimersByTime(100);
      debouncedFunc();
      expect(func).toHaveBeenCalledTimes(2);
    });
    
    it('should not trigger trailing call if leading was invoked', () => {
        debouncedFunc = debounce(func, 100, { leading: true, trailing: true });
    
        debouncedFunc(); // leading call
        expect(func).toHaveBeenCalledTimes(1);
    
        // Fast-forward time
        jest.advanceTimersByTime(100);
    
        // No trailing call should happen
        expect(func).toHaveBeenCalledTimes(1);
    });

    it('should support a `trailing` option (default)', () => {
      debouncedFunc = debounce(func, 100, { trailing: true });

      debouncedFunc();
      expect(func).not.toHaveBeenCalled();

      jest.advanceTimersByTime(100);
      expect(func).toHaveBeenCalledTimes(1);
    });

    it('should allow canceling the debounced function', () => {
      debouncedFunc = debounce(func, 100);

      debouncedFunc();
      debouncedFunc.cancel();

      jest.advanceTimersByTime(100);

      expect(func).not.toHaveBeenCalled();
    });

    it('should allow flushing the debounced function', () => {
      debouncedFunc = debounce(func, 100);

      debouncedFunc(1);
      expect(func).not.toHaveBeenCalled();

      const result = debouncedFunc.flush();
      expect(func).toHaveBeenCalledTimes(1);
      expect(func).toHaveBeenCalledWith(1);
      
      // Further calls to flush should do nothing if there's no pending execution
      debouncedFunc.flush();
      expect(func).toHaveBeenCalledTimes(1);
    });
    
    it('should throw an error if func is not a function', () => {
        expect(() => debounce('not a function', 100)).toThrow('Expected a function');
    });
  });
});