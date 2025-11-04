
import { promisify } from './promise-promisify-utils.js';

describe('promisify', () => {
  test('should resolve with the result on success', async () => {
    const successfulFunc = (arg, callback) => {
      setTimeout(() => callback(null, `Success: ${arg}`), 10);
    };
    const promisified = promisify(successfulFunc);
    await expect(promisified('test')).resolves.toBe('Success: test');
  });

  test('should reject with the error on failure', async () => {
    const failingFunc = (callback) => {
      setTimeout(() => callback(new Error('Failure')), 10);
    };
    const promisified = promisify(failingFunc);
    await expect(promisified()).rejects.toThrow('Failure');
  });

  test('should pass multiple arguments to the original function', async () => {
    const multiArgFunc = (arg1, arg2, callback) => {
      setTimeout(() => callback(null, `${arg1}-${arg2}`), 10);
    };
    const promisified = promisify(multiArgFunc);
    const result = await promisified('hello', 'world');
    expect(result).toBe('hello-world');
  });

  test('should maintain the `this` context', async () => {
    const context = {
      value: 'my-context',
      method: function(callback) {
        callback(null, this.value);
      }
    };
    const promisified = promisify(context.method);
    const boundPromisified = promisified.bind(context);
    await expect(boundPromisified()).resolves.toBe('my-context');
  });
});
