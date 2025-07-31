import { deepClone, isEmptyObject, getNestedProperty, toCamelCaseKeys, setNestedProperty, omit, pick, deepMerge, invertObject, shallowEqual, isObject, isDeepEqual, renameKey, mapObject, filterObject, mapKeys, mapValues, merge, hasProperty, keys, isEqual, deepFreeze, defaults, compactObject } from './object-utils.js';

describe('isDeepEqual', () => {
  test('should return true for deeply equal objects', () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { a: 1, b: { c: 2 } };
    expect(isDeepEqual(obj1, obj2)).toBe(true);
  });

  test('should return false for objects that are not deeply equal', () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { a: 1, b: { c: 3 } };
    expect(isDeepEqual(obj1, obj2)).toBe(false);
  });

  test('should handle arrays', () => {
    const arr1 = [1, { a: 2 }, [3, 4]];
    const arr2 = [1, { a: 2 }, [3, 4]];
    const arr3 = [1, { a: 2 }, [3, 5]];
    expect(isDeepEqual(arr1, arr2)).toBe(true);
    expect(isDeepEqual(arr1, arr3)).toBe(false);
  });

  test('should handle null and primitive values', () => {
    expect(isDeepEqual(null, null)).toBe(true);
    expect(isDeepEqual(1, 1)).toBe(true);
    expect(isDeepEqual('a', 'a')).toBe(true);
    expect(isDeepEqual(1, 2)).toBe(false);
    expect(isDeepEqual(null, {})).toBe(false);
  });
});

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
    expect(omit(null, ['a'])).toEqual({});
    expect(omit(undefined, ['a'])).toEqual({});
    expect(omit(123, ['a'])).toEqual({});
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

