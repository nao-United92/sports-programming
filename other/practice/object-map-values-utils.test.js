const mapValues = require('./object-map-values-utils');

describe('mapValues', () => {
  test('should map values of an object using the iteratee function', () => {
    const obj = {
      a: 1,
      b: 2,
      c: 3
    };
    const iteratee = (value) => value * 2;
    expect(mapValues(obj, iteratee)).toEqual({
      a: 2,
      b: 4,
      c: 6
    });
  });

  test('should pass key and object to the iteratee', () => {
    const obj = {
      a: 1,
      b: 2
    };
    const iteratee = (value, key, sourceObj) => `${key}-${value}-${sourceObj.a}`;
    expect(mapValues(obj, iteratee)).toEqual({
      a: 'a-1-1',
      b: 'b-2-1'
    });
  });

  test('should return an empty object for an empty input object', () => {
    expect(mapValues({}, (value) => value * 2)).toEqual({});
  });

  test('should handle non-object input by returning an empty object', () => {
    expect(mapValues(null, (value) => value * 2)).toEqual({});
    expect(mapValues(undefined, (value) => value * 2)).toEqual({});
    expect(mapValues(123, (value) => value * 2)).toEqual({});
    expect(mapValues('string', (value) => value * 2)).toEqual({});
    expect(mapValues([1, 2], (value) => value * 2)).toEqual({}); // Arrays are not objects for this utility
  });

  test('should return a shallow copy if iteratee is not a function', () => {
    const obj = {
      a: 1,
      b: 2
    };
    expect(mapValues(obj, null)).toEqual({
      a: 1,
      b: 2
    });
    expect(mapValues(obj, undefined)).toEqual({
      a: 1,
      b: 2
    });
    expect(mapValues(obj, 'not a function')).toEqual({
      a: 1,
      b: 2
    });
  });

  test('should handle objects with different data types', () => {
    const obj = {
      a: 1,
      b: 'hello',
      c: true
    };
    const iteratee = (value) => typeof value;
    expect(mapValues(obj, iteratee)).toEqual({
      a: 'number',
      b: 'string',
      c: 'boolean'
    });
  });
});
