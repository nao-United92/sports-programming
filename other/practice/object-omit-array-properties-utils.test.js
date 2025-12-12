const omitArrayProperties = require('./object-omit-array-properties-utils').default;

describe('omitArrayProperties', () => {
  test('should omit only array properties from an object', () => {
    const obj = {
      a: 1,
      b: true,
      c: 'hello',
      d: 0,
      e: null,
      f: undefined,
      g: {},
      h: [1, 2],
      i: [],
      j: ['world'],
    };
    expect(omitArrayProperties(obj)).toEqual({
      a: 1,
      b: true,
      c: 'hello',
      d: 0,
      e: null,
      f: undefined,
      g: {},
    });
  });

  test('should return the original object if no array properties exist', () => {
    const obj = {
      a: 1,
      b: true,
      c: 'hello',
      d: 0,
      e: null,
      f: undefined,
      g: {},
    };
    expect(omitArrayProperties(obj)).toEqual(obj);
  });

  test('should return an empty object if the input object is empty', () => {
    const obj = {};
    expect(omitArrayProperties(obj)).toEqual({});
  });

  test('should return an empty object if the input object is null or undefined', () => {
    expect(omitArrayProperties(null)).toEqual({});
    expect(omitArrayProperties(undefined)).toEqual({});
  });

  test('should handle an object with only array properties', () => {
    const obj = { list1: [1, 2], list2: ['a'], emptyList: [] };
    expect(omitArrayProperties(obj)).toEqual({});
  });

  test('should not modify the original object', () => {
    const originalObj = { a: [1], b: 'text', c: [2] };
    omitArrayProperties(originalObj);
    expect(originalObj).toEqual({ a: [1], b: 'text', c: [2] });
  });
});