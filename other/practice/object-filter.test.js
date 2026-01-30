// other/practice/object-filter.test.js
const objectFilter = require('./object-filter');

describe('objectFilter', () => {
  test('should filter properties based on a predicate function', () => {
    const obj = { a: 1, b: 2, c: 3, d: 4 };
    const result = objectFilter(obj, (value) => value % 2 === 0);
    expect(result).toEqual({ b: 2, d: 4 });
  });

  test('should pass key and original object to the predicate', () => {
    const obj = { name: 'Alice', age: 30, city: 'New York' };
    const result = objectFilter(obj, (value, key, originalObj) => {
      expect(originalObj).toBe(obj); // Ensure original object reference is passed
      return typeof value === 'string' && key.startsWith('n');
    });
    expect(result).toEqual({ name: 'Alice' });
  });

  test('should return an empty object if no properties match the predicate', () => {
    const obj = { a: 1, b: 2 };
    const result = objectFilter(obj, (value) => value > 10);
    expect(result).toEqual({});
  });

  test('should return an empty object for an empty input object', () => {
    expect(objectFilter({}, (value) => value > 0)).toEqual({});
  });

  test('should handle objects with different value types', () => {
    const obj = { a: 1, b: 'hello', c: true, d: null };
    const result = objectFilter(obj, (value) => typeof value === 'string');
    expect(result).toEqual({ b: 'hello' });
  });

  test('should return an empty object for null or non-object inputs', () => {
    expect(objectFilter(null, () => true)).toEqual({});
    expect(objectFilter(undefined, () => true)).toEqual({});
    expect(objectFilter(123, () => true)).toEqual({});
    expect(objectFilter('string', () => true)).toEqual({});
  });

  test('should return an empty object for array inputs', () => {
    expect(objectFilter([1, 2, 3], () => true)).toEqual({});
  });

  test('should return an empty object if predicate is not a function', () => {
    const obj = { a: 1, b: 2 };
    expect(objectFilter(obj, null)).toEqual({});
    expect(objectFilter(obj, undefined)).toEqual({});
    expect(objectFilter(obj, 'not a function')).toEqual({});
    expect(objectFilter(obj, 123)).toEqual({});
  });

  test('should not include inherited properties', () => {
    const proto = { inherited: 'prop', filterMe: 5 };
    const obj = Object.create(proto);
    obj.own = 10;
    obj.anotherOwn = 20;
    const result = objectFilter(obj, (value) => value > 15);
    expect(result).toEqual({ anotherOwn: 20 });
    expect(result.inherited).toBeUndefined();
    expect(result.filterMe).toBeUndefined();
  });
});
