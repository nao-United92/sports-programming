import { isPromise, allSettled } from './promise-utils.js';

describe('Promise Utilities', () => {
  describe('isPromise', () => {
    it('should return true for a Promise', () => {
      const promise = new Promise(() => {});
      expect(isPromise(promise)).toBe(true);
    });

    it('should return true for a thenable object', () => {
      const thenable = { then: () => {} };
      expect(isPromise(thenable)).toBe(true);
    });

    it('should return false for non-Promise values', () => {
      expect(isPromise(null)).toBe(false);
      expect(isPromise(undefined)).toBe(false);
      expect(isPromise(123)).toBe(false);
      expect(isPromise('string')).toBe(false);
      expect(isPromise({})).toBe(false);
      expect(isPromise([])).toBe(false);
      expect(isPromise(() => {})).toBe(false);
    });
  });

  describe('allSettled', () => {
    it('should resolve with an array of settled promises', async () => {
      const promises = [
        Promise.resolve(1),
        Promise.reject('Error'),
        Promise.resolve(3)
      ];
      const results = await allSettled(promises);
      expect(results).toEqual([
        { status: 'fulfilled', value: 1 },
        { status: 'rejected', reason: 'Error' },
        { status: 'fulfilled', value: 3 }
      ]);
    });

    it('should handle an empty array of promises', async () => {
      const results = await allSettled([]);
      expect(results).toEqual([]);
    });
  });
});