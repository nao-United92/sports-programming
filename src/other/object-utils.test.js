import { pick, omit } from './object-utils.js';

describe('Object Utilities', () => {
  describe('pick', () => {
    it('should create an object with picked properties', () => {
      const obj = { a: 1, b: '2', c: 3 };
      expect(pick(obj, ['a', 'c'])).toEqual({ a: 1, c: 3 });
    });

    it('should return an empty object if source object is null or undefined', () => {
      expect(pick(null, ['a'])).toEqual({});
      expect(pick(undefined, ['a'])).toEqual({});
    });

    it('should ignore keys that are not in the object', () => {
      const obj = { a: 1, b: 2 };
      expect(pick(obj, ['a', 'c'])).toEqual({ a: 1 });
    });
  });

  describe('omit', () => {
    it('should create an object without omitted properties', () => {
      const obj = { a: 1, b: '2', c: 3 };
      expect(omit(obj, ['a', 'c'])).toEqual({ b: '2' });
    });

    it('should return an empty object if source object is null or undefined', () => {
      expect(omit(null, ['a'])).toEqual({});
      expect(omit(undefined, ['a'])).toEqual({});
    });

    it('should ignore keys that are not in the object', () => {
      const obj = { a: 1, b: 2 };
      expect(omit(obj, ['c'])).toEqual({ a: 1, b: 2 });
    });
  });
});
