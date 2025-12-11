const omit = require('./object-omit-properties-utils');

describe('omit', () => {
  const obj = {
    a: 1,
    b: 'hello',
    c: true,
    d: {
      e: 2
    },
    f: undefined,
    g: null,
    h: 0
  };

  test('should omit specified properties from an object', () => {
    expect(omit(obj, ['a', 'c'])).toEqual({
      b: 'hello',
      d: {
        e: 2
      },
      f: undefined,
      g: null,
      h: 0
    });
  });

  test('should not omit non-existent properties', () => {
    expect(omit(obj, ['a', 'x'])).toEqual({
      b: 'hello',
      c: true,
      d: {
        e: 2
      },
      f: undefined,
      g: null,
      h: 0
    });
  });

  test('should return the original object (shallow copy) if no keys are provided to omit', () => {
    expect(omit(obj, [])).toEqual(obj);
    expect(omit(obj, [])).not.toBe(obj);
  });

  test('should return an empty object if the input object is null or undefined', () => {
    expect(omit(null, ['a'])).toEqual({});
    expect(omit(undefined, ['a'])).toEqual({});
  });

  test('should return an empty object if the input object is not an object', () => {
    expect(omit(123, ['a'])).toEqual({});
    expect(omit('string', ['a'])).toEqual({});
    expect(omit([1, 2, 3], ['0'])).toEqual({}); // Arrays should return empty object
  });

  test('should omit properties that are undefined or null', () => {
    expect(omit(obj, ['f', 'g'])).toEqual({
      a: 1,
      b: 'hello',
      c: true,
      d: {
        e: 2
      },
      h: 0
    });
  });

  test('should handle nested objects by reference', () => {
    const omitted = omit(obj, ['a', 'b', 'c', 'f', 'g', 'h']);
    expect(omitted).toEqual({
      d: {
        e: 2
      }
    });
    expect(omitted.d).toBe(obj.d); // Should be same reference
  });

  test('should omit all properties', () => {
    const allKeys = Object.keys(obj);
    expect(omit(obj, allKeys)).toEqual({});
  });
});
