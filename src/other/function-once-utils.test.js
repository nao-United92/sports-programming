const { once } = require('./function-once-utils.js');

describe('once', () => {
  test('should invoke the original function only once', () => {
    const mockFn = jest.fn();
    const onceFn = once(mockFn);

    onceFn();
    onceFn();
    onceFn();

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test('should return the value of the first invocation on subsequent calls', () => {
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
    const mockFn = jest.fn();
    const onceFn = once(mockFn);

    onceFn(1, 2, 3);
    onceFn(4, 5, 6); // These arguments should be ignored

    expect(mockFn).toHaveBeenCalledWith(1, 2, 3);
  });

  test('should maintain the `this` context', () => {
    const mockFn = jest.fn(function() { return this.value; });
    const context = { value: 42, onceFn: once(mockFn) };

    const result = context.onceFn();

    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(result).toBe(42);

    // Call it again to ensure it returns the cached result and doesn't call mockFn again
    const result2 = context.onceFn();
    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(result2).toBe(42);
  });
});
