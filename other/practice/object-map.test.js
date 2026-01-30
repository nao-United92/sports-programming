// other/practice/object-map.test.js
const objectMap = require('./object-map');

describe('objectMap', () => {
  test('should map values of an object using a callback function', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const result = objectMap(obj, (value) => value * 2);
    expect(result).toEqual({ a: 2, b: 4, c: 6 });
  });

  test('should pass key and original object to the callback', () => {
    const obj = { x: 10, y: 20 };
    const result = objectMap(obj, (value, key, originalObj) => {
      expect(originalObj).toBe(obj); // Ensure original object reference is passed
      return `${key}-${value}`;
    });
    expect(result).toEqual({ x: 'x-10', y: 'y-20' });
  });

  test('should return an empty object for an empty input object', () => {
    expect(objectMap({}, (value) => value * 2)).toEqual({});
  });

  test('should handle objects with different value types', () => {
    const obj = { a: 1, b: 'hello', c: true };
    const result = objectMap(obj, (value) => typeof value);
    expect(result).toEqual({ a: 'number', b: 'string', c: 'boolean' });
  });

  test('should return an empty object for null or non-object inputs', () => {
    expect(objectMap(null, () => {})).toEqual({});
    expect(objectMap(undefined, () => {})).toEqual({});
    expect(objectMap(123, () => {})).toEqual({});
    expect(objectMap('string', () => {})).toEqual({});
  });

  test('should return an empty object for array inputs', () => {
    expect(objectMap([1, 2, 3], (val) => val * 2)).toEqual({});
  });

  test('should return a shallow copy if callback is not a function', () => {
    const obj = { a: 1, b: 2 };
    expect(objectMap(obj, null)).toEqual({ a: 1, b: 2 });
    expect(objectMap(obj, undefined)).toEqual({ a: 1, b: 2 });
    expect(objectMap(obj, 'not a function')).toEqual({ a: 1, b: 2 });
    expect(objectMap(obj, 123)).toEqual({ a: 1, b: 2 });
  });

  test('should not include inherited properties', () => {
    const proto = { inherited: 'prop' };
    const obj = Object.create(proto);
    obj.own = 'value';
    const result = objectMap(obj, (value) => value.toUpperCase());
    expect(result).toEqual({ own: 'VALUE' });
    expect(result.inherited).toBeUndefined(); // Ensure inherited is not mapped
  });
});
