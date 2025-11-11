const { once, sleep } = require('./function-helpers');

describe('function-helpers', () => {
  describe('once', () => {
    test('should only invoke the function once', () => {
      const mockFn = jest.fn();
      const onceFn = once(mockFn);

      onceFn();
      onceFn();
      onceFn();

      expect(mockFn).toHaveBeenCalledTimes(1);
    });

    test('should return the value from the first invocation', () => {
      let i = 0;
      const onceFn = once(() => ++i);

      const result1 = onceFn();
      const result2 = onceFn();
      const result3 = onceFn();

      expect(result1).toBe(1);
      expect(result2).toBe(1);
      expect(result3).toBe(1);
    });

    test('should pass arguments to the original function', () => {
      const mockFn = jest.fn((a, b) => a + b);
      const onceFn = once(mockFn);

      const result = onceFn(3, 4);

      expect(mockFn).toHaveBeenCalledWith(3, 4);
      expect(result).toBe(7);
    });

    test('should maintain the `this` context', () => {
      const context = {
        a: 1,
        method: once(function() {
          return this.a;
        }),
      };

      expect(context.method()).toBe(1);
    });
  });

  describe('sleep', () => {
    test('should resolve after the specified time', async () => {
      const startTime = Date.now();
      const delay = 100;

      await sleep(delay);

      const endTime = Date.now();
      const difference = endTime - startTime;

      expect(difference).toBeGreaterThanOrEqual(delay - 10); // Allow for minor timing inaccuracies
      expect(difference).toBeLessThan(delay + 50); // Allow for some overhead
    });

    test('should resolve without a value', async () => {
        const result = await sleep(10);
        expect(result).toBeUndefined();
    });
  });
});
