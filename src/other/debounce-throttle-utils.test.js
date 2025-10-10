const { debounce, throttle } = require('./debounce-throttle-utils.js');

jest.useFakeTimers();

describe('debounce-throttle-utils', () => {
  describe('debounce', () => {
    it('should debounce an async function', async () => {
      const func = jest.fn();
      const debounced = debounce(func, 1000);

      debounced();
      debounced();

      jest.advanceTimersByTime(1000);

      expect(func).toHaveBeenCalledTimes(1);
    });

    it('should resolve with the result of the debounced function', async () => {
      const asyncFunc = jest.fn().mockResolvedValue('resolved');
      const debounced = debounce(asyncFunc, 1000);

      const promise = debounced();

      jest.advanceTimersByTime(1000);

      await expect(promise).resolves.toBe('resolved');
    });

    it('should cancel the debounced function', () => {
      const func = jest.fn();
      const debounced = debounce(func, 1000);

      debounced();
      debounced.cancel();

      jest.advanceTimersByTime(1000);

      expect(func).not.toHaveBeenCalled();
    });

    it('should flush the debounced function', () => {
      const func = jest.fn(() => 'flushed');
      const debounced = debounce(func, 1000);

      debounced();
      const result = debounced.flush();

      expect(func).toHaveBeenCalledTimes(1);
      expect(result).toBe('flushed');
    });
  });

  describe('throttle', () => {
    it('should throttle an async function', async () => {
      const func = jest.fn();
      const throttled = throttle(func, 1000);

      throttled();
      throttled();

      jest.advanceTimersByTime(1000);

      throttled();

      expect(func).toHaveBeenCalledTimes(2);
    });

    it('should return the last result for throttled calls', async () => {
      const asyncFunc = jest.fn().mockResolvedValue('resolved');
      const throttled = throttle(asyncFunc, 1000);

      const promise1 = throttled();
      const promise2 = throttled();

      await expect(promise1).resolves.toBe('resolved');
      await expect(promise2).resolves.toBe('resolved');

      jest.advanceTimersByTime(1000);

      const promise3 = throttled();
      await expect(promise3).resolves.toBe('resolved');
    });
  });
});
