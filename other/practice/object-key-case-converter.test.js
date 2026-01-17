import { keysToCamelCase, keysToSnakeCase } from './object-key-case-converter.js';

describe('Object Key Case Converters', () => {
  const snakeCaseObj = {
    first_name: 'John',
    last_name: 'Doe',
    address_details: {
      street_name: 'Main St',
      zip_code: '12345',
    },
    phone_numbers: [
      { phone_type: 'home', phone_number: '111-1111' },
      { phone_type: 'work', phone_number: '222-2222' },
    ]
  };

  const camelCaseObj = {
    firstName: 'John',
    lastName: 'Doe',
    addressDetails: {
      streetName: 'Main St',
      zipCode: '12345',
    },
    phoneNumbers: [
      { phoneType: 'home', phoneNumber: '111-1111' },
      { phoneType: 'work', phoneNumber: '222-2222' },
    ]
  };

  describe('keysToCamelCase', () => {
    test('should convert all keys in an object to camelCase', () => {
      expect(keysToCamelCase(snakeCaseObj)).toEqual(camelCaseObj);
    });
  });

  describe('keysToSnakeCase', () => {
    test('should convert all keys in an object to snake_case', () => {
      expect(keysToSnakeCase(camelCaseObj)).toEqual(snakeCaseObj);
    });
  });
  
  test('should handle non-object inputs', () => {
    expect(keysToCamelCase(null)).toBe(null);
    expect(keysToSnakeCase([1, 2, 3])).toEqual([1, 2, 3]);
    expect(keysToCamelCase('a string')).toBe('a string');
  });
});
