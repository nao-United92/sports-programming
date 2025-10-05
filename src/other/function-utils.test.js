import { once, memoize } from './function-utils.js';

describe('Function Utilities', () => {
  describe('once', () => {
    it('should only invoke the function once', () => {
      const mockFn = jest.fn();
      const onceFn = once(mockFn);

      onceFn();
      onceFn();
      onceFn();

      expect(mockFn).toHaveBeenCalledTimes(1);
    });

    it('should return the value of the first invocation', () => {
      let i = 1;
      const onceFn = once(() => i++);

      const val1 = onceFn();
      const val2 = onceFn();
      const val3 = onceFn();

      expect(val1).toBe(1);
      expect(val2).toBe(1);
      expect(val3).toBe(1);
    });
  });

  describe('memoize', () => {
    it('should memoize the result of a function', () => {
      const mockFn = jest.fn(x => x * 2);
      const memoizedFn = memoize(mockFn);

      memoizedFn(2);
      memoizedFn(2);

      expect(mockFn).toHaveBeenCalledTimes(1);
      expect(memoizedFn(2)).toBe(4);
    });

    it('should use a resolver function if provided', () => {
      const mockFn = jest.fn((a, b) => a + b);
      const memoizedFn = memoize(mockFn, (a, b) => `${a}-${b}`);

      memoizedFn(1, 2);
      memoizedFn(1, 2);

      expect(mockFn).toHaveBeenCalledTimes(1);
      expect(memoizedFn(1, 2)).toBe(3);

      memoizedFn(2, 3);
      memoizedFn(2, 3);

      expect(mockFn).toHaveBeenCalledTimes(2);
      expect(memoizedFn(2, 3)).toBe(5);
    });
  });
});