const flattenObject = require('./object-flatten-utils');

describe('flattenObject', () => {
  test('should flatten a simple nested object with default delimiter', () => {
    const obj = {
      a: 1,
      b: {
        c: 2,
        d: {
          e: 3
        }
      }
    };
    const expected = {
      a: 1,
      'b.c': 2,
      'b.d.e': 3
    };
    expect(flattenObject(obj)).toEqual(expected);
  });

  test('should flatten an object with a custom delimiter', () => {
    const obj = {
      a: 1,
      b: {
        c: 2
      }
    };
    const expected = {
      a: 1,
      'b_c': 2
    };
    expect(flattenObject(obj, '', '_')).toEqual(expected);
  });

  test('should handle arrays as values without flattening them', () => {
    const obj = {
      a: 1,
      b: {
        c: [1, 2, 3]
      }
    };
    const expected = {
      a: 1,
      'b.c': [1, 2, 3]
    };
    expect(flattenObject(obj)).toEqual(expected);
  });

  test('should handle null and undefined values', () => {
    const obj = {
      a: null,
      b: {
        c: undefined
      }
    };
    const expected = {
      a: null,
      'b.c': undefined
    };
    expect(flattenObject(obj)).toEqual(expected);
  });

  test('should handle empty objects', () => {
    const obj = {};
    expect(flattenObject(obj)).toEqual({});
  });

  test('should handle object with only top-level properties', () => {
    const obj = {
      a: 1,
      b: 'test'
    };
    expect(flattenObject(obj)).toEqual({
      a: 1,
      b: 'test'
    });
  });

  test('should handle objects created with Object.create(null)', () => {
    const nested = Object.create(null);
    nested.c = 2;
    const obj = Object.create(null);
    obj.a = 1;
    obj.b = nested;
    const expected = {
      a: 1,
      'b.c': 2
    };
    expect(flattenObject(obj)).toEqual(expected);
  });

  test('should not flatten arrays containing objects', () => {
    const obj = {
      data: [{
        id: 1,
        value: 'x'
      }, {
        id: 2,
        value: 'y'
      }]
    };
    const expected = {
      'data': [{
        id: 1,
        value: 'x'
      }, {
        id: 2,
        value: 'y'
      }]
    };
    expect(flattenObject(obj)).toEqual(expected);
  });

  test('should return empty object for non-object input', () => {
    expect(flattenObject(null)).toEqual({});
    expect(flattenObject(undefined)).toEqual({});
    expect(flattenObject(123)).toEqual({});
    expect(flattenObject('string')).toEqual({});
    expect(flattenObject([])).toEqual({}); // Arrays are not flattened, but returned as empty object if not handled
  });
});
