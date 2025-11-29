// src/other/object-utility-advanced-2.test.js

const { pick } = require('./object-utility-advanced-2');

describe('Object Utility Advanced 2', () => {
  describe('pick', () => {
    const testObject = {
      a: 1,
      b: 'hello',
      c: true,
      d: { nested: 'value' },
      e: [1, 2, 3],
    };

    test('should pick specified properties from an object', () => {
      const result = pick(testObject, ['a', 'c']);
      expect(result).toEqual({ a: 1, c: true });
    });

    test('should return an empty object if no keys are specified', () => {
      const result = pick(testObject, []);
      expect(result).toEqual({});
    });

    test('should ignore keys that do not exist in the object', () => {
      const result = pick(testObject, ['a', 'x', 'y']);
      expect(result).toEqual({ a: 1 });
    });

    test('should return an empty object for null or undefined input object', () => {
      expect(pick(null, ['a'])).toEqual({});
      expect(pick(undefined, ['a'])).toEqual({});
    });

    test('should return an empty object for non-object input', () => {
      expect(pick(123, ['a'])).toEqual({});
      expect(pick('string', ['a'])).toEqual({});
      expect(pick([], ['a'])).toEqual({});
    });

    test('should return an empty object if keys is not an array', () => {
      expect(pick(testObject, null)).toEqual({});
      expect(pick(testObject, 'a')).toEqual({});
    });

    test('should include nested objects and arrays by reference (shallow copy)', () => {
      const result = pick(testObject, ['d', 'e']);
      expect(result).toEqual({ d: { nested: 'value' }, e: [1, 2, 3] });
      expect(result.d).toBe(testObject.d); // Should be same reference
      expect(result.e).toBe(testObject.e); // Should be same reference
    });
  });
});
