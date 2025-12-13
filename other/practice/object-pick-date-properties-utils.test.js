const pickDateProperties = require('./object-pick-date-properties-utils').default;

describe('pickDateProperties', () => {
  test('should pick only Date properties from an object', () => {
    const date1 = new Date();
    const date2 = new Date('2023-01-01T00:00:00.000Z');
    const obj = {
      a: 1,
      b: date1,
      c: 'hello',
      d: null,
      e: undefined,
      f: date2,
      g: {},
      h: [1, 2],
    };
    expect(pickDateProperties(obj)).toEqual({ b: date1, f: date2 });
  });

  test('should return an empty object if no Date properties exist', () => {
    const obj = {
      a: 1,
      b: true,
      c: 'hello',
      d: null,
      e: undefined,
      g: {},
      h: [1, 2],
    };
    expect(pickDateProperties(obj)).toEqual({});
  });

  test('should return an empty object if the input object is empty', () => {
    const obj = {};
    expect(pickDateProperties(obj)).toEqual({});
  });

  test('should return an empty object if the input object is null or undefined', () => {
    expect(pickDateProperties(null)).toEqual({});
    expect(pickDateProperties(undefined)).toEqual({});
  });

  test('should handle an object with only Date properties', () => {
    const date1 = new Date();
    const date2 = new Date('2024-06-15T10:30:00.000Z');
    const obj = { created: date1, updated: date2 };
    expect(pickDateProperties(obj)).toEqual({ created: date1, updated: date2 });
  });

  test('should not modify the original object', () => {
    const originalDate = new Date();
    const originalObj = { a: 1, b: originalDate, c: 'text' };
    pickDateProperties(originalObj);
    expect(originalObj).toEqual({ a: 1, b: originalDate, c: 'text' });
  });
});