const { once } = require('./function-once-utils');

describe('once', () => {
  test('should only call the original function once', () => {
    const mockFn = jest.fn();
    const onceFn = once(mockFn);

    onceFn();
    onceFn();
    onceFn();

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test('should return the result of the first call', () => {
    let i = 0;
    const func = () => ++i;
    const onceFn = once(func);

    const result1 = onceFn();
    const result2 = onceFn();
    const result3 = onceFn();

    expect(result1).toBe(1);
    expect(result2).toBe(1);
    expect(result3).toBe(1);
  });

  test('should pass arguments to the original function', () => {
    const mockFn = jest.fn();
    const onceFn = once(mockFn);
    const args = [1, 'a', { b: 2 }];

    onceFn(...args);
    onceFn(...args);

    expect(mockFn).toHaveBeenCalledWith(...args);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test('should maintain the `this` context', () => {
    const obj = {
      i: 10,
      method: function() {
        return this.i;
      }
    };
    obj.onceMethod = once(obj.method);

    expect(obj.onceMethod()).toBe(10);
    obj.i = 20;
    expect(obj.onceMethod()).toBe(10); // Still returns the first result
  });
});
