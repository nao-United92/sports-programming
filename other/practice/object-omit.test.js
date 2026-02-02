const omit = require('./object-omit');

describe('omit', () => {
  test('should create an object excluding specified keys', () => {
    const original = { a: 1, b: 2, c: 3 };
    const expected = { a: 1 };
    expect(omit(original, ['b', 'c'])).toEqual(expected);
  });

  test('should return a new object instance', () => {
    const original = { a: 1, b: 2 };
    const result = omit(original, ['b']);
    expect(result).not.toBe(original);
  });

  test('should not modify the original object', () => {
    const original = { a: 1, b: 2 };
    omit(original, ['b']);
    expect(original).toEqual({ a: 1, b: 2 });
  });

  test('should handle keys that do not exist in the object', () => {
    const original = { a: 1, b: 2 };
    expect(omit(original, ['c', 'd'])).toEqual(original);
  });

  test('should return an empty object if all keys are omitted', () => {
    const original = { a: 1, b: 2 };
    expect(omit(original, ['a', 'b'])).toEqual({});
  });
});
