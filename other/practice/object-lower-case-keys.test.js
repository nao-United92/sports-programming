const { lowerCaseKeys } = require('./object-lower-case-keys');

describe('lowerCaseKeys', () => {
  it('should convert top-level keys to lowercase', () => {
    const obj = {
      FirstName: 'John',
      LastName: 'Doe',
    };
    const expected = {
      firstname: 'John',
      lastname: 'Doe',
    };
    expect(lowerCaseKeys(obj)).toEqual(expected);
  });

  it('should convert nested object keys to lowercase recursively', () => {
    const obj = {
      UserData: {
        EmailAddress: 'john.doe@example.com',
        PhoneNumber: '123-456-7890',
      },
      OrderId: 'ABC123',
    };
    const expected = {
      userdata: {
        emailaddress: 'john.doe@example.com',
        phonenumber: '123-456-7890',
      },
      orderid: 'ABC123',
    };
    expect(lowerCaseKeys(obj)).toEqual(expected);
  });

  it('should not modify array elements', () => {
    const obj = {
      Items: [{ Name: 'item1' }, { Name: 'item2' }],
      Count: 2,
    };
    const expected = {
      items: [{ Name: 'item1' }, { Name: 'item2' }],
      count: 2,
    };
    expect(lowerCaseKeys(obj)).toEqual(expected);
  });

  it('should handle an empty object', () => {
    expect(lowerCaseKeys({})).toEqual({});
  });

  it('should return non-object values as is', () => {
    expect(lowerCaseKeys(123)).toBe(123);
    expect(lowerCaseKeys('string')).toBe('string');
    expect(lowerCaseKeys(null)).toBe(null);
    expect(lowerCaseKeys(undefined)).toBe(undefined);
  });
});
