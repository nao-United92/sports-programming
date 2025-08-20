import { pick, omit } from './object-utils.js';

describe('Object Utilities', () => {
  const data = { a: 1, b: 2, c: 3 };

  describe('pick', () => {
    test('should return an object with picked properties', () => {
      expect(pick(data, ['a', 'c'])).toEqual({ a: 1, c: 3 });
    });

    test('should not include properties that are not in the object', () => {
      expect(pick(data, ['a', 'd'])).toEqual({ a: 1 });
    });

    test('should return an empty object if no keys are picked', () => {
      expect(pick(data, [])).toEqual({});
    });

    test('should return an empty object for null or non-object inputs', () => {
      expect(pick(null, ['a'])).toEqual({});
      expect(pick(undefined, ['a'])).toEqual({});
      expect(pick('string', ['a'])).toEqual({});
    });
  });

  describe('omit', () => {
    test('should return an object with omitted properties', () => {
      expect(omit(data, ['b'])).toEqual({ a: 1, c: 3 });
    });

    test('should not change the object if omitted keys do not exist', () => {
      expect(omit(data, ['d', 'e'])).toEqual({ a: 1, b: 2, c: 3 });
    });

    test('should return the same object if no keys are omitted', () => {
      expect(omit(data, [])).toEqual({ a: 1, b: 2, c: 3 });
    });

    test('should return an empty object for null or non-object inputs', () => {
        expect(omit(null, ['a'])).toEqual({});
        expect(omit(undefined, ['a'])).toEqual({});
        expect(omit('string', ['a'])).toEqual({});
    });
  });
});