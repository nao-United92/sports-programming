const { pick } = require('./object-pick-properties-utils');

describe('pick', () => {
  test('should pick a single property from an object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(pick(obj, ['b'])).toEqual({ b: 2 });
  });

  test('should pick multiple properties from an object', () => {
    const obj = { a: 1, b: 2, c: 3, d: 4 };
    expect(pick(obj, ['b', 'd'])).toEqual({ b: 2, d: 4 });
  });

  test('should return an empty object if no matching properties are found', () => {
    const obj = { a: 1, b: 2 };
    expect(pick(obj, ['c'])).toEqual({});
  });

  test('should not modify the original object', () => {
    const obj = { a: 1, b: 2 };
    const originalObj = { ...obj
    };
    pick(obj, ['a']);
    expect(obj).toEqual(originalObj);
  });

  test('should handle empty object', () => {
    expect(pick({}, ['a'])).toEqual({});
  });

  test('should handle empty properties array', () => {
    const obj = { a: 1, b: 2 };
    expect(pick(obj, [])).toEqual({});
  });

  test('should return an empty object if not an object input', () => {
    expect(pick(null, ['a'])).toEqual({});
    expect(pick(undefined, ['a'])).toEqual({});
    expect(pick('string', ['a'])).toEqual({});
    expect(pick([1, 2, 3], ['a'])).toEqual({});
  });
});
