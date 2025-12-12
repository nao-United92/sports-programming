const omitStringProperties = require('./object-omit-string-properties-utils').default;

describe('omitStringProperties', () => {
  test('should omit only string properties from an object', () => {
    const obj = {
      a: 1,
      b: true,
      c: 'hello',
      d: 0,
      e: null,
      f: undefined,
      g: {},
      h: [],
      i: 'world',
      j: '', // Empty string is a string and should be omitted
    };
    expect(omitStringProperties(obj)).toEqual({
      a: 1,
      b: true,
      d: 0,
      e: null,
      f: undefined,
      g: {},
      h: [],
    });
  });

  test('should return the original object if no string properties exist', () => {
    const obj = {
      a: 1,
      b: true,
      e: null,
      f: undefined,
      g: {},
      h: [],
    };
    expect(omitStringProperties(obj)).toEqual(obj);
  });

  test('should return an empty object if the input object is empty', () => {
    const obj = {};
    expect(omitStringProperties(obj)).toEqual({});
  });

  test('should return an empty object if the input object is null or undefined', () => {
    expect(omitStringProperties(null)).toEqual({});
    expect(omitStringProperties(undefined)).toEqual({});
  });

  test('should handle an object with only string properties', () => {
    const obj = { name: 'Alice', city: 'New York' };
    expect(omitStringProperties(obj)).toEqual({});
  });

  test('should not modify the original object', () => {
    const originalObj = { a: 'text', b: 123, c: 'another text' };
    omitStringProperties(originalObj);
    expect(originalObj).toEqual({ a: 'text', b: 123, c: 'another text' });
  });
});