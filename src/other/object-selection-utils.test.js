const { pick, omit } = require('./object-selection-utils');

describe('Object Selection Utilities', () => {
  const original = { a: 1, b: 2, c: 3 };

  describe('pick', () => {
    test('should pick specified keys from an object', () => {
      expect(pick(original, ['a', 'c'])).toEqual({ a: 1, c: 3 });
    });

    test('should return an empty object if no keys are picked', () => {
      expect(pick(original, ['d', 'e'])).toEqual({});
    });

    test('should return an empty object for null or non-object input', () => {
      expect(pick(null, ['a'])).toEqual({});
      expect(pick(undefined, ['a'])).toEqual({});
      expect(pick(123, ['a'])).toEqual({});
    });
  });

  describe('omit', () => {
    test('should omit specified keys from an object', () => {
      expect(omit(original, ['a', 'c'])).toEqual({ b: 2 });
    });

    test('should return a new object with all original keys if no keys are omitted', () => {
      const result = omit(original, ['d', 'e']);
      expect(result).toEqual(original);
      expect(result).not.toBe(original); // Ensure it's a new object
    });

    test('should return an empty object for null or non-object input', () => {
      expect(omit(null, ['a'])).toEqual({});
      expect(omit(undefined, ['a'])).toEqual({});
      expect(omit(123, ['a'])).toEqual({});
    });
  });
});
