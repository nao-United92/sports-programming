const pickArrayProperties = require('./object-pick-array-properties-utils').default;

describe('pickArrayProperties', () => {
  test('should pick only array properties from an object', () => {
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
    expect(pickArrayProperties(obj)).toEqual({ h: [1, 2], i: [], j: ['world'] });
  });

  test('should return an empty object if no array properties exist', () => {
    const obj = {
      a: 1,
      b: true,
      c: 'hello',
      d: 0,
      e: null,
      f: undefined,
      g: {},
    };
    expect(pickArrayProperties(obj)).toEqual({});
  });

  test('should return an empty object if the input object is empty', () => {
    const obj = {};
    expect(pickArrayProperties(obj)).toEqual({});
  });

  test('should return an empty object if the input object is null or undefined', () => {
    expect(pickArrayProperties(null)).toEqual({});
    expect(pickArrayProperties(undefined)).toEqual({});
  });

  test('should handle an object with only array properties', () => {
    const obj = { list1: [1, 2], list2: ['a'], emptyList: [] };
    expect(pickArrayProperties(obj)).toEqual({
      list1: [1, 2],
      list2: ['a'],
      emptyList: [],
    });
  });

  test('should not modify the original object', () => {
    const originalObj = { a: [1], b: 'text', c: [2] };
    pickArrayProperties(originalObj);
    expect(originalObj).toEqual({ a: [1], b: 'text', c: [2] });
  });
});