import { promisify } from './promisify-utils.js';

describe('promisify', () => {
  test('should resolve with the result on success', async () => {
    const successfulFunc = (arg, callback) => {
      setTimeout(() => callback(null, `success: ${arg}`), 10);
    };

    const promisified = promisify(successfulFunc);
    const result = await promisified('test');
    expect(result).toBe('success: test');
  });

  test('should reject with the error on failure', async () => {
    const error = new Error('Something went wrong');
    const failingFunc = (callback) => {
      setTimeout(() => callback(error), 10);
    };

    const promisified = promisify(failingFunc);
    await expect(promisified()).rejects.toThrow('Something went wrong');
  });

  test('should pass multiple arguments to the original function', async () => {
    const func = (arg1, arg2, callback) => {
      setTimeout(() => callback(null, arg1 + arg2), 10);
    };

    const promisified = promisify(func);
    const result = await promisified(10, 20);
    expect(result).toBe(30);
  });

  test('should maintain the `this` context', async () => {
    const context = { value: 'my-context' };
    const funcWithContext = function(callback) {
      setTimeout(() => callback(null, this.value), 10);
    };

    context.promisifiedFunc = promisify(funcWithContext);
    const result = await context.promisifiedFunc();
    expect(result).toBe('my-context');
  });
});
