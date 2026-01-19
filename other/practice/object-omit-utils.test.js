const { omit } = require('./object-omit-utils');

describe('omit', () => {
  it('should omit a single key from an object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const result = omit(obj, ['b']);
    expect(result).toEqual({ a: 1, c: 3 });
    expect(result).not.toBe(obj); // Ensure new object is returned
  });

  it('should omit multiple keys from an object', () => {
    const obj = { a: 1, b: 2, c: 3, d: 4 };
    const result = omit(obj, ['b', 'd']);
    expect(result).toEqual({ a: 1, c: 3 });
  });

  it('should return a shallow copy if no keys are omitted', () => {
    const obj = { a: 1, b: 2 };
    const result = omit(obj, []);
    expect(result).toEqual(obj);
    expect(result).not.toBe(obj);
  });

  it('should handle non-existent keys to omit gracefully', () => {
    const obj = { a: 1, b: 2 };
    const result = omit(obj, ['c', 'd']);
    expect(result).toEqual({ a: 1, b: 2 });
  });

  it('should return an empty object if all keys are omitted', () => {
    const obj = { a: 1, b: 2 };
    const result = omit(obj, ['a', 'b']);
    expect(result).toEqual({});
  });
});