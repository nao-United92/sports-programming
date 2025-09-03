import { pick, omit } from './object-subset-utils.js';

describe('Object Subset Utilities', () => {
  const data = { a: 1, b: 2, c: 3 };

  describe('pick', () => {
    it('should create an object with picked properties', () => {
      expect(pick(data, ['a', 'c'])).toEqual({ a: 1, c: 3 });
    });

    it('should not modify the original object', () => {
      pick(data, ['a']);
      expect(data).toEqual({ a: 1, b: 2, c: 3 });
    });

    it('should handle non-existent keys gracefully', () => {
      expect(pick(data, ['a', 'd'])).toEqual({ a: 1 });
    });

    it('should return an empty object if no keys are provided', () => {
      expect(pick(data, [])).toEqual({});
    });

    it('should return an empty object if the source object is null or undefined', () => {
      expect(pick(null, ['a'])).toEqual({});
      expect(pick(undefined, ['a'])).toEqual({});
    });
  });

  describe('omit', () => {
    it('should create an object without omitted properties', () => {
      expect(omit(data, ['b'])).toEqual({ a: 1, c: 3 });
    });

    it('should not modify the original object', () => {
      omit(data, ['b']);
      expect(data).toEqual({ a: 1, b: 2, c: 3 });
    });

    it('should handle non-existent keys gracefully', () => {
      expect(omit(data, ['d', 'e'])).toEqual({ a: 1, b: 2, c: 3 });
    });

    it('should return a shallow copy of the object if no keys are provided to omit', () => {
      const omitted = omit(data, []);
      expect(omitted).toEqual(data);
      expect(omitted).not.toBe(data);
    });

    it('should return an empty object if the source object is null or undefined', () => {
      expect(omit(null, ['a'])).toEqual({});
      expect(omit(undefined, ['a'])).toEqual({});
    });
  });
});
