const pick = require('./object-pick');

describe('pick', () => {
  const obj = { a: 1, b: 2, c: 3, d: 4 };

  test('should pick specified keys', () => {
    expect(pick(obj, ['a', 'c'])).toEqual({ a: 1, c: 3 });
  });

  test('should ignore keys that do not exist', () => {
    expect(pick(obj, ['a', 'e'])).toEqual({ a: 1 });
  });

  test('should return empty object if no keys match', () => {
    expect(pick(obj, ['x', 'y'])).toEqual({});
  });

  test('should handle null or undefined source object', () => {
    expect(pick(null, ['a'])).toEqual({});
    expect(pick(undefined, ['a'])).toEqual({});
  });
});
