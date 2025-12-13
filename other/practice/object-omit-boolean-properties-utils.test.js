const omitBooleanProperties = require('./object-omit-boolean-properties-utils').default;

describe('omitBooleanProperties', () => {
  test('should omit only boolean properties from an object', () => {
    const obj = {
      a: 1,
      b: true,
      c: 'hello',
      d: false,
      e: null,
      f: undefined,
      g: {},
      h: [],
    };
    expect(omitBooleanProperties(obj)).toEqual({
      a: 1,
      c: 'hello',
      e: null,
      f: undefined,
      g: {},
      h: [],
    });
  });

  test('should return the original object if no boolean properties exist', () => {
    const obj = {
      a: 1,
      c: 'hello',
      e: null,
      f: undefined,
      g: {},
      h: [],
    };
    expect(omitBooleanProperties(obj)).toEqual(obj);
  });

  test('should return an empty object if the input object is empty', () => {
    const obj = {};
    expect(omitBooleanProperties(obj)).toEqual({});
  });

  test('should return an empty object if the input object is null or undefined', () => {
    expect(omitBooleanProperties(null)).toEqual({});
    expect(omitBooleanProperties(undefined)).toEqual({});
  });

  test('should handle an object with only boolean properties', () => {
    const obj = { enabled: true, visible: false };
    expect(omitBooleanProperties(obj)).toEqual({});
  });

  test('should not modify the original object', () => {
    const originalObj = { a: 1, b: true, c: false };
    omitBooleanProperties(originalObj);
    expect(originalObj).toEqual({ a: 1, b: true, c: false });
  });
});