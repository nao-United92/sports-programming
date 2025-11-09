const {
  deepCamelCaseKeys,
  deepSnakeCaseKeys,
} = require('./object-case-style-utils');

describe('deepCamelCaseKeys', () => {
  test('should convert all keys in a nested object to camelCase', () => {
    const snake_case_obj = {
      first_name: 'John',
      last_name: 'Doe',
      address_details: {
        street_name: 'Main St',
        zip_code: '12345',
        contact_info: [
          { contact_type: 'email', contact_value: 'john.doe@email.com' },
          { contact_type: 'phone', contact_value: '555-1234' },
        ],
      },
      user_roles: ['admin', 'editor'],
    };

    const expected_camel_case_obj = {
      firstName: 'John',
      lastName: 'Doe',
      addressDetails: {
        streetName: 'Main St',
        zipCode: '12345',
        contactInfo: [
          { contactType: 'email', contactValue: 'john.doe@email.com' },
          { contactType: 'phone', contactValue: '555-1234' },
        ],
      },
      userRoles: ['admin', 'editor'],
    };

    expect(deepCamelCaseKeys(snake_case_obj)).toEqual(
      expected_camel_case_obj
    );
  });

  test('should handle arrays of objects', () => {
    const snake_case_array = [
      { user_id: 1, user_name: 'test_one' },
      { user_id: 2, user_name: 'test_two' },
    ];
    const expected_camel_case_array = [
      { userId: 1, userName: 'test_one' },
      { userId: 2, userName: 'test_two' },
    ];
    expect(deepCamelCaseKeys(snake_case_array)).toEqual(
      expected_camel_case_array
    );
  });

  test('should return non-objects as is', () => {
    expect(deepCamelCaseKeys(null)).toBeNull();
    expect(deepCamelCaseKeys('a_string')).toBe('a_string');
    expect(deepCamelCaseKeys(123)).toBe(123);
  });
});

describe('deepSnakeCaseKeys', () => {
  test('should convert all keys in a nested object to snake_case', () => {
    const camelCaseObj = {
      firstName: 'Jane',
      lastName: 'Doe',
      addressDetails: {
        streetName: 'Second St',
        zipCode: '67890',
        contactInfo: [
          { contactType: 'email', contactValue: 'jane.doe@email.com' },
          { contactType: 'phone', contactValue: '555-5678' },
        ],
      },
      userRoles: ['viewer'],
    };

    const expected_snake_case_obj = {
      first_name: 'Jane',
      last_name: 'Doe',
      address_details: {
        street_name: 'Second St',
        zip_code: '67890',
        contact_info: [
          { contact_type: 'email', contact_value: 'jane.doe@email.com' },
          { contact_type: 'phone', contact_value: '555-5678' },
        ],
      },
      user_roles: ['viewer'],
    };

    expect(deepSnakeCaseKeys(camelCaseObj)).toEqual(expected_snake_case_obj);
  });

  test('should handle arrays of objects', () => {
    const camelCaseArray = [
      { userId: 1, userName: 'testOne' },
      { userId: 2, userName: 'testTwo' },
    ];
    const expected_snake_case_array = [
      { user_id: 1, user_name: 'testOne' },
      { user_id: 2, user_name: 'testTwo' },
    ];
    expect(deepSnakeCaseKeys(camelCaseArray)).toEqual(
      expected_snake_case_array
    );
  });

  test('should return non-objects as is', () => {
    expect(deepSnakeCaseKeys(null)).toBeNull();
    expect(deepSnakeCaseKeys('aString')).toBe('aString');
    expect(deepSnakeCaseKeys(123)).toBe(123);
  });
});
