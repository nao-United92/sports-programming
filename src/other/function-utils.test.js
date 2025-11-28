const { once } = require('./function-utils');

describe('once', () => {
  test('should ensure the original function is called only once', () => {
    const mockFn = jest.fn();
    const onceFn = once(mockFn);

    onceFn();
    onceFn();
    onceFn();

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test('should return the result of the first call on subsequent calls', () => {
    let counter = 0;
    const increment = () => ++counter;
    const onceIncrement = once(increment);

    const result1 = onceIncrement();
    const result2 = onceIncrement();
    const result3 = onceIncrement();

    expect(result1).toBe(1);
    expect(result2).toBe(1);
    expect(result3).toBe(1);
  });

  test('should pass arguments to the original function', () => {
    const mockFn = jest.fn((a, b) => a + b);
    const onceFn = once(mockFn);

    const result = onceFn(3, 4);

    expect(mockFn).toHaveBeenCalledWith(3, 4);
    expect(result).toBe(7);

    // Subsequent call with different arguments should not affect the result
    const result2 = onceFn(5, 6);
    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(result2).toBe(7);
  });

  test('should preserve the `this` context', () => {
    const mockFn = jest.fn(function() {
      return this.value;
    });
    const onceFn = once(mockFn);

    const context = { value: 'test', onceFn };
    const result = context.onceFn();

    expect(result).toBe('test');
    expect(mockFn).toHaveBeenCalledTimes(1);

    // Change context and call again, should not change result
    const context2 = { value: 'test2', onceFn };
    const result2 = context2.onceFn();
    expect(result2).toBe('test');
  });
});