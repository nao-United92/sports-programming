import { deepClone, isEmptyObject, getNestedProperty, toCamelCaseKeys, setNestedProperty, omit, pick, mergeDeep, invertObject } from './object-utils';

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

describe('setNestedProperty', () => {
  test('should set a top-level property', () => {
    const obj = {};
    setNestedProperty(obj, 'name', 'John');
    expect(obj).toEqual({ name: 'John' });
  });

  test('should set a nested property, creating intermediate objects', () => {
    const obj = {};
    setNestedProperty(obj, 'user.address.city', 'New York');
    expect(obj).toEqual({ user: { address: { city: 'New York' } } });
  });

  test('should update an existing nested property', () => {
    const obj = { user: { name: 'John' } };
    setNestedProperty(obj, 'user.name', 'Jane');
    expect(obj).toEqual({ user: { name: 'Jane' } });
  });

  test('should handle non-object initial values by overwriting', () => {
    const obj = { user: null };
    setNestedProperty(obj, 'user.name', 'John');
    expect(obj).toEqual({ user: { name: 'John' } });
  });

  test('should return the modified object', () => {
    const obj = {};
    const result = setNestedProperty(obj, 'a', 1);
    expect(result).toBe(obj);
  });
});

describe('omit', () => {
  test('should omit a single property', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const newObj = omit(obj, ['b']);
    expect(newObj).toEqual({ a: 1, c: 3 });
    expect(newObj).not.toBe(obj);
  });

  test('should omit multiple properties', () => {
    const obj = { a: 1, b: 2, c: 3, d: 4 };
    const newObj = omit(obj, ['b', 'd']);
    expect(newObj).toEqual({ a: 1, c: 3 });
  });

  test('should return a shallow copy if no keys are omitted', () => {
    const obj = { a: 1, b: 2 };
    const newObj = omit(obj, []);
    expect(newObj).toEqual(obj);
    expect(newObj).not.toBe(obj);
  });

  test('should handle non-existent keys gracefully', () => {
    const obj = { a: 1, b: 2 };
    const newObj = omit(obj, ['c']);
    expect(newObj).toEqual({ a: 1, b: 2 });
  });

  test('should return the original value for non-object inputs', () => {
    expect(omit(null, ['a'])).toBe(null);
    expect(omit(undefined, ['a'])).toBe(undefined);
    expect(omit(123, ['a'])).toBe(123);
  });
});

describe('pick', () => {
  test('should pick a single property', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const newObj = pick(obj, ['b']);
    expect(newObj).toEqual({ b: 2 });
  });

  test('should pick multiple properties', () => {
    const obj = { a: 1, b: 2, c: 3, d: 4 };
    const newObj = pick(obj, ['b', 'd']);
    expect(newObj).toEqual({ b: 2, d: 4 });
  });

  test('should return an empty object if no keys are picked', () => {
    const obj = { a: 1, b: 2 };
    const newObj = pick(obj, []);
    expect(newObj).toEqual({});
  });

  test('should handle non-existent keys gracefully', () => {
    const obj = { a: 1, b: 2 };
    const newObj = pick(obj, ['c']);
    expect(newObj).toEqual({});
  });

  test('should return an empty object for non-object inputs', () => {
    expect(pick(null, ['a'])).toEqual({});
    expect(pick(undefined, ['a'])).toEqual({});
    expect(pick(123, ['a'])).toEqual({});
  });
});

describe('mergeDeep', () => {
  test('should deeply merge two objects', () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { d: 3, b: { e: 4 } };
    const merged = mergeDeep(obj1, obj2);
    expect(merged).toEqual({ a: 1, b: { c: 2, e: 4 }, d: 3 });
  });

  test('should deeply merge multiple objects', () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { d: 3, b: { e: 4 } };
    const obj3 = { f: 5, b: { g: 6 } };
    const merged = mergeDeep(obj1, obj2, obj3);
    expect(merged).toEqual({ a: 1, b: { c: 2, e: 4, g: 6 }, d: 3, f: 5 });
  });

  test('should overwrite primitive values', () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { a: 10, b: { c: 20 } };
    const merged = mergeDeep(obj1, obj2);
    expect(merged).toEqual({ a: 10, b: { c: 20 } });
  });

  test('should handle arrays by concatenating them', () => {
    const obj1 = { a: [1, 2], b: { c: [3] } };
    const obj2 = { a: [3, 4], b: { c: [4, 5] } };
    const merged = mergeDeep(obj1, obj2);
    expect(merged).toEqual({ a: [1, 2, 3, 4], b: { c: [3, 4, 5] } });
  });

  test('should handle null and undefined values gracefully', () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { b: null, d: undefined };
    const merged = mergeDeep(obj1, obj2);
    expect(merged).toEqual({ a: 1, b: null, d: undefined });
  });

  test('should return a new object if target is not an object', () => {
    const merged = mergeDeep(null, { a: 1 });
    expect(merged).toEqual({ a: 1 });
  });
});

describe('invertObject', () => {
  test('should invert keys and values', () => {
    const obj = { a: '1', b: '2', c: '3' };
    const inverted = invertObject(obj);
    expect(inverted).toEqual({ '1': 'a', '2': 'b', '3': 'c' });
  });

  test('should handle objects with non-string values', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const inverted = invertObject(obj);
    expect(inverted).toEqual({ '1': 'a', '2': 'b', '3': 'c' });
  });

  test('should handle duplicate values by overwriting', () => {
    const obj = { a: '1', b: '2', c: '1' };
    const inverted = invertObject(obj);
    expect(inverted).toEqual({ '1': 'c', '2': 'b' });
  });

  test('should return an empty object for an empty object', () => {
    expect(invertObject({})).toEqual({});
  });

  test('should return an empty object for non-object inputs', () => {
    expect(invertObject(null)).toEqual({});
    expect(invertObject(undefined)).toEqual({});
    expect(invertObject(123)).toEqual({});
  });
});
