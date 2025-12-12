const omit = require('./object-omit-utils').default;

describe('omit', () => {
  const obj = { a: 1, b: 'hello', c: true, d: undefined, e: null };

  test('should omit specified properties from an object', () => {
    expect(omit(obj, 'a', 'c')).toEqual({ b: 'hello', d: undefined, e: null });
  });

  test('should omit properties when keys are provided as an array', () => {
    expect(omit(obj, ['b', 'e'])).toEqual({ a: 1, c: true, d: undefined });
  });

  test('should handle a mix of string arguments and array arguments', () => {
    expect(omit(obj, 'a', ['c', 'e'], 'b')).toEqual({ d: undefined });
  });

  test('should ignore non-existent properties in the omit list', () => {
    expect(omit(obj, 'a', 'x', 'y')).toEqual({
      b: 'hello',
      c: true,
      d: undefined,
      e: null,
    });
  });

  test('should return the original object if no properties are specified to omit', () => {
    expect(omit(obj)).toEqual(obj);
  });

  test('should return an empty object if all properties are specified to omit', () => {
    expect(omit(obj, 'a', 'b', 'c', 'd', 'e')).toEqual({});
  });

  test('should return an empty object if the input object is null or undefined', () => {
    expect(omit(null, 'a')).toEqual({});
    expect(omit(undefined, 'a')).toEqual({});
  });

  test('should not modify the original object', () => {
    const originalObj = { a: 1, b: 2 };
    omit(originalObj, 'a');
    expect(originalObj).toEqual({ a: 1, b: 2 });
  });
});