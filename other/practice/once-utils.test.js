const once = require('./once-utils');

describe('once', () => {
  test('should only call the original function once', () => {
    const mockFn = jest.fn();
    const onceFn = once(mockFn);

    onceFn();
    onceFn();
    onceFn();

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test('should return the result of the first call on subsequent calls', () => {
    let i = 0;
    const firstValue = () => ++i;
    const onceFn = once(firstValue);

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

    const result = onceFn(3, 5);

    expect(mockFn).toHaveBeenCalledWith(3, 5);
    expect(result).toBe(8);
  });

  test('should maintain the `this` context', () => {
    const obj = {
      i: 10,
      method: function() {
        return this.i;
      }
    };

    obj.onceMethod = once(obj.method);
    const result = obj.onceMethod();

    expect(result).toBe(10);
    obj.i = 20;
    const result2 = obj.onceMethod();
    expect(result2).toBe(10); // Still returns the first result
  });
});
