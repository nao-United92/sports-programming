const { pick, omit } = require('./object-subset-utils');

describe('Object Subset Utilities', () => {
  const testObj = { a: 1, b: 2, c: 3 };

  describe('pick', () => {
    test('should pick specified keys from an object', () => {
      expect(pick(testObj, ['a', 'c'])).toEqual({ a: 1, c: 3 });
    });

    test('should return an empty object if no keys are matched', () => {
      expect(pick(testObj, ['d', 'e'])).toEqual({});
    });

    test('should return an empty object for null or undefined input', () => {
      expect(pick(null, ['a'])).toEqual({});
      expect(pick(undefined, ['a'])).toEqual({});
    });

    test('should handle an empty keys array', () => {
      expect(pick(testObj, [])).toEqual({});
    });
  });

  describe('omit', () => {
    test('should omit specified keys from an object', () => {
      expect(omit(testObj, ['b'])).toEqual({ a: 1, c: 3 });
    });

    test('should return a new object instance', () => {
        const result = omit(testObj, ['b']);
        expect(result).not.toBe(testObj);
    });

    test('should return the original object if no keys are omitted', () => {
      expect(omit(testObj, ['d', 'e'])).toEqual(testObj);
    });

    test('should return an empty object for null or undefined input', () => {
      expect(omit(null, ['a'])).toEqual({});
      expect(omit(undefined, ['a'])).toEqual({});
    });

    test('should handle an empty keys array', () => {
      expect(omit(testObj, [])).toEqual(testObj);
    });
  });
});