describe('deepMerge', () => {
  test('should deeply merge two objects', () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { d: 3, b: { e: 4 } };
    const merged = deepMerge(obj1, obj2);
    expect(merged).toEqual({ a: 1, b: { c: 2, e: 4 }, d: 3 });
  });

  test('should deeply merge multiple objects', () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { d: 3, b: { e: 4 } };
    const obj3 = { f: 5, b: { g: 6 } };
    const merged = deepMerge(obj1, obj2, obj3);
    expect(merged).toEqual({ a: 1, b: { c: 2, e: 4, g: 6 }, d: 3, f: 5 });
  });

  test('should overwrite primitive values', () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { a: 10, b: { c: 20 } };
    const merged = deepMerge(obj1, obj2);
    expect(merged).toEqual({ a: 10, b: { c: 20 } });
  });

  test('should handle arrays by concatenating them', () => {
    const obj1 = { a: [1, 2], b: { c: [3] } };
    const obj2 = { a: [3, 4], b: { c: [4, 5] } };
    const merged = deepMerge(obj1, obj2);
    expect(merged).toEqual({ a: [1, 2, 3, 4], b: { c: [3, 4, 5] } });
  });

  test('should handle null and undefined values gracefully', () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { b: null, d: undefined };
    const merged = deepMerge(obj1, obj2);
    expect(merged).toEqual({ a: 1, b: null, d: undefined });
  });

  test('should return a new object if target is not an object', () => {
    const merged = deepMerge(null, { a: 1 });
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

describe('shallowEqual', () => {
  test('should return true for two shallowly equal objects', () => {
    const obj1 = { a: 1, b: 'hello' };
    const obj2 = { a: 1, b: 'hello' };
    expect(shallowEqual(obj1, obj2)).toBe(true);
  });

  test('should return false for objects with different values', () => {
    const obj1 = { a: 1, b: 'hello' };
    const obj2 = { a: 1, b: 'world' };
    expect(shallowEqual(obj1, obj2)).toBe(false);
  });

  test('should return false for objects with different keys', () => {
    const obj1 = { a: 1, b: 'hello' };
    const obj2 = { a: 1, c: 'hello' };
    expect(shallowEqual(obj1, obj2)).toBe(false);
  });

  test('should return false for objects with different number of keys', () => {
    const obj1 = { a: 1, b: 'hello' };
    const obj2 = { a: 1 };
    expect(shallowEqual(obj1, obj2)).toBe(false);
  });

  test('should handle nested objects by reference equality', () => {
    const nestedObj = { c: 3 };
    const obj1 = { a: 1, b: nestedObj };
    const obj2 = { a: 1, b: nestedObj };
    const obj3 = { a: 1, b: { c: 3 } };
    expect(shallowEqual(obj1, obj2)).toBe(true);
    expect(shallowEqual(obj1, obj3)).toBe(false);
  });

  test('should return true for two empty objects', () => {
    expect(shallowEqual({}, {})).toBe(true);
  });

  test('should return true for same object reference', () => {
    const obj = { a: 1 };
    expect(shallowEqual(obj, obj)).toBe(true);
  });

  test('should return false for null or undefined inputs', () => {
    expect(shallowEqual(null, {})).toBe(false);
    expect(shallowEqual({}, undefined)).toBe(false);
    expect(shallowEqual(null, undefined)).toBe(false);
  });

  test('should handle arrays as objects (shallow comparison)', () => {
    expect(shallowEqual([1, 2], [1, 2])).toBe(true);
    expect(shallowEqual([1, 2], [1, 3])).toBe(false);
    expect(shallowEqual([1, { a: 1 }], [1, { a: 1 }])).toBe(false); // Nested objects are not deep compared
  });
});

describe('isObject', () => {
  test('should return true for an object', () => {
    expect(isObject({})).toBe(true);
    expect(isObject({ a: 1 })).toBe(true);
  });

  test('should return false for an array', () => {
    expect(isObject([])).toBe(false);
  });

  test('should return false for null', () => {
    expect(isObject(null)).toBe(false);
  });

  test('should return false for primitive values', () => {
    expect(isObject(123)).toBe(false);
    expect(isObject('string')).toBe(false);
    expect(isObject(true)).toBe(false);
    expect(isObject(undefined)).toBe(false);
  });
});

describe('renameKey', () => {
  test('should rename an existing key', () => {
    const obj = { a: 1, b: 2 };
    const newObj = renameKey(obj, 'a', 'x');
    expect(newObj).toEqual({ x: 1, b: 2 });
    expect(newObj).not.toBe(obj);
  });

  test('should not modify the original object', () => {
    const obj = { a: 1, b: 2 };
    renameKey(obj, 'a', 'x');
    expect(obj).toEqual({ a: 1, b: 2 });
  });

  test('should return a new object with the same properties if oldKey does not exist', () => {
    const obj = { a: 1, b: 2 };
    const newObj = renameKey(obj, 'c', 'x');
    expect(newObj).toEqual({ a: 1, b: 2 });
    expect(newObj).not.toBe(obj);
  });

  test('should handle null or non-object inputs by returning a shallow copy', () => {
    expect(renameKey(null, 'a', 'x')).toEqual(null);
    expect(renameKey(undefined, 'a', 'x')).toEqual(undefined);
    expect(renameKey(123, 'a', 'x')).toEqual(123);
  });

  test('should overwrite if newKey already exists', () => {
    const obj = { a: 1, b: 2 };
    const newObj = renameKey(obj, 'a', 'b');
    expect(newObj).toEqual({ b: 1 });
  });
});

describe('pick', () => {
  it('should create an object with picked properties', () => {
    const object = { a: 1, b: '2', c: 3 };
    expect(pick(object, ['a', 'c'])).toEqual({ a: 1, c: 3 });
  });
});

describe('omit', () => {
  test('should omit specified keys', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(omit(obj, ['a', 'c'])).toEqual({ b: 2 });
  });

  test('should not modify the original object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    omit(obj, ['a']);
    expect(obj).toEqual({ a: 1, b: 2, c: 3 });
  });

  test('should return an empty object if input is not an object', () => {
    expect(omit(null, ['a'])).toEqual({});
    expect(omit(undefined, ['a'])).toEqual({});
    expect(omit(123, ['a'])).toEqual({});
  });
});

