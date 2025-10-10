const { once } = require('./function-once-utils.js');

describe('once', () => {
  test('should invoke the function only once', () => {
    const spy = jest.fn(x => x + 1);
    const onceFn = once(spy);

    expect(onceFn(1)).toBe(2);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(1);

    expect(onceFn(2)).toBe(2); // Subsequent calls return the first result
    expect(spy).toHaveBeenCalledTimes(1); // Should not be called again

    expect(onceFn(3)).toBe(2);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  test('should preserve the `this` context', () => {
    const spy = jest.fn(function(x) { return this.value + x; });
    const onceFn = once(spy);

    const context = { value: 10 };

    expect(onceFn.call(context, 5)).toBe(15);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(5);

    expect(onceFn.call({ value: 20 }, 1)).toBe(15); // `this` context for subsequent calls is ignored
    expect(spy).toHaveBeenCalledTimes(1);
  });

  test('should throw an error if func is not a function', () => {
    expect(() => once(null)).toThrow('Expected a function');
    expect(() => once('string')).toThrow('Expected a function');
  });
});