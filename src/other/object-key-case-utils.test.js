import { camelCaseKeys, snakeCaseKeys } from './object-key-case-utils.js';

describe('camelCaseKeys', () => {
  test('should convert top-level keys to camelCase', () => {
    const obj = { 'first_name': 'John', 'last-name': 'Doe' };
    const expected = { firstName: 'John', lastName: 'Doe' };
    expect(camelCaseKeys(obj)).toEqual(expected);
  });

  test('should convert nested keys to camelCase', () => {
    const obj = {
      'user_info': {
        'full_name': 'Jane Doe',
        'email_address': 'jane@example.com',
      },
      'order_details': {
        'item_id': 123,
        'item_price': 45.67,
      },
    };
    const expected = {
      userInfo: {
        fullName: 'Jane Doe',
        emailAddress: 'jane@example.com',
      },
      orderDetails: {
        itemId: 123,
        itemPrice: 45.67,
      },
    };
    expect(camelCaseKeys(obj)).toEqual(expected);
  });

  test('should handle arrays of objects', () => {
    const arr = [
      { 'first_name': 'John' },
      { 'last-name': 'Doe' },
    ];
    const expected = [
      { firstName: 'John' },
      { lastName: 'Doe' },
    ];
    expect(camelCaseKeys(arr)).toEqual(expected);
  });

  test('should not modify non-object values', () => {
    const str = 'hello_world';
    expect(camelCaseKeys(str)).toBe(str);

    const num = 123;
    expect(camelCaseKeys(num)).toBe(num);

    const bool = true;
    expect(camelCaseKeys(bool)).toBe(bool);
  });

  test('should handle empty objects', () => {
    expect(camelCaseKeys({})).toEqual({});
  });
});

describe('snakeCaseKeys', () => {
  test('should convert top-level keys to snake_case', () => {
    const obj = { firstName: 'John', lastName: 'Doe' };
    const expected = { first_name: 'John', last_name: 'Doe' };
    expect(snakeCaseKeys(obj)).toEqual(expected);
  });

  test('should convert nested keys to snake_case', () => {
    const obj = {
      userInfo: {
        fullName: 'Jane Doe',
        emailAddress: 'jane@example.com',
      },
      orderDetails: {
        itemId: 123,
        itemPrice: 45.67,
      },
    };
    const expected = {
      user_info: {
        full_name: 'Jane Doe',
        email_address: 'jane@example.com',
      },
      order_details: {
        item_id: 123,
        item_price: 45.67,
      },
    };
    expect(snakeCaseKeys(obj)).toEqual(expected);
  });

  test('should handle arrays of objects', () => {
    const arr = [
      { firstName: 'John' },
      { lastName: 'Doe' },
    ];
    const expected = [
      { first_name: 'John' },
      { last_name: 'Doe' },
    ];
    expect(snakeCaseKeys(arr)).toEqual(expected);
  });

  test('should not modify non-object values', () => {
    const str = 'helloWorld';
    expect(snakeCaseKeys(str)).toBe(str);

    const num = 123;
    expect(snakeCaseKeys(num)).toBe(num);

    const bool = true;
    expect(snakeCaseKeys(bool)).toBe(bool);
  });

  test('should handle empty objects', () => {
    expect(snakeCaseKeys({})).toEqual({});
  });
});
