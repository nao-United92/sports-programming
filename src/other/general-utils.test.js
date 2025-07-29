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

  describe('randomString', () => {
    test('should generate a random string of the specified length', () => {
      const length = 10;
      const str = randomString(length);
      expect(str.length).toBe(length);
      expect(typeof str).toBe('string');
    });

    test('should generate different strings on subsequent calls', () => {
      const str1 = randomString(10);
      const str2 = randomString(10);
      expect(str1).not.toBe(str2);
    });

    test('should handle a length of 0', () => {
      expect(randomString(0)).toBe('');
    });
  });

  describe('isPlainObject', () => {
    test('should return true for plain objects', () => {
      expect(isPlainObject({})).toBe(true);
      expect(isPlainObject({ a: 1 })).toBe(true);
      expect(isPlainObject(Object.create(null))).toBe(true);
    });

    test('should return false for arrays', () => {
      expect(isPlainObject([])).toBe(false);
      expect(isPlainObject([1, 2])).toBe(false);
    });

    test('should return false for null', () => {
      expect(isPlainObject(null)).toBe(false);
    });

    test('should return false for primitive values', () => {
      expect(isPlainObject(123)).toBe(false);
      expect(isPlainObject('string')).toBe(false);
      expect(isPlainObject(true)).toBe(false);
      expect(isPlainObject(undefined)).toBe(false);
    });

    test('should return false for instances of custom classes', () => {
      class MyClass {}
      expect(isPlainObject(new MyClass())).toBe(false);
    });

    test('should return false for built-in objects', () => {
      expect(isPlainObject(new Date())).toBe(false);
      expect(isPlainObject(/abc/)).toBe(false);
      expect(isPlainObject(new Map())).toBe(false);
      expect(isPlainObject(new Set())).toBe(false);
    });
  });

  describe('isPromise', () => {
    test('should return true for a Promise object', () => {
      const promise = Promise.resolve();
      expect(isPromise(promise)).toBe(true);
    });

    test('should return true for an async function call', async () => {
      async function asyncFunc() { return 1; }
      expect(isPromise(asyncFunc())).toBe(true);
    });

    test('should return false for non-Promise objects', () => {
      expect(isPromise(null)).toBe(false);
      expect(isPromise(undefined)).toBe(false);
      expect(isPromise(123)).toBe(false);
      expect(isPromise('string')).toBe(false);
      expect(isPromise(true)).toBe(false);
      expect(isPromise({})).toBe(false);
      expect(isPromise([])).toBe(false);
      expect(isPromise({ then: () => {}, catch: 123 })).toBe(false); // Missing catch function
      expect(isPromise({ then: 123, catch: () => {} })).toBe(false); // Missing then function
    });
  });
});