describe('mapObject', () => {
  it('should map object values', () => {
    const obj = { a: 1, b: 2 };
    const newObj = mapObject(obj, (value) => value * 2);
    expect(newObj).toEqual({ a: 2, b: 4 });
  });
});

describe('filterObject', () => {
  it('should filter object properties', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const newObj = filterObject(obj, (value) => value > 1);
    expect(newObj).toEqual({ b: 2, c: 3 });
  });
});

describe('mapKeys', () => {
  it('should map object keys', () => {
    const obj = { a: 1, b: 2 };
    const newObj = mapKeys(obj, (value, key) => key.toUpperCase());
    expect(newObj).toEqual({ A: 1, B: 2 });
  });

  it('should handle empty object', () => {
    expect(mapKeys({}, (value, key) => key.toUpperCase())).toEqual({});
  });
});

describe('mapValues', () => {
  it('should map object values', () => {
    const obj = { a: 1, b: 2 };
    const newObj = mapValues(obj, (value) => value * 2);
    expect(newObj).toEqual({ a: 2, b: 4 });
  });

  it('should handle empty object', () => {
    expect(mapValues({}, (value) => value * 2)).toEqual({});
  });
});

  describe('merge', () => {
    test('should merge two objects shallowly', () => {
      const obj1 = { a: 1, b: 2 };
      const obj2 = { c: 3, d: 4 };
      expect(merge(obj1, obj2)).toEqual({ a: 1, b: 2, c: 3, d: 4 });
    });

    test('should overwrite properties from earlier objects', () => {
      const obj1 = { a: 1, b: 2 };
      const obj2 = { b: 3, c: 4 };
      expect(merge(obj1, obj2)).toEqual({ a: 1, b: 3, c: 4 });
    });

    test('should merge multiple objects', () => {
      const obj1 = { a: 1 };
      const obj2 = { b: 2 };
      const obj3 = { c: 3 };
      expect(merge(obj1, obj2, obj3)).toEqual({ a: 1, b: 2, c: 3 });
    });

    test('should handle empty sources', () => {
      const obj1 = { a: 1 };
      expect(merge(obj1, {}, { b: 2 })).toEqual({ a: 1, b: 2 });
    });

    test('should return a new object', () => {
      const obj1 = { a: 1 };
      const merged = merge(obj1, { b: 2 });
      expect(merged).not.toBe(obj1);
    });

    test('should handle non-object sources gracefully', () => {
      const obj1 = { a: 1 };
      expect(merge(obj1, null, { b: 2 }, undefined)).toEqual({ a: 1, b: 2 });
    });
  });

  describe('hasProperty', () => {
    test('should return true if the object has the specified own property', () => {
      const obj = { a: 1, b: 2 };
      expect(hasProperty(obj, 'a')).toBe(true);
    });

    test('should return false if the object does not have the specified own property', () => {
      const obj = { a: 1, b: 2 };
      expect(hasProperty(obj, 'c')).toBe(false);
    });

    test('should return false for inherited properties', () => {
      const proto = { a: 1 };
      const obj = Object.create(proto);
      obj.b = 2;
      expect(hasProperty(obj, 'a')).toBe(false);
    });

    test('should return false for null or undefined objects', () => {
      expect(hasProperty(null, 'a')).toBe(false);
      expect(hasProperty(undefined, 'a')).toBe(false);
    });

    test('should return false for primitive values', () => {
      expect(hasProperty(123, 'a')).toBe(false);
      expect(hasProperty('string', 'length')).toBe(false);
    });

    test('should return true for properties with undefined values', () => {
      const obj = { a: undefined };
      expect(hasProperty(obj, 'a')).toBe(true);
    });
  });

  describe('keys', () => {
    test('should return an array of own enumerable property names', () => {
      const obj = { a: 1, b: 'hello', c: true };
      expect(keys(obj)).toEqual(['a', 'b', 'c']);
    });

    test('should return an empty array for an empty object', () => {
      expect(keys({})).toEqual([]);
    });

    test('should return an empty array for non-object inputs', () => {
      expect(keys(null)).toEqual([]);
      expect(keys(undefined)).toEqual([]);
      expect(keys(123)).toEqual([]);
      expect(keys('string')).toEqual(['0', '1', '2', '3', '4', '5']); // String primitives have enumerable properties
    });

    test('should not include inherited properties', () => {
      const proto = { a: 1 };
      const obj = Object.create(proto);
      obj.b = 2;
      expect(keys(obj)).toEqual(['b']);
    });
  });

  describe('size', () => {
    test('should return the number of enumerable own properties', () => {
      expect(size({ a: 1, b: 2 })).toBe(2);
      expect(size({})).toBe(0);
    });

    test('should return 0 for non-object inputs', () => {
      expect(size(null)).toBe(0);
      expect(size(undefined)).toBe(0);
      expect(size(123)).toBe(0);
      expect(size('string')).toBe(0);
      expect(size([])).toBe(0);
    });
  });

  describe('isEmpty', () => {
    test('should return true for null or undefined', () => {
      expect(isEmpty(null)).toBe(true);
      expect(isEmpty(undefined)).toBe(true);
    });

    test('should return true for an empty string', () => {
      expect(isEmpty('')).toBe(true);
    });

    test('should return true for an empty array', () => {
      expect(isEmpty([])).toBe(true);
    });

    test('should return true for an empty object', () => {
      expect(isEmpty({})).toBe(true);
    });

    test('should return false for non-empty strings, arrays, and objects', () => {
      expect(isEmpty('hello')).toBe(false);
      expect(isEmpty([1, 2])).toBe(false);
      expect(isEmpty({ a: 1 })).toBe(false);
    });

    test('should return false for numbers and booleans', () => {
      expect(isEmpty(0)).toBe(false);
      expect(isEmpty(false)).toBe(false);
    });
  });

  describe('deepFreeze', () => {
    test('should deeply freeze an object', () => {
      const obj = {
        a: 1,
        b: {
          c: 2,
          d: [3, { e: 4 }],
        },
      };
      deepFreeze(obj);

      expect(Object.isFrozen(obj)).toBe(true);
      expect(Object.isFrozen(obj.b)).toBe(true);
      expect(Object.isFrozen(obj.b.d)).toBe(true);
      expect(Object.isFrozen(obj.b.d[1])).toBe(true);

      // Attempting to modify should throw an error in strict mode
      // In non-strict mode, it would fail silently
      const attemptModify = () => {
        obj.a = 10;
        obj.b.c = 20;
        obj.b.d.push(5);
        obj.b.d[1].e = 40;
      };

      // In a Jest environment, which typically runs in strict mode,
      // these assignments will throw TypeError.
      expect(() => { obj.a = 10; }).toThrow(TypeError);
      expect(() => { obj.b.c = 20; }).toThrow(TypeError);
      expect(() => { obj.b.d.push(5); }).toThrow(TypeError);
      expect(() => { obj.b.d[1].e = 40; }).toThrow(TypeError);
    });

    test('should return the same object reference', () => {
      const obj = { a: 1 };
      const frozenObj = deepFreeze(obj);
      expect(frozenObj).toBe(obj);
    });

    test('should handle non-object values', () => {
      expect(deepFreeze(123)).toBe(123);
      expect(deepFreeze('string')).toBe('string');
      expect(deepFreeze(null)).toBe(null);
      expect(deepFreeze(undefined)).toBe(undefined);
    });

    test('should handle already frozen objects', () => {
      const obj = { a: 1 };
      Object.freeze(obj);
      const frozenObj = deepFreeze(obj);
      expect(Object.isFrozen(frozenObj)).toBe(true);
      expect(frozenObj).toBe(obj);
    });
  });

  describe('isEqual', () => {
    test('should return true for equal objects', () => {
      const obj1 = { a: 1, b: { c: 2 } };
      const obj2 = { a: 1, b: { c: 2 } };
      expect(isEqual(obj1, obj2)).toBe(true);
    });

    test('should return false for unequal objects', () => {
      const obj1 = { a: 1, b: { c: 2 } };
      const obj2 = { a: 1, b: { c: 3 } };
      expect(isEqual(obj1, obj2)).toBe(false);
    });

    test('should handle arrays', () => {
      const arr1 = [1, { a: 2 }];
      const arr2 = [1, { a: 2 }];
      const arr3 = [1, { a: 3 }];
      expect(isEqual(arr1, arr2)).toBe(true);
      expect(isEqual(arr1, arr3)).toBe(false);
    });
  });

  describe('defaults', () => {
    test('should assign default properties if they are undefined or missing', () => {
      const obj = { a: 1, b: undefined };
      const defaultProps = { b: 2, c: 3 };
      defaults(obj, defaultProps);
      expect(obj).toEqual({ a: 1, b: 2, c: 3 });
    });

    test('should not overwrite existing properties', () => {
      const obj = { a: 1, b: 5 };
      const defaultProps = { b: 2, c: 3 };
      defaults(obj, defaultProps);
      expect(obj).toEqual({ a: 1, b: 5, c: 3 });
    });

    test('should return the modified object', () => {
      const obj = { a: 1 };
      const defaultProps = { b: 2 };
      const result = defaults(obj, defaultProps);
      expect(result).toBe(obj);
    });

    test('should handle empty defaultProps', () => {
      const obj = { a: 1 };
      const defaultProps = {};
      defaults(obj, defaultProps);
      expect(obj).toEqual({ a: 1 });
    });

    test('should handle empty obj', () => {
      const obj = {};
      const defaultProps = { a: 1 };
      defaults(obj, defaultProps);
      expect(obj).toEqual({ a: 1 });
    });

    test('should handle null or non-object inputs for obj', () => {
      expect(defaults(null, { a: 1 })).toBe(null);
      expect(defaults(undefined, { a: 1 })).toBe(undefined);
      expect(defaults(123, { a: 1 })).toBe(123);
    });
  });

  describe('defaults', () => {
    test('should assign default properties if they are undefined or missing', () => {
      const obj = { a: 1, b: undefined };
      const defaultProps = { b: 2, c: 3 };
      defaults(obj, defaultProps);
      expect(obj).toEqual({ a: 1, b: 2, c: 3 });
    });

    test('should not overwrite existing properties', () => {
      const obj = { a: 1, b: 5 };
      const defaultProps = { b: 2, c: 3 };
      defaults(obj, defaultProps);
      expect(obj).toEqual({ a: 1, b: 5, c: 3 });
    });

    test('should return the modified object', () => {
      const obj = { a: 1 };
      const defaultProps = { b: 2 };
      const result = defaults(obj, defaultProps);
      expect(result).toBe(obj);
    });

    test('should handle empty defaultProps', () => {
      const obj = { a: 1 };
      const defaultProps = {};
      defaults(obj, defaultProps);
      expect(obj).toEqual({ a: 1 });
    });

    test('should handle empty obj', () => {
      const obj = {};
      const defaultProps = { a: 1 };
      defaults(obj, defaultProps);
      expect(obj).toEqual({ a: 1 });
    });

    test('should handle null or non-object inputs for obj', () => {
      expect(defaults(null, { a: 1 })).toBe(null);
      expect(defaults(undefined, { a: 1 })).toBe(undefined);
      expect(defaults(123, { a: 1 })).toBe(123);
    });
  });

  describe('size', () => {
    test('should return the number of enumerable own properties', () => {
      expect(size({ a: 1, b: 2 })).toBe(2);
      expect(size({})).toBe(0);
    });

    test('should return 0 for non-object inputs', () => {
      expect(size(null)).toBe(0);
      expect(size(undefined)).toBe(0);
      expect(size(123)).toBe(0);
      expect(size('string')).toBe(6);
      expect(size([])).toBe(0);
    });
  });

  describe('isEmpty', () => {
    test('should return true for null or undefined', () => {
      expect(isEmpty(null)).toBe(true);
      expect(isEmpty(undefined)).toBe(true);
    });

    test('should return true for an empty string', () => {
      expect(isEmpty('')).toBe(true);
    });

    test('should return true for an empty array', () => {
      expect(isEmpty([])).toBe(true);
    });

    test('should return true for an empty object', () => {
      expect(isEmpty({})).toBe(true);
    });

    test('should return false for non-empty strings, arrays, and objects', () => {
      expect(isEmpty('hello')).toBe(false);
      expect(isEmpty([1, 2])).toBe(false);
      expect(isEmpty({ a: 1 })).toBe(false);
    });

    test('should return false for numbers and booleans', () => {
      expect(isEmpty(0)).toBe(false);
      expect(isEmpty(false)).toBe(false);
    });
  });

  describe('compactObject', () => {
    test('should remove null, undefined, and empty string values', () => {
      const obj = { a: 1, b: null, c: undefined, d: 'hello', e: '', f: 0, g: false };
      const compacted = compactObject(obj);
      expect(compacted).toEqual({ a: 1, d: 'hello', f: 0, g: false });
    });

    test('should return an empty object if all values are null, undefined, or empty string', () => {
      const obj = { a: null, b: undefined, c: '' };
      const compacted = compactObject(obj);
      expect(compacted).toEqual({});
    });

    test('should return the same object if no values need to be removed', () => {
      const obj = { a: 1, b: 'hello' };
      const compacted = compactObject(obj);
      expect(compacted).toEqual(obj);
    });

    test('should handle non-object inputs by returning them as is', () => {
      expect(compactObject(null)).toBe(null);
      expect(compactObject(undefined)).toBe(undefined);
      expect(compactObject(123)).toBe(123);
      expect(compactObject('string')).toBe('string');
    });

    test('should not modify the original object', () => {
      const obj = { a: 1, b: null };
      compactObject(obj);
      expect(obj).toEqual({ a: 1, b: null });
    });
  });

  describe('get', () => {
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
      expect(get(obj, 'user.name')).toBe('John Doe');
      expect(get(obj, 'user.address.city')).toBe('New York');
    });

    test('should return undefined if property not found and no default value', () => {
      expect(get(obj, 'user.address.street')).toBeUndefined();
      expect(get(obj, 'nonexistent.path')).toBeUndefined();
    });

    test('should return default value if property not found', () => {
      expect(get(obj, 'user.address.street', 'N/A')).toBe('N/A');
      expect(get(obj, 'nonexistent.path', null)).toBe(null);
    });

    test('should handle null or undefined objects gracefully', () => {
      expect(get(null, 'user.name')).toBeUndefined();
      expect(get(undefined, 'user.name')).toBeUndefined();
      expect(get(null, 'user.name', 'default')).toBe('default');
    });

    test('should return the object itself if path is empty', () => {
      expect(get(obj, '')).toEqual(obj);
    });
  });

  describe('set', () => {
    test('should set a top-level property', () => {
      const obj = {};
      set(obj, 'name', 'John');
      expect(obj).toEqual({ name: 'John' });
    });

    test('should set a nested property, creating intermediate objects', () => {
      const obj = {};
      set(obj, 'user.address.city', 'New York');
      expect(obj).toEqual({ user: { address: { city: 'New York' } } });
    });

    test('should update an existing nested property', () => {
      const obj = { user: { name: 'John' } };
      set(obj, 'user.name', 'Jane');
      expect(obj).toEqual({ user: { name: 'Jane' } });
    });

    test('should handle non-object initial values by overwriting', () => {
      const obj = { user: null };
      set(obj, 'user.name', 'John');
      expect(obj).toEqual({ user: { name: 'John' } });
    });

    test('should return the modified object', () => {
      const obj = {};
      const result = set(obj, 'a', 1);
      expect(result).toBe(obj);
    });
  });
});