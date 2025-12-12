const pickBooleanProperties = require('./object-pick-boolean-properties-utils').default;

describe('pickBooleanProperties', () => {
  test('should pick only boolean properties from an object', () => {
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
    expect(pickBooleanProperties(obj)).toEqual({ b: true, d: false });
  });

  test('should return an empty object if no boolean properties exist', () => {
    const obj = {
      a: 1,
      c: 'hello',
      e: null,
      f: undefined,
      g: {},
      h: [],
    };
    expect(pickBooleanProperties(obj)).toEqual({});
  });

  test('should return an empty object if the input object is empty', () => {
    const obj = {};
    expect(pickBooleanProperties(obj)).toEqual({});
  });

  test('should return an empty object if the input object is null or undefined', () => {
    expect(pickBooleanProperties(null)).toEqual({});
    expect(pickBooleanProperties(undefined)).toEqual({});
  });

  test('should handle an object with only boolean properties', () => {
    const obj = { enabled: true, visible: false };
    expect(pickBooleanProperties(obj)).toEqual({ enabled: true, visible: false });
  });

  test('should not modify the original object', () => {
    const originalObj = { a: 1, b: true, c: false };
    pickBooleanProperties(originalObj);
    expect(originalObj).toEqual({ a: 1, b: true, c: false });
  });
});