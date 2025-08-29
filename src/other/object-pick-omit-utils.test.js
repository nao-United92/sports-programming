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

    it('should return an empty object if keys do not exist', () => {
      expect(pick(data, ['d', 'e'])).toEqual({});
    });

    it('should return an empty object for null or undefined input', () => {
      expect(pick(null, ['a'])).toEqual({});
      expect(pick(undefined, ['a'])).toEqual({});
    });
  });

  describe('omit', () => {
    it('should create an object without omitted properties', () => {
      expect(omit(data, ['b'])).toEqual({ a: 1, c: 3 });
    });

    it('should not modify the original object', () => {
      const original = { ...data };
      omit(data, ['b']);
      expect(data).toEqual(original);
    });

    it('should return the same object if keys to omit do not exist', () => {
      expect(omit(data, ['d', 'e'])).toEqual(data);
    });

    it('should return an empty object for null or undefined input', () => {
      expect(omit(null, ['a'])).toEqual({});
      expect(omit(undefined, ['a'])).toEqual({});
    });
  });
});