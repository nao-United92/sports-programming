const pickObjectProperties = require('./object-pick-object-properties-utils').default;

describe('pickObjectProperties', () => {
  test('should pick only object properties (excluding arrays and null) from an object', () => {
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
    };
    expect(pickObjectProperties(obj)).toEqual({
      g: { key: 'value' },
      i: {},
      j: obj.j,
    });
  });

  test('should return an empty object if no object properties exist', () => {
    const obj = {
      a: 1,
      b: true,
      c: 'hello',
      d: 0,
      e: null,
      f: undefined,
      h: [1, 2],
    };
    expect(pickObjectProperties(obj)).toEqual({});
  });

  test('should return an empty object if the input object is empty', () => {
    const obj = {};
    expect(pickObjectProperties(obj)).toEqual({});
  });

  test('should return an empty object if the input object is null or undefined', () => {
    expect(pickObjectProperties(null)).toEqual({});
    expect(pickObjectProperties(undefined)).toEqual({});
  });

  test('should handle an object with only object properties', () => {
    const obj = {
      data: { id: 1 },
      config: { type: 'test' },
      emptyObj: {},
    };
    expect(pickObjectProperties(obj)).toEqual({
      data: { id: 1 },
      config: { type: 'test' },
      emptyObj: {},
    });
  });

  test('should not modify the original object', () => {
    const originalObj = { a: { x: 1 }, b: 'text', c: { y: 2 } };
    pickObjectProperties(originalObj);
    expect(originalObj).toEqual({ a: { x: 1 }, b: 'text', c: { y: 2 } });
  });

  test('should not pick arrays', () => {
    const obj = { arr: [1, 2, 3] };
    expect(pickObjectProperties(obj)).toEqual({});
  });

  test('should not pick null', () => {
    const obj = { nulled: null };
    expect(pickObjectProperties(obj)).toEqual({});
  });
});