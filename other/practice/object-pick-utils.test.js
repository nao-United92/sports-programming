import pick from './object-pick-utils';

describe('pick', () => {
  test('should pick specified keys from an object', () => {
    const original = { a: 1, b: 2, c: 3, d: 4 };
    const picked = pick(original, ['a', 'c']);
    expect(picked).toEqual({ a: 1, c: 3 });
  });

  test('should return a new object reference', () => {
    const original = { a: 1, b: 2 };
    const picked = pick(original, ['a']);
    expect(picked).not.toBe(original);
  });

  test('should handle an empty array of keys to pick', () => {
    const original = { a: 1, b: 2 };
    const picked = pick(original, []);
    expect(picked).toEqual({});
  });

  test('should handle keys that do not exist in the object', () => {
    const original = { a: 1, b: 2 };
    const picked = pick(original, ['c', 'd']);
    expect(picked).toEqual({});
  });

  test('should handle an empty object', () => {
    expect(pick({}, ['a', 'b'])).toEqual({});
  });

  test('should pick all keys if all keys are specified', () => {
    const original = { a: 1, b: 2 };
    const picked = pick(original, ['a', 'b']);
    expect(picked).toEqual({ a: 1, b: 2 });
  });

  test('should handle non-object inputs by returning an empty object', () => {
    expect(pick(null, ['a'])).toEqual({});
    expect(pick(undefined, ['a'])).toEqual({});
    expect(pick('string', ['a'])).toEqual({});
    expect(pick(123, ['a'])).toEqual({});
    expect(pick([1, 2], ['a'])).toEqual({}); // Arrays are also treated as non-plain objects
  });

  test('should throw TypeError if keysToPick is not an array', () => {
    const original = { a: 1 };
    expect(() => pick(original, null)).toThrow(TypeError);
    expect(() => pick(original, 'a')).toThrow(TypeError);
    expect(() => pick(original, {})).toThrow(TypeError);
  });
});