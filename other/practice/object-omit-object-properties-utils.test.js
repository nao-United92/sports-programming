const omitObjectProperties = require('./object-omit-object-properties-utils').default;

describe('omitObjectProperties', () => {
  test('should omit only object properties (excluding arrays and null) from an object', () => {
    const obj = {
      a: 1,
      b: true,
      c: 'hello',
      d: 0,
      e: null,
      f: undefined,
      g: { key: 'value' },
      h: [1, 2],
      i: {},
      j: new Date(), // Date object is an object
      k: Symbol('sym'),
    };
    expect(omitObjectProperties(obj)).toEqual({
      a: 1,
      b: true,
      c: 'hello',
      d: 0,
      e: null,
      f: undefined,
      h: [1, 2],
      k: obj.k,
    });
  });

  test('should return the original object if no object properties exist', () => {
    const obj = {
      a: 1,
      b: true,
      c: 'hello',
      d: 0,
      e: null,
      f: undefined,
      h: [1, 2],
    };
    expect(omitObjectProperties(obj)).toEqual(obj);
  });

  test('should return an empty object if the input object is empty', () => {
    const obj = {};
    expect(omitObjectProperties(obj)).toEqual({});
  });

  test('should return an empty object if the input object is null or undefined', () => {
    expect(omitObjectProperties(null)).toEqual({});
    expect(omitObjectProperties(undefined)).toEqual({});
  });

  test('should handle an object with only object properties', () => {
    const obj = {
      data: { id: 1 },
      config: { type: 'test' },
      emptyObj: {},
    };
    expect(omitObjectProperties(obj)).toEqual({});
  });

  test('should not modify the original object', () => {
    const originalObj = { a: { x: 1 }, b: 'text', c: { y: 2 } };
    omitObjectProperties(originalObj);
    expect(originalObj).toEqual({ a: { x: 1 }, b: 'text', c: { y: 2 } });
  });

  test('should include arrays', () => {
    const obj = { arr: [1, 2, 3] };
    expect(omitObjectProperties(obj)).toEqual({ arr: [1, 2, 3] });
  });

  test('should include null', () => {
    const obj = { nulled: null };
    expect(omitObjectProperties(obj)).toEqual({ nulled: null });
  });
});