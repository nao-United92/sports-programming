import { preventDefault, stopPropagation, stopEvent, debounce, throttle, addEvent, removeEvent, once } from './event-handler-utils.js';

describe('event-handler-utils', () => {
  let mockEvent;

  beforeEach(() => {
    mockEvent = {
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
    };
  });

  describe('preventDefault', () => {
    it('should call preventDefault on the event object', () => {
      preventDefault(mockEvent);
      expect(mockEvent.preventDefault).toHaveBeenCalledTimes(1);
    });
  });

  describe('stopPropagation', () => {
    it('should call stopPropagation on the event object', () => {
      stopPropagation(mockEvent);
      expect(mockEvent.stopPropagation).toHaveBeenCalledTimes(1);
    });
  });

  describe('stopEvent', () => {
    it('should call preventDefault and stopPropagation on the event object', () => {
      stopEvent(mockEvent);
      expect(mockEvent.preventDefault).toHaveBeenCalledTimes(1);
      expect(mockEvent.stopPropagation).toHaveBeenCalledTimes(1);
    });
  });

  describe('debounce', () => {
    jest.useFakeTimers();

    it('should debounce a function', () => {
      const func = jest.fn();
      const debouncedFunc = debounce(func, 100);

      debouncedFunc();
      debouncedFunc();
      debouncedFunc();

      jest.advanceTimersByTime(99);
      expect(func).not.toHaveBeenCalled();

      jest.advanceTimersByTime(1);
      expect(func).toHaveBeenCalledTimes(1);
    });

    it('should apply the correct context and arguments', () => {
      const func = jest.fn(function(a, b) { return this.value + a + b; });
      const debouncedFunc = debounce(func, 100);
      const context = { value: 10 };

      debouncedFunc.apply(context, [1, 2]);
      jest.runAllTimers();

      expect(func).toHaveBeenCalledWith(1, 2);
      expect(func.mock.results[0].value).toBe(13);
    });
  });

  describe('throttle', () => {
    jest.useFakeTimers();

    it('should throttle a function', () => {
      const func = jest.fn();
      const throttledFunc = throttle(func, 100);

      throttledFunc(); // Called immediately
      throttledFunc(); // Ignored
      throttledFunc(); // Ignored

      expect(func).toHaveBeenCalledTimes(1);

      jest.advanceTimersByTime(50);
      throttledFunc(); // Ignored
      expect(func).toHaveBeenCalledTimes(1);

      jest.advanceTimersByTime(50);
      throttledFunc(); // Called after throttle period
      expect(func).toHaveBeenCalledTimes(2);
    });

    it('should apply the correct context and arguments', () => {
      const func = jest.fn(function(a, b) { return this.value + a + b; });
      const throttledFunc = throttle(func, 100);
      const context = { value: 10 };

      throttledFunc.apply(context, [1, 2]);
      jest.runAllTimers();

      expect(func).toHaveBeenCalledWith(1, 2);
      expect(func.mock.results[0].value).toBe(13);
    });
  });

  describe('addEvent', () => {
    it('should add an event listener to an element', () => {
      const element = document.createElement('div');
      const handler = jest.fn();
      addEvent(element, 'click', handler);
      element.click();
      expect(handler).toHaveBeenCalledTimes(1);
    });

    it('should not add an event listener if element is null', () => {
      const handler = jest.fn();
      addEvent(null, 'click', handler);
      // No error should be thrown
    });
  });

  describe('removeEvent', () => {
    it('should remove an event listener from an element', () => {
      const element = document.createElement('div');
      const handler = jest.fn();
      element.addEventListener('click', handler);
      removeEvent(element, 'click', handler);
      element.click();
      expect(handler).not.toHaveBeenCalled();
    });

    it('should not remove an event listener if element is null', () => {
      const handler = jest.fn();
      removeEvent(null, 'click', handler);
      // No error should be thrown
    });
  });

  describe('once', () => {
    it('should ensure a function is called only once', () => {
      const mockFn = jest.fn(() => 'called');
      const onceFn = once(mockFn);

      let result1 = onceFn();
      let result2 = onceFn();

      expect(mockFn).toHaveBeenCalledTimes(1);
      expect(result1).toBe('called');
      expect(result2).toBe('called');
    });

    it('should pass arguments and context correctly on the first call', () => {
      const mockFn = jest.fn(function(a, b) { return this.value + a + b; });
      const onceFn = once(mockFn);
      const context = { value: 10 };

      const result = onceFn.apply(context, [1, 2]);

      expect(mockFn).toHaveBeenCalledWith(1, 2);
      expect(result).toBe(13);

      // Subsequent calls should not call the original function again
      onceFn.apply({ value: 100 }, [10, 20]);
      expect(mockFn).toHaveBeenCalledTimes(1);
    });
  });
});