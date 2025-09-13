import { pick, omit } from './object-pick-omit-utils.js';

describe('object-pick-omit-utils', () => {
  const data = { a: 1, b: 2, c: 3 };

  describe('pick', () => {
    it('should create an object with picked properties', () => {
      expect(pick(data, ['a', 'c'])).toEqual({ a: 1, c: 3 });
    });

    it('should not modify the original object', () => {
      const original = { ...data };
      pick(data, ['a']);
      expect(data).toEqual(original);
    });

    it('should return an empty object if no keys are provided', () => {
      expect(pick(data, [])).toEqual({});
    });

    it('should ignore keys that do not exist in the source object', () => {
      expect(pick(data, ['a', 'd'])).toEqual({ a: 1 });
    });

    it('should handle null or undefined source object', () => {
      expect(pick(null, ['a'])).toEqual({});
      expect(pick(undefined, ['a'])).toEqual({});
    });
  });

  describe('omit', () => {
    it('should create an object with omitted properties', () => {
      expect(omit(data, ['b'])).toEqual({ a: 1, c: 3 });
    });

    it('should not modify the original object', () => {
      const original = { ...data };
      omit(data, ['a']);
      expect(data).toEqual(original);
    });

    it('should return a copy of the object if no keys are provided', () => {
      expect(omit(data, [])).toEqual(data);
    });

    it('should ignore keys that do not exist in the source object', () => {
      expect(omit(data, ['d', 'e'])).toEqual(data);
    });

    it('should handle null or undefined source object', () => {
      expect(omit(null, ['a'])).toEqual({});
      expect(omit(undefined, ['a'])).toEqual({});
    });
  });
});
