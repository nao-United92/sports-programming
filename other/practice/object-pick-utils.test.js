const pick = require('./object-pick-utils');

describe('pick', () => {
  test('should pick a single property', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(pick(obj, 'a')).toEqual({ a: 1 });
  });

  test('should pick multiple properties', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(pick(obj, ['a', 'c'])).toEqual({ a: 1, c: 3 });
  });

  test('should not modify the original object', () => {
    const obj = { a: 1, b: 2 };
    pick(obj, 'a');
    expect(obj).toEqual({ a: 1, b: 2 });
  });

  test('should return an empty object if no keys are provided', () => {
    const obj = { a: 1, b: 2 };
    expect(pick(obj, [])).toEqual({});
  });

  test('should return an empty object for null or non-object inputs', () => {
    expect(pick(null, 'a')).toEqual({});
    expect(pick(undefined, 'a')).toEqual({});
    expect(pick(123, 'a')).toEqual({});
  });

  test('should handle keys that do not exist on the object', () => {
    const obj = { a: 1, b: 2 };
    expect(pick(obj, 'c')).toEqual({});
    expect(pick(obj, ['a', 'd'])).toEqual({ a: 1 });
  });
});
