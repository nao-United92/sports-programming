const { pick, omit } = require('./object-projection');

describe('Object Projection', () => {
  const testObj = { a: 1, b: 'two', c: true, d: { nested: 'value' } };

  describe('pick', () => {
    test('should return an object with only the specified keys', () => {
      expect(pick(testObj, ['a', 'c'])).toEqual({ a: 1, c: true });
    });

    test('should handle non-existent keys gracefully', () => {
      expect(pick(testObj, ['a', 'e'])).toEqual({ a: 1 });
    });

    test('should return an empty object if no keys are specified', () => {
      expect(pick(testObj, [])).toEqual({});
    });

    test('should return an empty object for null or undefined input', () => {
      expect(pick(null, ['a'])).toEqual({});
      expect(pick(undefined, ['a'])).toEqual({});
    });

    test('should not mutate the original object', () => {
      const original = { ...testObj };
      pick(testObj, ['a']);
      expect(testObj).toEqual(original);
    });
  });

  describe('omit', () => {
    test('should return an object without the specified keys', () => {
      expect(omit(testObj, ['b', 'd'])).toEqual({ a: 1, c: true });
    });

    test('should handle non-existent keys gracefully', () => {
      expect(omit(testObj, ['e', 'f'])).toEqual(testObj);
    });

    test('should return the full object if no keys are specified', () => {
      expect(omit(testObj, [])).toEqual(testObj);
    });

    test('should return an empty object for null or undefined input', () => {
      expect(omit(null, ['a'])).toEqual({});
      expect(omit(undefined, ['a'])).toEqual({});
    });

    test('should not mutate the original object', () => {
      const original = { ...testObj };
      omit(testObj, ['a']);
      expect(testObj).toEqual(original);
    });
  });
});
