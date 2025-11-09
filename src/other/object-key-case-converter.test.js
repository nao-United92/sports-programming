const { keysToCamel, keysToSnake } = require('./object-key-case-converter');

describe('Object Key Case Converter', () => {
  describe('keysToCamel', () => {
    it('should convert snake_case and kebab-case keys to camelCase recursively', () => {
      const input = {
        'user-profile': {
          first_name: 'John',
          'last-name': 'Doe',
          address_details: [
            { zip_code: '12345', 'city-name': 'Testville' }
          ]
        },
        account_id: 123
      };
      const expected = {
        userProfile: {
          firstName: 'John',
          lastName: 'Doe',
          addressDetails: [
            { zipCode: '12345', cityName: 'Testville' }
          ]
        },
        accountId: 123
      };
      expect(keysToCamel(input)).toEqual(expected);
    });

    it('should return non-objects as is', () => {
      expect(keysToCamel(null)).toBeNull();
      expect(keysToCamel('some_string')).toBe('some_string');
      expect(keysToCamel(123)).toBe(123);
    });
  });

  describe('keysToSnake', () => {
    it('should convert camelCase keys to snake_case recursively', () => {
      const input = {
        userProfile: {
          firstName: 'Jane',
          lastName: 'Doe',
          addressDetails: [
            { zipCode: '54321', cityName: 'Testburg' }
          ]
        },
        accountId: 456
      };
      const expected = {
        user_profile: {
          first_name: 'Jane',
          last_name: 'Doe',
          address_details: [
            { zip_code: '54321', city_name: 'Testburg' }
          ]
        },
        account_id: 456
      };
      expect(keysToSnake(input)).toEqual(expected);
    });

    it('should handle PascalCase keys', () => {
        const input = { UserProfile: { FirstName: 'Jane' } };
        const expected = { user_profile: { first_name: 'Jane' } };
        expect(keysToSnake(input)).toEqual(expected);
    });

    it('should return non-objects as is', () => {
      expect(keysToSnake(null)).toBeNull();
      expect(keysToSnake('someString')).toBe('someString');
      expect(keysToSnake(123)).toBe(123);
    });
  });
});
