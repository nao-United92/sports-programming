// src/other/object-utility-functions-advanced-3.test.js

const { omit } = require('./object-utility-functions-advanced-3');

describe('Object Utility Advanced 3', () => {
  describe('omit', () => {
    const testObject = {
      id: 1,
      name: 'Alice',
      email: 'alice@example.com',
      password: 'securePassword',
      settings: { theme: 'dark' },
    };

    test('should omit a single specified property', () => {
      const result = omit(testObject, ['password']);
      expect(result).toEqual({
        id: 1,
        name: 'Alice',
        email: 'alice@example.com',
        settings: { theme: 'dark' },
      });
      expect(result).not.toHaveProperty('password');
    });

    test('should omit multiple specified properties', () => {
      const result = omit(testObject, ['password', 'email']);
      expect(result).toEqual({
        id: 1,
        name: 'Alice',
        settings: { theme: 'dark' },
      });
      expect(result).not.toHaveProperty('password');
      expect(result).not.toHaveProperty('email');
    });

    test('should return a shallow copy if no keys are omitted', () => {
      const result = omit(testObject, []);
      expect(result).toEqual(testObject);
      expect(result).not.toBe(testObject); // Should be a shallow copy
      expect(result.settings).toBe(testObject.settings); // Nested objects are same reference
    });

    test('should ignore keys that do not exist in the object', () => {
      const result = omit(testObject, ['nonExistentKey', 'password']);
      expect(result).toEqual({
        id: 1,
        name: 'Alice',
        email: 'alice@example.com',
        settings: { theme: 'dark' },
      });
      expect(result).not.toHaveProperty('password');
    });

    test('should return an empty object for null or undefined input object', () => {
      expect(omit(null, ['a'])).toEqual({});
      expect(omit(undefined, ['a'])).toEqual({});
    });

    test('should return a shallow copy of the object if keysToOmit is not an array', () => {
      const result = omit(testObject, null);
      expect(result).toEqual(testObject);
      expect(result).not.toBe(testObject);

      const result2 = omit(testObject, 'password');
      expect(result2).toEqual(testObject);
      expect(result2).not.toBe(testObject);
    });

    test('should handle empty object input', () => {
      expect(omit({}, ['a'])).toEqual({});
    });

    test('should handle objects with only omitted properties', () => {
      const obj = { a: 1, b: 2 };
      expect(omit(obj, ['a', 'b'])).toEqual({});
    });
  });
});
