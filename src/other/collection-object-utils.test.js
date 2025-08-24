import { mapObject, filterObject } from './collection-object-utils.js';

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
});
