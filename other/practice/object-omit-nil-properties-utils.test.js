const omitNilProperties = require('./object-omit-nil-properties-utils').default;

describe('omitNilProperties', () => {
  test('should omit only null or undefined properties from an object', () => {
    const obj = {
      a: 1,
      b: true,
      c: 'hello',
      d: 0,
      e: null,
      f: undefined,
      g: {},
      h: [1, 2],
      i: null,
      j: undefined,
    };
    expect(omitNilProperties(obj)).toEqual({
      a: 1,
      b: true,
      c: 'hello',
      d: 0,
      g: {},
      h: [1, 2],
    });
  });

  test('should return the original object if no null or undefined properties exist', () => {
    const obj = {
      a: 1,
      b: true,
      c: 'hello',
      d: 0,
      g: {},
      h: [1, 2],
    };
    expect(omitNilProperties(obj)).toEqual(obj);
  });

  test('should return an empty object if the input object is empty', () => {
    const obj = {};
    expect(omitNilProperties(obj)).toEqual({});
  });

  test('should return an empty object if the input object is null or undefined', () => {
    expect(omitNilProperties(null)).toEqual({});
    expect(omitNilProperties(undefined)).toEqual({});
  });

  test('should handle an object with only null or undefined properties', () => {
    const obj = { field1: null, field2: undefined };
    expect(omitNilProperties(obj)).toEqual({});
  });

  test('should not modify the original object', () => {
    const originalObj = { a: 1, b: null, c: 'text' };
    omitNilProperties(originalObj);
    expect(originalObj).toEqual({ a: 1, b: null, c: 'text' });
  });
});