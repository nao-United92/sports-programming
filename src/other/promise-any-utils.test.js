import { promiseAny } from './promise-any-utils.js';

// Mock AggregateError if it's not available in the test environment
if (typeof AggregateError === 'undefined') {
  global.AggregateError = class AggregateError extends Error {
    constructor(errors, message) {
      super(message);
      this.errors = errors;
      this.name = 'AggregateError';
    }
  };
}

describe('promiseAny', () => {
  it('should resolve with the first promise that fulfills', async () => {
    const p1 = new Promise((resolve) => setTimeout(() => resolve('fast'), 10));
    const p2 = new Promise((resolve) => setTimeout(() => resolve('slow'), 100));
    const p3 = new Promise((_, reject) => setTimeout(() => reject('rejected'), 50));

    await expect(promiseAny([p1, p2, p3])).resolves.toBe('fast');
  });

  it('should resolve even if some promises reject before one fulfills', async () => {
    const p1 = new Promise((_, reject) => setTimeout(() => reject('rejected'), 10));
    const p2 = new Promise((resolve) => setTimeout(() => resolve('resolved'), 50));

    await expect(promiseAny([p1, p2])).resolves.toBe('resolved');
  });

  it('should reject with an AggregateError if all promises reject', async () => {
    const p1 = new Promise((_, reject) => setTimeout(() => reject('error 1'), 10));
    const p2 = new Promise((_, reject) => setTimeout(() => reject('error 2'), 20));

    await expect(promiseAny([p1, p2])).rejects.toThrow(AggregateError);
  });

  it('should contain all rejection reasons in the AggregateError', async () => {
    const p1 = new Promise((_, reject) => setTimeout(() => reject('error 1'), 10));
    const p2 = new Promise((_, reject) => setTimeout(() => reject('error 2'), 20));

    try {
      await promiseAny([p1, p2]);
    } catch (e) {
      expect(e.errors).toEqual(['error 1', 'error 2']);
    }
  });

  it('should reject with an AggregateError for an empty iterable', async () => {
    await expect(promiseAny([])).rejects.toThrow(AggregateError);
  });

  it('should resolve with a non-promise value in the iterable', async () => {
    await expect(promiseAny([10, Promise.reject('fail')])).resolves.toBe(10);
  });

  it('should handle a mix of promises and values', async () => {
    const p1 = new Promise((resolve) => setTimeout(() => resolve('done'), 50));
    await expect(promiseAny(['immediate', p1])).resolves.toBe('immediate');
  });
});
