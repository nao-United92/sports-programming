const { keysToCamelCase, keysToSnakeCase } = require('./object-key-converter');

describe('Object Key Case Converter', () => {
  describe('keysToCamelCase', () => {
    it('should convert snake_case keys to camelCase for a simple object', () => {
      const obj = { first_name: 'John', last_name: 'Doe' };
      const expected = { firstName: 'John', lastName: 'Doe' };
      expect(keysToCamelCase(obj)).toEqual(expected);
    });

    it('should convert kebab-case keys to camelCase', () => {
      const obj = { 'user-id': 123, 'account-type': 'premium' };
      const expected = { userId: 123, accountType: 'premium' };
      expect(keysToCamelCase(obj)).toEqual(expected);
    });

    it('should handle nested objects', () => {
      const obj = { user_info: { first_name: 'John', contact_details: { email_address: 'john@test.com' } } };
      const expected = { userInfo: { firstName: 'John', contactDetails: { emailAddress: 'john@test.com' } } };
      expect(keysToCamelCase(obj)).toEqual(expected);
    });

    it('should handle arrays of objects', () => {
      const obj = { users: [{ user_id: 1, is_active: true }, { user_id: 2, is_active: false }] };
      const expected = { users: [{ userId: 1, isActive: true }, { userId: 2, isActive: false }] };
      expect(keysToCamelCase(obj)).toEqual(expected);
    });

    it('should not modify non-object values', () => {
      const obj = { user_id: 1, score: 100, is_active: true, user_name: 'test' };
      const expected = { userId: 1, score: 100, isActive: true, userName: 'test' };
      expect(keysToCamelCase(obj)).toEqual(expected);
    });

    it('should return an empty object if an empty object is passed', () => {
      expect(keysToCamelCase({})).toEqual({});
    });

    it('should handle null and undefined values correctly', () => {
      const obj = { user_id: null, profile: undefined };
      const expected = { userId: null, profile: undefined };
      expect(keysToCamelCase(obj)).toEqual(expected);
    });
  });

  describe('keysToSnakeCase', () => {
    it('should convert camelCase keys to snake_case for a simple object', () => {
      const obj = { firstName: 'Jane', lastName: 'Doe' };
      const expected = { first_name: 'Jane', last_name: 'Doe' };
      expect(keysToSnakeCase(obj)).toEqual(expected);
    });

    it('should handle nested objects', () => {
      const obj = { userInfo: { firstName: 'Jane', contactDetails: { emailAddress: 'jane@test.com' } } };
      const expected = { user_info: { first_name: 'Jane', contact_details: { email_address: 'jane@test.com' } } };
      expect(keysToSnakeCase(obj)).toEqual(expected);
    });

    it('should handle arrays of objects', () => {
      const obj = { users: [{ userId: 1, isActive: true }, { userId: 2, isActive: false }] };
      const expected = { users: [{ user_id: 1, is_active: true }, { user_id: 2, is_active: false }] };
      expect(keysToSnakeCase(obj)).toEqual(expected);
    });

    it('should return an empty object if an empty object is passed', () => {
      expect(keysToSnakeCase({})).toEqual({});
    });

    it('should handle null and undefined values correctly', () => {
      const obj = { userId: null, userProfile: undefined };
      const expected = { user_id: null, user_profile: undefined };
      expect(keysToSnakeCase(obj)).toEqual(expected);
    });
  });
});
