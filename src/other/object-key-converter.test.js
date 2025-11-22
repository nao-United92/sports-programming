import { keysToSnakeCase } from './object-key-converter.js';

describe('keysToSnakeCase', () => {
  test('should convert keys of a simple object to snake_case', () => {
    const obj = { firstName: 'John', lastName: 'Doe' };
    const expected = { first_name: 'John', last_name: 'Doe' };
    expect(keysToSnakeCase(obj)).toEqual(expected);
  });

  test('should convert keys of a nested object to snake_case', () => {
    const obj = {
      personData: { firstName: 'Jane', lastName: 'Doe' },
      contactInfo: { emailAddress: 'jane.doe@example.com' },
    };
    const expected = {
      person_data: { first_name: 'Jane', last_name: 'Doe' },
      contact_info: { email_address: 'jane.doe@example.com' },
    };
    expect(keysToSnakeCase(obj)).toEqual(expected);
  });

  test('should handle an array of objects', () => {
    const arr = [
      { userProfile: { userId: 1 } },
      { userProfile: { userId: 2 } },
    ];
    const expected = [
      { user_profile: { user_id: 1 } },
      { user_profile: { user_id: 2 } },
    ];
    expect(keysToSnakeCase(arr)).toEqual(expected);
  });

  test('should not change values that are not objects or arrays', () => {
    expect(keysToSnakeCase('a string')).toBe('a string');
    expect(keysToSnakeCase(123)).toBe(123);
    expect(keysToSnakeCase(null)).toBe(null);
  });

  test('should handle empty objects and arrays', () => {
    expect(keysToSnakeCase({})).toEqual({});
    expect(keysToSnakeCase([])).toEqual([]);
  });

  test('should handle complex nested structures', () => {
    const obj = {
      dataApi: {
        usersList: [
          {
            userInfo: { userId: 'user1', displayName: 'User One' },
            userRoles: ['admin', 'editor'],
          },
        ],
        paginationDetails: { currentPage: 1, itemsPerPage: 10 },
      },
    };
    const expected = {
      data_api: {
        users_list: [
          {
            user_info: { user_id: 'user1', display_name: 'User One' },
            user_roles: ['admin', 'editor'],
          },
        ],
        pagination_details: { current_page: 1, items_per_page: 10 },
      },
    };
    expect(keysToSnakeCase(obj)).toEqual(expected);
  });
});