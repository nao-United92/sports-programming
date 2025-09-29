import { keysToCamel, keysToSnake } from './object-case-style-utils.js';

describe('Object Key Case Converters', () => {
  describe('keysToCamel', () => {
    it('should convert snake_case and kebab-case keys to camelCase recursively', () => {
      const input = {
        'first_name': 'John',
        'last-name': 'Doe',
        user_details: { phone_number: '123-456-7890' },
        roles: [{ role_name: 'admin' }, { role_name: 'user' }],
      };
      const expected = {
        firstName: 'John',
        lastName: 'Doe',
        userDetails: { phoneNumber: '123-456-7890' },
        roles: [{ roleName: 'admin' }, { roleName: 'user' }],
      };
      expect(keysToCamel(input)).toEqual(expected);
    });

    it('should handle non-object inputs', () => {
      expect(keysToCamel(null)).toBeNull();
      expect(keysToCamel('string_value')).toBe('string_value');
      expect(keysToCamel(123)).toBe(123);
    });
  });

  describe('keysToSnake', () => {
    it('should convert camelCase keys to snake_case recursively', () => {
      const input = {
        firstName: 'Jane',
        lastName: 'Doe',
        userDetails: { phoneNumber: '987-654-3210' },
        roles: [{ roleName: 'editor' }, { roleName: 'viewer' }],
        'CapitalKey': 'value'
      };
      const expected = {
        first_name: 'Jane',
        last_name: 'Doe',
        user_details: { phone_number: '987-654-3210' },
        roles: [{ role_name: 'editor' }, { role_name: 'viewer' }],
        'capital_key': 'value'
      };
      expect(keysToSnake(input)).toEqual(expected);
    });

    it('should handle non-object inputs', () => {
      expect(keysToSnake(null)).toBeNull();
      expect(keysToSnake('stringValue')).toBe('stringValue');
      expect(keysToSnake(123)).toBe(123);
    });
  });
});