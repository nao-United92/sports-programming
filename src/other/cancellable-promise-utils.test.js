
import { makeCancellable } from './cancellable-promise-utils.js';

describe('makeCancellable', () => {
  it('should resolve the promise when not cancelled', async () => {
    const promise = new Promise(resolve => setTimeout(() => resolve('resolved'), 50));
    const cancellable = makeCancellable(promise);
    await expect(cancellable.promise).resolves.toBe('resolved');
  });

  it('should reject the promise when the original promise rejects', async () => {
    const promise = new Promise((_, reject) => setTimeout(() => reject('error'), 50));
    const cancellable = makeCancellable(promise);
    await expect(cancellable.promise).rejects.toBe('error');
  });

  it('should not resolve the promise when cancelled', async () => {
    const promise = new Promise(resolve => setTimeout(() => resolve('resolved'), 50));
    const cancellable = makeCancellable(promise);

    cancellable.cancel();

    await expect(cancellable.promise).rejects.toEqual({ isCancelled: true });
  });

  it('should not reject the promise with the original error when cancelled', async () => {
    const promise = new Promise((_, reject) => setTimeout(() => reject('error'), 50));
    const cancellable = makeCancellable(promise);

    cancellable.cancel();

    await expect(cancellable.promise).rejects.toEqual({ isCancelled: true });
  });

  it('should handle immediate cancellation', async () => {
    const promise = new Promise(resolve => setTimeout(() => resolve('resolved'), 50));
    const cancellable = makeCancellable(promise);

    cancellable.cancel();

    try {
      await cancellable.promise;
    } catch (e) {
      expect(e).toEqual({ isCancelled: true });
    }
  });
});
