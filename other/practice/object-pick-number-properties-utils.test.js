const pickNumberProperties = require('./object-pick-number-properties-utils').default;

describe('pickNumberProperties', () => {
  test('should pick only number properties from an object', () => {
    const obj = {
      a: 1,
      b: true,
      c: 'hello',
      d: 0,
      e: null,
      f: undefined,
      g: {},
      h: [],
      i: -10,
      j: 3.14,
    };
    expect(pickNumberProperties(obj)).toEqual({ a: 1, d: 0, i: -10, j: 3.14 });
  });

  test('should return an empty object if no number properties exist', () => {
    const obj = {
      b: true,
      c: 'hello',
      e: null,
      f: undefined,
      g: {},
      h: [],
    };
    expect(pickNumberProperties(obj)).toEqual({});
  });

  test('should return an empty object if the input object is empty', () => {
    const obj = {};
    expect(pickNumberProperties(obj)).toEqual({});
  });

  test('should return an empty object if the input object is null or undefined', () => {
    expect(pickNumberProperties(null)).toEqual({});
    expect(pickNumberProperties(undefined)).toEqual({});
  });

  test('should handle an object with only number properties', () => {
    const obj = { count: 10, price: 99.99, quantity: 0 };
    expect(pickNumberProperties(obj)).toEqual({
      count: 10,
      price: 99.99,
      quantity: 0,
    });
  });

  test('should not modify the original object', () => {
    const originalObj = { a: 1, b: 'text', c: 2 };
    pickNumberProperties(originalObj);
    expect(originalObj).toEqual({ a: 1, b: 'text', c: 2 });
  });
});