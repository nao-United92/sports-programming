import { deepClone, isEmptyObject, getNestedProperty, toCamelCaseKeys } from './object-utils';

describe('deepClone', () => {
  test('should deep clone a simple object', () => {
    const obj = { a: 1, b: { c: 2 } };
    const clonedObj = deepClone(obj);
    expect(clonedObj).toEqual(obj);
    expect(clonedObj).not.toBe(obj);
    expect(clonedObj.b).not.toBe(obj.b);
  });

  test('should deep clone an array with objects', () => {
    const arr = [1, { a: 2 }, [3, 4]];
    const clonedArr = deepClone(arr);
    expect(clonedArr).toEqual(arr);
    expect(clonedArr).not.toBe(arr);
    expect(clonedArr[1]).not.toBe(arr[1]);
    expect(clonedArr[2]).not.toBe(arr[2]);
  });

  test('should handle null and non-object values', () => {
    expect(deepClone(null)).toBe(null);
    expect(deepClone(123)).toBe(123);
    expect(deepClone('string')).toBe('string');
  });

  test('should clone Date objects', () => {
    const date = new Date();
    const clonedDate = deepClone(date);
    expect(clonedDate).toEqual(date);
    expect(clonedDate).not.toBe(date);
  });

  test('should clone RegExp objects', () => {
    const regex = /abc/g;
    const clonedRegex = deepClone(regex);
    expect(clonedRegex).toEqual(regex);
    expect(clonedRegex).not.toBe(regex);
  });
});

describe('isEmptyObject', () => {
  test('should return true for an empty object', () => {
    expect(isEmptyObject({})).toBe(true);
  });

  test('should return false for a non-empty object', () => {
    expect(isEmptyObject({ a: 1 })).toBe(false);
  });

  test('should return false for an array', () => {
    expect(isEmptyObject([])).toBe(false);
  });

  test('should return false for null or undefined', () => {
    expect(isEmptyObject(null)).toBe(false);
    expect(isEmptyObject(undefined)).toBe(false);
  });
});

describe('getNestedProperty', () => {
  const obj = {
    user: {
      id: 1,
      name: 'John Doe',
      address: {
        city: 'New York',
        zip: '10001'
      }
    },
    settings: {
      theme: 'dark'
    }
  };

  test('should return the value of a nested property', () => {
    expect(getNestedProperty(obj, 'user.name')).toBe('John Doe');
    expect(getNestedProperty(obj, 'user.address.city')).toBe('New York');
  });

  test('should return undefined if property not found and no default value', () => {
    expect(getNestedProperty(obj, 'user.address.street')).toBeUndefined();
    expect(getNestedProperty(obj, 'nonexistent.path')).toBeUndefined();
  });

  test('should return default value if property not found', () => {
    expect(getNestedProperty(obj, 'user.address.street', 'N/A')).toBe('N/A');
    expect(getNestedProperty(obj, 'nonexistent.path', null)).toBe(null);
  });

  test('should handle null or undefined objects gracefully', () => {
    expect(getNestedProperty(null, 'user.name')).toBeUndefined();
    expect(getNestedProperty(undefined, 'user.name')).toBeUndefined();
    expect(getNestedProperty(null, 'user.name', 'default')).toBe('default');
  });

  test('should return the object itself if path is empty', () => {
    expect(getNestedProperty(obj, '')).toEqual(obj);
  });
});

describe('toCamelCaseKeys', () => {
  test('should convert snake_case keys to camelCase', () => {
    const obj = { first_name: 'John', last_name: 'Doe' };
    const expected = { firstName: 'John', lastName: 'Doe' };
    expect(toCamelCaseKeys(obj)).toEqual(expected);
  });

  test('should handle nested objects', () => {
    const obj = { user_info: { first_name: 'John' } };
    const expected = { userInfo: { firstName: 'John' } };
    expect(toCamelCaseKeys(obj)).toEqual(expected);
  });

  test('should handle arrays of objects', () => {
    const obj = { users: [{ user_name: 'John' }, { user_name: 'Jane' }] };
    const expected = { users: [{ userName: 'John' }, { userName: 'Jane' }] };
    expect(toCamelCaseKeys(obj)).toEqual(expected);
  });
});
