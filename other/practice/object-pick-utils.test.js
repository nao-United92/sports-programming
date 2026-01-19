const { pick } = require('./object-pick-utils');

describe('pick', () => {
  it('should pick a single key from an object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const result = pick(obj, ['b']);
    expect(result).toEqual({ b: 2 });
    expect(result).not.toBe(obj); // Ensure new object is returned
  });

  it('should pick multiple keys from an object', () => {
    const obj = { a: 1, b: 2, c: 3, d: 4 };
    const result = pick(obj, ['b', 'd']);
    expect(result).toEqual({ b: 2, d: 4 });
  });

  it('should return an empty object if no keys are specified', () => {
    const obj = { a: 1, b: 2 };
    const result = pick(obj, []);
    expect(result).toEqual({});
  });

  it('should handle non-existent keys to pick gracefully', () => {
    const obj = { a: 1, b: 2 };
    const result = pick(obj, ['c', 'd']);
    expect(result).toEqual({});
  });

  it('should pick keys that exist, ignoring non-existent ones', () => {
    const obj = { a: 1, b: 2 };
    const result = pick(obj, ['a', 'c']);
    expect(result).toEqual({ a: 1 });
  });
});