import { pick, omit } from './object-utils.js';

describe('Object Utils', () => {
  const testObj = { a: 1, b: 2, c: 3 };

  describe('pick', () => {
    test('should pick specified keys from an object', () => {
      expect(pick(testObj, ['a', 'c'])).toEqual({ a: 1, c: 3 });
    });

    test('should return an empty object if no keys are picked', () => {
      expect(pick(testObj, [])).toEqual({});
    });

    test('should ignore keys that do not exist in the object', () => {
      expect(pick(testObj, ['a', 'd'])).toEqual({ a: 1 });
    });

    test('should return an empty object if the input object is null or undefined', () => {
      expect(pick(null, ['a'])).toEqual({});
      expect(pick(undefined, ['a'])).toEqual({});
    });

    test('should return an empty object if keys are null or undefined', () => {
      expect(pick(testObj, null)).toEqual({});
      expect(pick(testObj, undefined)).toEqual({});
    });
  });

  describe('omit', () => {
    test('should omit specified keys from an object', () => {
      expect(omit(testObj, ['b'])).toEqual({ a: 1, c: 3 });
    });

    test('should return a shallow copy of the original object if no keys are omitted', () => {
      const result = omit(testObj, []);
      expect(result).toEqual(testObj);
      expect(result).not.toBe(testObj);
    });

    test('should ignore keys that do not exist in the object', () => {
      expect(omit(testObj, ['d', 'e'])).toEqual(testObj);
    });

    test('should return an empty object if the input object is null or undefined', () => {
      expect(omit(null, ['a'])).toEqual({});
      expect(omit(undefined, ['a'])).toEqual({});
    });

    test('should return a shallow copy of the object if keys are null or undefined', () => {
      const result = omit(testObj, null);
      expect(result).toEqual(testObj);
      expect(result).not.toBe(testObj);
    });
  });
});
