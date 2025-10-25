const { promisify } = require('./function-promisify-utils');

describe('promisify', () => {

  // A fake callback-style function for testing
  const callbackStyleFunc = (arg, callback) => {
    if (arg === 'success') {
      setTimeout(() => callback(null, 'ok'), 10);
    } else {
      setTimeout(() => callback(new Error('fail')), 10);
    }
  };

  test('should return a function', () => {
    const promisifiedFunc = promisify(callbackStyleFunc);
    expect(typeof promisifiedFunc).toBe('function');
  });

  test('should resolve the promise on success', async () => {
    const promisifiedFunc = promisify(callbackStyleFunc);
    const result = await promisifiedFunc('success');
    expect(result).toBe('ok');
  });

  test('should reject the promise on error', async () => {
    const promisifiedFunc = promisify(callbackStyleFunc);
    await expect(promisifiedFunc('error')).rejects.toThrow('fail');
  });

  test('should maintain the `this` context', async () => {
    const context = { value: 42 };
    const callbackStyleFuncWithContext = function(callback) {
      callback(null, this.value);
    };
    context.promisified = promisify(callbackStyleFuncWithContext);

    const result = await context.promisified();
    expect(result).toBe(42);
  });

  test('should throw an error if the argument is not a function', () => {
    expect(() => promisify('not a function')).toThrow('Argument must be a function.');
  });
});
