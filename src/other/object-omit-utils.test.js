const { omit } = require('./object-omit-utils.js');

describe('omit', () => {
  const obj = { a: 1, b: 2, c: 3 };

  test('should omit a single property', () => {
    expect(omit(obj, 'a')).toEqual({ b: 2, c: 3 });
  });

  test('should omit multiple properties', () => {
    expect(omit(obj, ['a', 'c'])).toEqual({ b: 2 });
  });

  test('should not modify the original object', () => {
    omit(obj, 'a');
    expect(obj).toEqual({ a: 1, b: 2, c: 3 });
  });

  test('should return a new object even if no properties are omitted', () => {
    const result = omit(obj, 'd');
    expect(result).toEqual({ a: 1, b: 2, c: 3 });
    expect(result).not.toBe(obj);
  });

  test('should handle an empty object', () => {
    expect(omit({}, 'a')).toEqual({});
  });

  test('should handle null or undefined object', () => {
    expect(omit(null, 'a')).toEqual({});
    expect(omit(undefined, 'a')).toEqual({});
  });
});