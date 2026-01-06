const objectKeysToCamelCase = require('./object-keys-to-camel-case');

describe('objectKeysToCamelCase', () => {
  test('should convert snake_case keys to camelCase', () => {
    const obj = {
      'first_name': 'John',
      'last_name': 'Doe',
      'user_age': 30,
    };
    const expected = {
      firstName: 'John',
      lastName: 'Doe',
      userAge: 30,
    };
    expect(objectKeysToCamelCase(obj)).toEqual(expected);
  });

  test('should convert kebab-case keys to camelCase', () => {
    const obj = {
      'item-name': 'Laptop',
      'product-id': 'XYZ123',
    };
    const expected = {
      itemName: 'Laptop',
      productId: 'XYZ123',
    };
    expect(objectKeysToCamelCase(obj)).toEqual(expected);
  });

  test('should handle mixed case keys and already camelCase keys', () => {
    const obj = {
      'full_name': 'Jane Doe',
      'emailAddress': 'jane.doe@example.com',
      'date-of-birth': '1990-01-01',
    };
    const expected = {
      fullName: 'Jane Doe',
      emailAddress: 'jane.doe@example.com',
      dateOfBirth: '1990-01-01',
    };
    expect(objectKeysToCamelCase(obj)).toEqual(expected);
  });

  test('should deeply convert keys in nested objects', () => {
    const obj = {
      'user_profile': {
        'first_name': 'Alice',
        'last_name': 'Smith',
        'address_details': {
          'street_name': 'Main St',
          'zip_code': '12345',
        },
      },
      'order_id': '12345',
    };
    const expected = {
      userProfile: {
        firstName: 'Alice',
        lastName: 'Smith',
        addressDetails: {
          streetName: 'Main St',
          zipCode: '12345',
        },
      },
      orderId: '12345',
    };
    expect(objectKeysToCamelCase(obj)).toEqual(expected);
  });

  test('should deeply convert keys in arrays of objects', () => {
    const arr = [{
      'user_data': {
        'user_id': 1,
        'user_name': 'Test User'
      }
    }, {
      'product_info': {
        'product_id': 'P001',
        'product_name': 'Test Product'
      }
    }];
    const expected = [{
      userData: {
        userId: 1,
        userName: 'Test User'
      }
    }, {
      productInfo: {
        productId: 'P001',
        productName: 'Test Product'
      }
    }];
    expect(objectKeysToCamelCase(arr)).toEqual(expected);
  });

  test('should handle arrays of primitives without modification', () => {
    const arr = ['one_item', 'second-item', 3];
    expect(objectKeysToCamelCase(arr)).toEqual(arr);
  });

  test('should handle null and undefined values', () => {
    const obj = {
      'some_key': null,
      'another_key': undefined,
    };
    const expected = {
      someKey: null,
      anotherKey: undefined,
    };
    expect(objectKeysToCamelCase(obj)).toEqual(expected);
    expect(objectKeysToCamelCase(null)).toBeNull();
    expect(objectKeysToCamelCase(undefined)).toBeUndefined();
  });

  test('should handle empty objects and arrays', () => {
    expect(objectKeysToCamelCase({})).toEqual({});
    expect(objectKeysToCamelCase([])).toEqual([]);
  });

  test('should handle numbers and strings directly', () => {
    expect(objectKeysToCamelCase(123)).toEqual(123);
    expect(objectKeysToCamelCase('test_string')).toEqual('test_string');
  });
});
