import { pick, omit } from './object-pick-omit-utils.js';

describe('object-pick-omit-utils', () => {
  describe('pick', () => {
    const obj = { a: 1, b: '2', c: true };

    it('should return an object with only the specified keys', () => {
      expect(pick(obj, ['a', 'c'])).toEqual({ a: 1, c: true });
    });

    it('should return an empty object if no keys are specified', () => {
      expect(pick(obj, [])).toEqual({});
    });

    it('should ignore keys that do not exist in the source object', () => {
      expect(pick(obj, ['a', 'd'])).toEqual({ a: 1 });
    });

    it('should return an empty object for null or non-object inputs', () => {
      expect(pick(null, ['a'])).toEqual({});
      expect(pick(undefined, ['a'])).toEqual({});
      expect(pick(123, ['a'])).toEqual({});
    });
  });

  describe('omit', () => {
    const obj = { a: 1, b: '2', c: true };

    it('should return an object without the specified keys', () => {
      expect(omit(obj, ['b'])).toEqual({ a: 1, c: true });
    });

    it('should return the original object if no keys are specified', () => {
      expect(omit(obj, [])).toEqual(obj);
    });

    it('should ignore keys that do not exist in the source object', () => {
      expect(omit(obj, ['d', 'e'])).toEqual(obj);
    });

    it('should return an empty object for null or non-object inputs', () => {
      expect(omit(null, ['a'])).toEqual({});
      expect(omit(undefined, ['a'])).toEqual({});
      expect(omit(123, ['a'])).toEqual({});
    });
  });
});
