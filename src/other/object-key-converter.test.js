const { keysToCamel, keysToSnake } = require('./object-key-converter');

describe('Object Key Case Converter', () => {
  describe('keysToCamel', () => {
    it('should convert snake_case keys to camelCase in a simple object', () => {
      const obj = { first_name: 'John', last_name: 'Doe' };
      const expected = { firstName: 'John', lastName: 'Doe' };
      expect(keysToCamel(obj)).toEqual(expected);
    });

    it('should convert kebab-case keys to camelCase', () => {
      const obj = { 'user-id': 1, 'account-type': 'premium' };
      const expected = { userId: 1, accountType: 'premium' };
      expect(keysToCamel(obj)).toEqual(expected);
    });

    it('should convert keys in a nested object', () => {
      const obj = { user_info: { first_name: 'Jane', last_name: 'Doe' } };
      const expected = { userInfo: { firstName: 'Jane', lastName: 'Doe' } };
      expect(keysToCamel(obj)).toEqual(expected);
    });

    it('should convert keys in an array of objects', () => {
      const obj = { users: [{ user_id: 1 }, { user_id: 2 }] };
      const expected = { users: [{ userId: 1 }, { userId: 2 }] };
      expect(keysToCamel(obj)).toEqual(expected);
    });

    it('should handle a top-level array', () => {
        const arr = [{ user_id: 1, contact_info: { email_address: 'test@test.com' } }, { user_id: 2 }];
        const expected = [{ userId: 1, contactInfo: { emailAddress: 'test@test.com' } }, { userId: 2 }];
        expect(keysToCamel(arr)).toEqual(expected);
    });

    it('should handle non-object values gracefully', () => {
      expect(keysToCamel(null)).toBeNull();
      expect(keysToCamel(undefined)).toBeUndefined();
      expect(keysToCamel(123)).toBe(123);
      expect(keysToCamel('a_string')).toBe('a_string');
    });
  });

  describe('keysToSnake', () => {
    it('should convert camelCase keys to snake_case in a simple object', () => {
      const obj = { firstName: 'John', lastName: 'Doe' };
      const expected = { first_name: 'John', last_name: 'Doe' };
      expect(keysToSnake(obj)).toEqual(expected);
    });

    it('should convert keys in a nested object', () => {
      const obj = { userInfo: { firstName: 'Jane', lastName: 'Doe' } };
      const expected = { user_info: { first_name: 'Jane', last_name: 'Doe' } };
      expect(keysToSnake(obj)).toEqual(expected);
    });

    it('should convert keys in an array of objects', () => {
      const obj = { users: [{ userId: 1 }, { userId: 2 }] };
      const expected = { users: [{ user_id: 1 }, { user_id: 2 }] };
      expect(keysToSnake(obj)).toEqual(expected);
    });

    it('should handle a top-level array', () => {
        const arr = [{ userId: 1, contactInfo: { emailAddress: 'test@test.com' } }, { userId: 2 }];
        const expected = [{ user_id: 1, contact_info: { email_address: 'test@test.com' } }, { user_id: 2 }];
        expect(keysToSnake(arr)).toEqual(expected);
    });

    it('should handle non-object values gracefully', () => {
        expect(keysToSnake(null)).toBeNull();
        expect(keysToSnake(undefined)).toBeUndefined();
        expect(keysToSnake(123)).toBe(123);
        expect(keysToSnake('aString')).toBe('aString');
    });
  });
});
