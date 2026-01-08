import omit from './object-omit-utils';

describe('omit', () => {
  test('should omit specified keys from an object', () => {
    const original = { a: 1, b: 2, c: 3, d: 4 };
    const omitted = omit(original, ['a', 'c']);
    expect(omitted).toEqual({ b: 2, d: 4 });
  });

  test('should return a new object reference', () => {
    const original = { a: 1, b: 2 };
    const omitted = omit(original, ['a']);
    expect(omitted).not.toBe(original);
  });

  test('should handle an empty array of keys to omit', () => {
    const original = { a: 1, b: 2 };
    const omitted = omit(original, []);
    expect(omitted).toEqual(original);
    expect(omitted).not.toBe(original);
  });

  test('should handle keys that do not exist in the object', () => {
    const original = { a: 1, b: 2 };
    const omitted = omit(original, ['c', 'd']);
    expect(omitted).toEqual({ a: 1, b: 2 });
  });

  test('should handle an empty object', () => {
    expect(omit({}, ['a', 'b'])).toEqual({});
  });

  test('should omit all keys if all keys are specified', () => {
    const original = { a: 1, b: 2 };
    const omitted = omit(original, ['a', 'b']);
    expect(omitted).toEqual({});
  });

  test('should handle non-object inputs by returning them as is', () => {
    expect(omit(null, ['a'])).toBe(null);
    expect(omit(undefined, ['a'])).toBe(undefined);
    expect(omit('string', ['a'])).toBe('string');
    expect(omit(123, ['a'])).toBe(123);
    expect(omit([1, 2], ['a'])).toEqual([1, 2]); // Arrays are also returned as is
  });

  test('should throw TypeError if keysToOmit is not an array', () => {
    const original = { a: 1 };
    expect(() => omit(original, null)).toThrow(TypeError);
    expect(() => omit(original, 'a')).toThrow(TypeError);
    expect(() => omit(original, {})).toThrow(TypeError);
  });
});