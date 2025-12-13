const pickNilProperties = require('./object-pick-nil-properties-utils').default;

describe('pickNilProperties', () => {
  test('should pick only null or undefined properties from an object', () => {
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
    expect(pickNilProperties(obj)).toEqual({ e: null, f: undefined, i: null, j: undefined });
  });

  test('should return an empty object if no null or undefined properties exist', () => {
    const obj = {
      a: 1,
      b: true,
      c: 'hello',
      d: 0,
      g: {},
      h: [1, 2],
    };
    expect(pickNilProperties(obj)).toEqual({});
  });

  test('should return an empty object if the input object is empty', () => {
    const obj = {};
    expect(pickNilProperties(obj)).toEqual({});
  });

  test('should return an empty object if the input object is null or undefined', () => {
    expect(pickNilProperties(null)).toEqual({});
    expect(pickNilProperties(undefined)).toEqual({});
  });

  test('should handle an object with only null or undefined properties', () => {
    const obj = { field1: null, field2: undefined };
    expect(pickNilProperties(obj)).toEqual({ field1: null, field2: undefined });
  });

  test('should not modify the original object', () => {
    const originalObj = { a: 1, b: null, c: 'text' };
    pickNilProperties(originalObj);
    expect(originalObj).toEqual({ a: 1, b: null, c: 'text' });
  });
});