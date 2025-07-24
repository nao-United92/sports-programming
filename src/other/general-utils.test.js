import { uuid, delay, isNil, noop, isEmpty, throttle, debounce } from './general-utils.js';

describe('general-utils', () => {
  describe('uuid', () => {
    test('should generate a valid UUID v4', () => {
      const id = uuid();
      // UUID v4 regex pattern
      const uuidV4Pattern = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
      expect(id).toMatch(uuidV4Pattern);
    });

    test('should generate unique UUIDs', () => {
      const id1 = uuid();
      const id2 = uuid();
      expect(id1).not.toBe(id2);
    });
  });

  describe('delay', () => {
    jest.useFakeTimers();

    test('should delay execution for the specified time', async () => {
      const mockFunction = jest.fn();
      const promise = delay(1000).then(mockFunction);

      expect(mockFunction).not.toHaveBeenCalled();

      jest.advanceTimersByTime(500);
      expect(mockFunction).not.toHaveBeenCalled();

      jest.advanceTimersByTime(500);
      await promise; // Ensure the promise resolves
      expect(mockFunction).toHaveBeenCalledTimes(1);
    });
  });

  describe('isNil', () => {
    test('should return true for null', () => {
      expect(isNil(null)).toBe(true);
    });

    test('should return true for undefined', () => {
      expect(isNil(undefined)).toBe(true);
    });

    test('should return false for other values', () => {
      expect(isNil(0)).toBe(false);
      expect(isNil('')).toBe(false);
      expect(isNil(false)).toBe(false);
      expect(isNil(NaN)).toBe(false);
      expect(isNil({})).toBe(false);
      expect(isNil([])).toBe(false);
    });
  });

  describe('noop', () => {
    test('should do nothing', () => {
      const result = noop();
      expect(result).toBeUndefined();
    });
  });

  describe('isEmpty', () => {
    test('should return true for empty values', () => {
      expect(isEmpty(null)).toBe(true);
      expect(isEmpty(undefined)).toBe(true);
      expect(isEmpty('')).toBe(true);
      expect(isEmpty([])).toBe(true);
      expect(isEmpty({})).toBe(true);
    });

    test('should return false for non-empty values', () => {
      expect(isEmpty('hello')).toBe(false);
      expect(isEmpty([1, 2])).toBe(false);
      expect(isEmpty({ a: 1 })).toBe(false);
      expect(isEmpty(0)).toBe(false);
      expect(isEmpty(false)).toBe(false);
    });
  });

  describe('throttle', () => {
    jest.useFakeTimers();

    test('should throttle a function', () => {
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

    test('should apply the correct context and arguments', () => {
      const func = jest.fn(function(a, b) { return this.value + a + b; });
      const throttledFunc = throttle(func, 100);
      const context = { value: 10 };

      throttledFunc.apply(context, [1, 2]);
      jest.runAllTimers();

      expect(func).toHaveBeenCalledWith(1, 2);
      expect(func.mock.results[0].value).toBe(13);
    });
  });

  describe('debounce', () => {
    jest.useFakeTimers();

    test('should debounce a function', () => {
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

    test('should apply the correct context and arguments', () => {
      const func = jest.fn(function(a, b) { return this.value + a + b; });
      const debouncedFunc = debounce(func, 100);
      const context = { value: 10 };

      debouncedFunc.apply(context, [1, 2]);
      jest.runAllTimers();

      expect(func).toHaveBeenCalledWith(1, 2);
      expect(func.mock.results[0].value).toBe(13);
    });
  });
});
