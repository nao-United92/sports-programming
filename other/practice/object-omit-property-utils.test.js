import { omitProperty } from './object-omit-property-utils';

describe('omitProperty', () => {
  const user = {
    id: 1,
    name: 'Alice',
    age: 30,
    email: 'alice@example.com'
  };

  test('should omit a single property', () => {
    const result = omitProperty(user, 'age');
    expect(result).toEqual({
      id: 1,
      name: 'Alice',
      email: 'alice@example.com'
    });
    expect(result).not.toBe(user); // Should return a new object
  });

  test('should omit multiple properties', () => {
    const result = omitProperty(user, ['age', 'email']);
    expect(result).toEqual({
      id: 1,
      name: 'Alice'
    });
    expect(result).not.toBe(user);
  });

  test('should handle non-existent properties gracefully', () => {
    const result = omitProperty(user, ['age', 'address']);
    expect(result).toEqual({
      id: 1,
      name: 'Alice',
      email: 'alice@example.com'
    });
    expect(result).not.toBe(user);
  });

  test('should not mutate the original object', () => {
    const originalUser = { ...user
    };
    omitProperty(originalUser, 'age');
    expect(originalUser).toEqual(user);
  });

  test('should return an empty object if all properties are omitted', () => {
    const result = omitProperty(user, ['id', 'name', 'age', 'email']);
    expect(result).toEqual({});
  });

  test('should handle empty object input', () => {
    expect(omitProperty({}, 'anyKey')).toEqual({});
  });

  test('should return non-object types as is', () => {
    expect(omitProperty(null, 'key')).toBeNull();
    expect(omitProperty(undefined, 'key')).toBeUndefined();
    expect(omitProperty(123, 'key')).toBe(123);
    expect(omitProperty('string', 'key')).toBe('string');
  });

  test('should throw an error if keysToOmit is not a string or array of strings', () => {
    expect(() => omitProperty(user, null)).toThrow('Expected keysToOmit to be a string or an array of strings');
    expect(() => omitProperty(user, 123)).toThrow('Expected keysToOmit to be a string or an array of strings');
    expect(() => omitProperty(user, {})).toThrow('Expected keysToOmit to be a string or an array of strings');
  });
});
