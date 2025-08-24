import { mapObject, filterObject, isEmpty, pick } from './collection-object-utils.js';

describe('Collection Object Utilities', () => {
  const data = { a: 1, b: 2, c: 3 };

  describe('mapObject', () => {
    it('should map values of an object', () => {
      const mapped = mapObject(data, (value) => value * 2);
      expect(mapped).toEqual({ a: 2, b: 4, c: 6 });
    });

    it('should pass key and object to iteratee', () => {
      const mapped = mapObject(data, (value, key) => `${key}-${value}`);
      expect(mapped).toEqual({ a: 'a-1', b: 'b-2', c: 'c-3' });
    });

    it('should return an empty object for an empty input', () => {
      expect(mapObject({}, (value) => value)).toEqual({});
    });
  });

  describe('filterObject', () => {
    it('should filter values of an object based on a predicate', () => {
      const filtered = filterObject(data, (value) => value > 1);
      expect(filtered).toEqual({ b: 2, c: 3 });
    });

    it('should pass key and object to predicate', () => {
      const filtered = filterObject(data, (value, key) => key === 'a' || value === 3);
      expect(filtered).toEqual({ a: 1, c: 3 });
    });

    it('should return an empty object if no values match the predicate', () => {
      expect(filterObject(data, (value) => value > 10)).toEqual({});
    });

    it('should return an empty object for an empty input', () => {
      expect(filterObject({}, (value) => value)).toEqual({});
    });
  });

  describe('isEmpty', () => {
    it('should return true for null or undefined', () => {
      expect(isEmpty(null)).toBe(true);
      expect(isEmpty(undefined)).toBe(true);
    });

    it('should return true for empty string, array, map, set, and object', () => {
      expect(isEmpty('')).toBe(true);
      expect(isEmpty([])).toBe(true);
      expect(isEmpty(new Map())).toBe(true);
      expect(isEmpty(new Set())).toBe(true);
      expect(isEmpty({})).toBe(true);
    });

    it('should return false for non-empty string, array, map, set, and object', () => {
      expect(isEmpty('hello')).toBe(false);
      expect(isEmpty([1, 2])).toBe(false);
      expect(isEmpty(new Map([['a', 1]]))).toBe(false);
      expect(isEmpty(new Set([1, 2]))).toBe(false);
      expect(isEmpty({ a: 1 })).toBe(false);
    });

    it('should return false for numbers and booleans', () => {
      expect(isEmpty(0)).toBe(false);
      expect(isEmpty(123)).toBe(false);
      expect(isEmpty(true)).toBe(false);
      expect(isEmpty(false)).toBe(false);
    });
  });

  describe('pick', () => {
    const obj = { a: 1, b: 2, c: 3, d: { e: 4 } };

    it('should pick a single property', () => {
      expect(pick(obj, ['a'])).toEqual({ a: 1 });
    });

    it('should pick multiple properties', () => {
      expect(pick(obj, ['a', 'c'])).toEqual({ a: 1, c: 3 });
    });

    it('should ignore non-existent properties', () => {
      expect(pick(obj, ['a', 'x'])).toEqual({ a: 1 });
    });

    it('should return an empty object if no properties are picked', () => {
      expect(pick(obj, ['x', 'y'])).toEqual({});
    });

    it('should return an empty object for an empty input object', () => {
      expect(pick({}, ['a'])).toEqual({});
    });

    it('should return an empty object for non-object input', () => {
      expect(pick(null, ['a'])).toEqual({});
      expect(pick(undefined, ['a'])).toEqual({});
      expect(pick('string', ['a'])).toEqual({});
      expect(pick(123, ['a'])).toEqual({});
    });

    it('should pick properties even if their value is null or undefined', () => {
      const testObj = { a: 1, b: null, c: undefined };
      expect(pick(testObj, ['a', 'b', 'c'])).toEqual({ a: 1, b: null, c: undefined });
    });
  });
});
