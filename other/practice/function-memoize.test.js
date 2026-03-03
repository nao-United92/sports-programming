const memoize = require('./function-memoize');

describe('function-memoize', () => {
  test('memoizes a function', () => {
    const fn = jest.fn((a, b) => a + b);
    const memoized = memoize(fn);

    expect(memoized(1, 2)).toBe(3);
    expect(memoized(1, 2)).toBe(3);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  test('handles different arguments', () => {
    const fn = jest.fn((a) => a * 2);
    const memoized = memoize(fn);

    expect(memoized(2)).toBe(4);
    expect(memoized(3)).toBe(6);
    expect(fn).toHaveBeenCalledTimes(2);
  });

  test('handles complex arguments', () => {
    const fn = jest.fn((obj) => obj.a);
    const memoized = memoize(fn);

    expect(memoized({ a: 1 })).toBe(1);
    expect(memoized({ a: 1 })).toBe(1);
    expect(fn).toHaveBeenCalledTimes(1);
  });
});
