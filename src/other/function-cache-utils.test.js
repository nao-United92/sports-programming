import { once, memoize } from './function-cache-utils.js';

describe('function-cache-utils', () => {
  describe('once', () => {
    it('should only call the original function once', () => {
      const myFn = jest.fn(x => x * 2);
      const onceFn = once(myFn);

      onceFn(2);
      onceFn(3);
      onceFn(4);

      expect(myFn).toHaveBeenCalledTimes(1);
      expect(myFn).toHaveBeenCalledWith(2);
    });

    it('should return the result of the first call on subsequent calls', () => {
      const onceFn = once(x => x * 2);

      const result1 = onceFn(5);
      const result2 = onceFn(10);

      expect(result1).toBe(10);
      expect(result2).toBe(10);
    });
  });

  describe('memoize', () => {
    it('should call the original function only once for the same arguments', () => {
      const myFn = jest.fn((a, b) => a + b);
      const memoizedFn = memoize(myFn);

      memoizedFn(1, 2);
      memoizedFn(1, 2);

      expect(myFn).toHaveBeenCalledTimes(1);
    });

    it('should return the cached result for subsequent calls with same arguments', () => {
      const memoizedFn = memoize((a, b) => a + b);

      const result1 = memoizedFn(2, 3);
      const result2 = memoizedFn(2, 3);

      expect(result1).toBe(5);
      expect(result2).toBe(5);
    });

    it('should call the original function again for different arguments', () => {
      const myFn = jest.fn((a, b) => a + b);
      const memoizedFn = memoize(myFn);

      memoizedFn(1, 2); // Call 1
      memoizedFn(3, 4); // Call 2

      expect(myFn).toHaveBeenCalledTimes(2);
    });

    it('should use a custom resolver if provided', () => {
      const myFn = jest.fn(obj => obj.a + obj.b);
      // Memoize based on object's `id` property
      const resolver = obj => obj.id;
      const memoizedFn = memoize(myFn, resolver);

      const obj1 = { id: 1, a: 1, b: 2 };
      const obj2 = { id: 1, a: 5, b: 5 }; // Same id, different values
      const obj3 = { id: 2, a: 3, b: 4 };

      const result1 = memoizedFn(obj1);
      const result2 = memoizedFn(obj2); // Should be cached
      const result3 = memoizedFn(obj3); // Should not be cached

      expect(myFn).toHaveBeenCalledTimes(2);
      expect(result1).toBe(3);
      expect(result2).toBe(3); // Returns cached result from first call
      expect(result3).toBe(7);
    });
  });
});
