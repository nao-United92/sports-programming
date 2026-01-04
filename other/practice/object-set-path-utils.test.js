import { setByPath } from './object-set-path-utils';

describe('setByPath', () => {
  let data;

  beforeEach(() => {
    data = {
      user: {
        id: 1,
        name: 'Alice',
        address: {
          street: '123 Main St',
          city: 'Wonderland'
        }
      },
      company: 'ACME Inc'
    };
  });

  test('should set a top-level property', () => {
    const originalRef = data;
    const result = setByPath(data, 'company', 'New Company');
    expect(result.company).toBe('New Company');
    expect(result).toBe(originalRef); // Should return the same object instance
  });

  test('should set a nested property', () => {
    setByPath(data, 'user.name', 'Bob');
    expect(data.user.name).toBe('Bob');
  });

  test('should create intermediate objects if they do not exist', () => {
    setByPath(data, 'user.profile.age', 30);
    expect(data.user.profile.age).toBe(30);
  });

  test('should create intermediate arrays if path suggests an array index', () => {
    setByPath(data, 'user.phones.0', '111-222-3333');
    expect(data.user.phones).toEqual(['111-222-3333']);
    setByPath(data, 'user.phones.1.type', 'mobile'); // Should create an object at index 1
    expect(data.user.phones[1]).toEqual({
      type: 'mobile'
    });
  });

  test('should overwrite existing values', () => {
    setByPath(data, 'user.name', 'Charlie');
    expect(data.user.name).toBe('Charlie');
    setByPath(data, 'company', {
      name: 'New Corp'
    });
    expect(data.company).toEqual({
      name: 'New Corp'
    });
  });

  test('should handle path with array elements and subsequent objects', () => {
    setByPath(data, 'user.phones.0.number', '555-1234');
    expect(data.user.phones[0]).toEqual({
      number: '555-1234'
    });
  });

  test('should throw an error if obj is not a non-null object', () => {
    expect(() => setByPath(null, 'a.b', 1)).toThrow('Expected obj to be a non-null object');
    expect(() => setByPath(undefined, 'a.b', 1)).toThrow('Expected obj to be a non-null object');
    expect(() => setByPath(123, 'a.b', 1)).toThrow('Expected obj to be a non-null object');
  });

  test('should throw an error if path is not a non-empty string', () => {
    expect(() => setByPath(data, null, 1)).toThrow('Expected path to be a non-empty string');
    expect(() => setByPath(data, '', 1)).toThrow('Expected path to be a non-empty string');
  });
});
