const pick = require('./object-pick');

describe('pick', () => {
  test('should pick specified keys from an object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(pick(obj, ['a', 'c'])).toEqual({ a: 1, c: 3 });
  });

  test('should ignore keys that do not exist in the object', () => {
    const obj = { a: 1, b: 2 };
    expect(pick(obj, ['a', 'c'])).toEqual({ a: 1 });
  });

  test('should return an empty object if no keys are provided', () => {
    const obj = { a: 1, b: 2 };
    expect(pick(obj, [])).toEqual({});
  });

  test('should handle null or undefined objects', () => {
    expect(pick(null, ['a'])).toEqual({});
    expect(pick(undefined, ['a'])).toEqual({});
  });
});
