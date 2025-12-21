const omit = require('./object-omit-utils');

describe('omit', () => {
  test('should omit a single property', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(omit(obj, 'a')).toEqual({ b: 2, c: 3 });
  });

  test('should omit multiple properties', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(omit(obj, ['a', 'c'])).toEqual({ b: 2 });
  });

  test('should not modify the original object', () => {
    const obj = { a: 1, b: 2 };
    omit(obj, 'a');
    expect(obj).toEqual({ a: 1, b: 2 });
  });

  test('should return the object if no keys are provided', () => {
    const obj = { a: 1, b: 2 };
    expect(omit(obj, [])).toEqual({ a: 1, b: 2 });
  });

  test('should return an empty object for null or non-object inputs', () => {
    expect(omit(null, 'a')).toEqual({});
    expect(omit(undefined, 'a')).toEqual({});
    expect(omit(123, 'a')).toEqual({});
  });

  test('should handle keys that do not exist on the object', () => {
    const obj = { a: 1, b: 2 };
    expect(omit(obj, 'c')).toEqual({ a: 1, b: 2 });
    expect(omit(obj, ['a', 'd'])).toEqual({ b: 2 });
  });
});
