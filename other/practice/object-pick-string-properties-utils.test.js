const pickStringProperties = require('./object-pick-string-properties-utils').default;

describe('pickStringProperties', () => {
  test('should pick only string properties from an object', () => {
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
      j: '', // Empty string should also be picked
    };
    expect(pickStringProperties(obj)).toEqual({ c: 'hello', i: 'world', j: '' });
  });

  test('should return an empty object if no string properties exist', () => {
    const obj = {
      a: 1,
      b: true,
      e: null,
      f: undefined,
      g: {},
      h: [],
    };
    expect(pickStringProperties(obj)).toEqual({});
  });

  test('should return an empty object if the input object is empty', () => {
    const obj = {};
    expect(pickStringProperties(obj)).toEqual({});
  });

  test('should return an empty object if the input object is null or undefined', () => {
    expect(pickStringProperties(null)).toEqual({});
    expect(pickStringProperties(undefined)).toEqual({});
  });

  test('should handle an object with only string properties', () => {
    const obj = { name: 'Alice', city: 'New York' };
    expect(pickStringProperties(obj)).toEqual({ name: 'Alice', city: 'New York' });
  });

  test('should not modify the original object', () => {
    const originalObj = { a: 'text', b: 123, c: 'another text' };
    pickStringProperties(originalObj);
    expect(originalObj).toEqual({ a: 'text', b: 123, c: 'another text' });
  });
});