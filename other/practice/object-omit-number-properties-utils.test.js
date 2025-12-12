const omitNumberProperties = require('./object-omit-number-properties-utils').default;

describe('omitNumberProperties', () => {
  test('should omit only number properties from an object', () => {
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
    expect(omitNumberProperties(obj)).toEqual({
      b: true,
      c: 'hello',
      e: null,
      f: undefined,
      g: {},
      h: [],
    });
  });

  test('should return the original object if no number properties exist', () => {
    const obj = {
      b: true,
      c: 'hello',
      e: null,
      f: undefined,
      g: {},
      h: [],
    };
    expect(omitNumberProperties(obj)).toEqual(obj);
  });

  test('should return an empty object if the input object is empty', () => {
    const obj = {};
    expect(omitNumberProperties(obj)).toEqual({});
  });

  test('should return an empty object if the input object is null or undefined', () => {
    expect(omitNumberProperties(null)).toEqual({});
    expect(omitNumberProperties(undefined)).toEqual({});
  });

  test('should handle an object with only number properties', () => {
    const obj = { count: 10, price: 99.99, quantity: 0 };
    expect(omitNumberProperties(obj)).toEqual({});
  });

  test('should not modify the original object', () => {
    const originalObj = { a: 1, b: 'text', c: 2 };
    omitNumberProperties(originalObj);
    expect(originalObj).toEqual({ a: 1, b: 'text', c: 2 });
  });
});