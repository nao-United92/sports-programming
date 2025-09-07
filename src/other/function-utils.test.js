import { once, memoize } from './function-utils.js';

describe('Function Utilities', () => {
  describe('once', () => {
    it('should only call the function once', () => {
      const myFn = jest.fn();
      const onceFn = once(myFn);

      onceFn();
      onceFn();
      onceFn();

      expect(myFn).toHaveBeenCalledTimes(1);
    });

    it('should return the result of the first call', () => {
      const myFn = jest.fn((a, b) => a + b);
      const onceFn = once(myFn);

      const result1 = onceFn(1, 2);
      const result2 = onceFn(3, 4);

      expect(result1).toBe(3);
      expect(result2).toBe(3);
    });
  });

  describe('memoize', () => {
    it('should memoize the result of a function', () => {
      const myFn = jest.fn((a) => a * 2);
      const memoizedFn = memoize(myFn);

      memoizedFn(2);
      memoizedFn(2);

      expect(myFn).toHaveBeenCalledTimes(1);
    });

    it('should return the cached result', () => {
      const myFn = jest.fn((a) => a * 2);
      const memoizedFn = memoize(myFn);

      const result1 = memoizedFn(2);
      const result2 = memoizedFn(2);

      expect(result1).toBe(4);
      expect(result2).toBe(4);
    });

    it('should use a resolver function for the cache key', () => {
      const myFn = jest.fn((obj) => obj.a * 2);
      const resolver = (obj) => obj.a;
      const memoizedFn = memoize(myFn, resolver);

      memoizedFn({ a: 2 });
      memoizedFn({ a: 2 });

      expect(myFn).toHaveBeenCalledTimes(1);
    });
  });
});