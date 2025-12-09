const { pick, omit } = require('./object-selection-utils');

describe('Object Selection Utilities', () => {
  const data = { a: 1, b: 2, c: 3 };

  describe('pick', () => {
    test('should create an object with picked properties', () => {
      expect(pick(data, 'a', 'c')).toEqual({ a: 1, c: 3 });
    });

    test('should work with an array of keys', () => {
      expect(pick(data, ['a', 'c'])).toEqual({ a: 1, c: 3 });
    });

    test('should return an empty object if no keys are provided', () => {
      expect(pick(data)).toEqual({});
    });

    test('should return an empty object if non-matching keys are provided', () => {
      expect(pick(data, 'd', 'e')).toEqual({});
    });

    test('should not modify the original object', () => {
      const original = { a: 1, b: 2 };
      pick(original, 'a');
      expect(original).toEqual({ a: 1, b: 2 });
    });

    test('should return an empty object for null or undefined input', () => {
      expect(pick(null, 'a')).toEqual({});
      expect(pick(undefined, 'a', 'b')).toEqual({});
    });
  });

  describe('omit', () => {
    test('should create an object without omitted properties', () => {
      expect(omit(data, 'b')).toEqual({ a: 1, c: 3 });
    });

    test('should work with an array of keys', () => {
      expect(omit(data, ['b'])).toEqual({ a: 1, c: 3 });
    });

    test('should return the original object if no keys are omitted', () => {
      expect(omit(data)).toEqual(data);
    });

    test('should not modify the original object', () => {
      const original = { a: 1, b: 2 };
      omit(original, 'a');
      expect(original).toEqual({ a: 1, b: 2 });
    });

    test('should return an empty object for null or undefined input', () => {
      expect(omit(null, 'a')).toEqual({});
      expect(omit(undefined, 'a', 'b')).toEqual({});
    });

    test('should return the full object if non-matching keys are provided', () => {
      expect(omit(data, 'd', 'e')).toEqual(data);
    });
  });
});