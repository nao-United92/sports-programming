import { getByPath } from './object-get-path-utils';

describe('getByPath', () => {
  const data = {
    user: {
      id: 1,
      name: 'Alice',
      address: {
        street: '123 Main St',
        city: 'Wonderland'
      },
      phones: ['111-222-3333', '444-555-6666']
    },
    company: 'ACME Inc',
    value: null,
    status: undefined,
    count: 0
  };

  test('should retrieve a top-level property', () => {
    expect(getByPath(data, 'company')).toBe('ACME Inc');
  });

  test('should retrieve a nested property', () => {
    expect(getByPath(data, 'user.name')).toBe('Alice');
    expect(getByPath(data, 'user.address.city')).toBe('Wonderland');
  });

  test('should retrieve a property that is null or undefined', () => {
    expect(getByPath(data, 'value')).toBeNull();
    expect(getByPath(data, 'status')).toBeUndefined();
    expect(getByPath(data, 'count')).toBe(0);
  });


  test('should return undefined for a non-existent path', () => {
    expect(getByPath(data, 'user.email')).toBeUndefined();
    expect(getByPath(data, 'user.address.zip')).toBeUndefined();
    expect(getByPath(data, 'nonexistent.path')).toBeUndefined();
  });

  test('should return undefined if an intermediate path segment is not an object', () => {
    expect(getByPath(data, 'company.name')).toBeUndefined(); // 'company' is a string
    expect(getByPath(data, 'user.id.something')).toBeUndefined(); // 'id' is a number
  });

  test('should handle array elements in path', () => {
    expect(getByPath(data, 'user.phones.0')).toBe('111-222-3333');
    expect(getByPath(data, 'user.phones.1')).toBe('444-555-6666');
    expect(getByPath(data, 'user.phones.2')).toBeUndefined(); // Index out of bounds
  });

  test('should throw an error if path is not a non-empty string', () => {
    expect(() => getByPath(data, null)).toThrow('Expected path to be a non-empty string');
    expect(() => getByPath(data, '')).toThrow('Expected path to be a non-empty string');
    expect(() => getByPath(data, 123)).toThrow('Expected path to be a non-empty string');
    expect(() => getByPath(data, undefined)).toThrow('Expected path to be a non-empty string');
  });

  test('should return undefined for non-object initial input', () => {
    expect(getByPath(null, 'some.path')).toBeUndefined();
    expect(getByPath(undefined, 'some.path')).toBeUndefined();
    expect(getByPath(123, 'some.path')).toBeUndefined();
    expect(getByPath('string', 'some.path')).toBeUndefined();
  });
});