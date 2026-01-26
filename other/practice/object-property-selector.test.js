const { pick, omit } = require('./object-property-selector');

describe('Object Property Selectors', () => {
  const user = {
    name: 'John Doe',
    age: 30,
    isAdmin: true,
    country: 'USA'
  };

  describe('pick', () => {
    test('should select specified properties from an object', () => {
      const selected = pick(user, ['name', 'age']);
      expect(selected).toEqual({ name: 'John Doe', age: 30 });
    });

    test('should return an empty object if no keys are provided', () => {
      expect(pick(user, [])).toEqual({});
    });

    test('should ignore keys that do not exist in the object', () => {
      const selected = pick(user, ['name', 'nonExistentKey']);
      expect(selected).toEqual({ name: 'John Doe' });
    });

    test('should return an empty object for null or non-object inputs', () => {
      expect(pick(null, ['name'])).toEqual({});
      expect(pick(undefined, ['name'])).toEqual({});
      expect(pick('a string', ['length'])).toEqual({});
    });
  });

  describe('omit', () => {
    test('should omit specified properties from an object', () => {
      const result = omit(user, ['age', 'country']);
      expect(result).toEqual({ name: 'John Doe', isAdmin: true });
    });

    test('should return the original object if no keys are provided', () => {
      expect(omit(user, [])).toEqual(user);
    });

    test('should not modify the original object', () => {
      omit(user, ['age']);
      expect(user).toEqual({
        name: 'John Doe',
        age: 30,
        isAdmin: true,
        country: 'USA'
      });
    });

    test('should ignore keys that do not exist in the object', () => {
      const result = omit(user, ['nonExistentKey']);
      expect(result).toEqual(user);
    });

    test('should return an empty object for null or non-object inputs', () => {
      expect(omit(null, ['name'])).toEqual({});
    });
  });
});