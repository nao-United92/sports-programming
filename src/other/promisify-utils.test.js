import { promisify } from './promisify-utils';

describe('promisify', () => {
  it('should return a function that returns a promise', () => {
    const callbackStyleFn = (cb) => cb(null, 'success');
    const promisifiedFn = promisify(callbackStyleFn);
    expect(promisifiedFn()).toBeInstanceOf(Promise);
  });

  it('should resolve with the result on success', async () => {
    const callbackStyleFn = (cb) => {
      setTimeout(() => cb(null, 'success'), 10);
    };
    const promisifiedFn = promisify(callbackStyleFn);
    await expect(promisifiedFn()).resolves.toBe('success');
  });

  it('should reject with the error on failure', async () => {
    const error = new Error('failure');
    const callbackStyleFn = (cb) => {
      setTimeout(() => cb(error), 10);
    };
    const promisifiedFn = promisify(callbackStyleFn);
    await expect(promisifiedFn()).rejects.toThrow('failure');
  });

  it('should pass arguments to the original function', async () => {
    const callbackStyleFn = (a, b, cb) => {
      setTimeout(() => cb(null, a + b), 10);
    };
    const promisifiedFn = promisify(callbackStyleFn);
    await expect(promisifiedFn(3, 4)).resolves.toBe(7);
  });

  it('should maintain the `this` context', async () => {
    const obj = {
      val: 10,
      add: function(a, cb) {
        setTimeout(() => cb(null, this.val + a), 10);
      },
    };
    const promisifiedAdd = promisify(obj.add);
    const boundPromisifiedAdd = promisifiedAdd.bind(obj);

    await expect(boundPromisifiedAdd(5)).resolves.toBe(15);
  });
});