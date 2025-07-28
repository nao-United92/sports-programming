
import {
  deepClone,
  isEmpty,
  get,
  set,
  omit,
  pick,
} from './object-array-utils';

describe('object-array-utils', () => {
  describe('deepClone', () => {
    it('should deep clone a simple object', () => {
      const obj = { a: 1, b: { c: 2 } };
      const clonedObj = deepClone(obj);
      expect(clonedObj).toEqual(obj);
      expect(clonedObj).not.toBe(obj);
      expect(clonedObj.b).not.toBe(obj.b);
    });

    it('should deep clone an array with objects', () => {
      const arr = [1, { a: 2 }, [3, 4]];
      const clonedArr = deepClone(arr);
      expect(clonedArr).toEqual(arr);
      expect(clonedArr).not.toBe(arr);
      expect(clonedArr[1]).not.toBe(arr[1]);
      expect(clonedArr[2]).not.toBe(arr[2]);
    });

    it('should handle null and primitive values', () => {
      expect(deepClone(null)).toBeNull();
      expect(deepClone(123)).toBe(123);
      expect(deepClone('string')).toBe('string');
    });

    it('should handle circular references (basic)', () => {
      // Note: This deepClone is not designed for complex circular references.
      // For this test, we ensure it doesn't crash on a simple case.
      const obj = {};
      obj.self = obj;
      const clonedObj = deepClone(obj);
      expect(clonedObj).toEqual(obj);
      expect(clonedObj).not.toBe(obj);
    });
  });

  describe('isEmpty', () => {
    it('should return true for empty values', () => {
      expect(isEmpty(null)).toBe(true);
      expect(isEmpty(undefined)).toBe(true);
      expect(isEmpty('')).toBe(true);
      expect(isEmpty([])).toBe(true);
      expect(isEmpty({})).toBe(true);
    });

    it('should return false for non-empty values', () => {
      expect(isEmpty('hello')).toBe(false);
      expect(isEmpty([1])).toBe(false);
      expect(isEmpty({ a: 1 })).toBe(false);
      expect(isEmpty(0)).toBe(false);
      expect(isEmpty(false)).toBe(false);
    });
  });

  describe('get', () => {
    const obj = {
      user: {
        name: 'John',
        address: {
          street: '123 Main St',
          city: 'Anytown',
        },
        hobbies: ['reading', 'coding'],
      },
      status: null,
    };

    it('should get a nested property', () => {
      expect(get(obj, 'user.name')).toBe('John');
      expect(get(obj, 'user.address.city')).toBe('Anytown');
    });

    it('should get an array element', () => {
      expect(get(obj, 'user.hobbies[0]')).toBe('reading');
      expect(get(obj, 'user.hobbies[1]')).toBe('coding');
    });

    it('should return default value if path does not exist', () => {
      expect(get(obj, 'user.address.zip', 'N/A')).toBe('N/A');
      expect(get(obj, 'user.nonexistent.prop', null)).toBeNull();
    });

    it('should return undefined if path does not exist and no default value', () => {
      expect(get(obj, 'user.address.zip')).toBeUndefined();
    });

    it('should handle null intermediate paths', () => {
      expect(get(obj, 'status.code', 'default')).toBe('default');
    });
  });

  describe('set', () => {
    it('should set a nested property', () => {
      const obj = {};
      set(obj, 'user.name', 'Jane');
      expect(obj).toEqual({ user: { name: 'Jane' } });
    });

    it('should create intermediate objects if they don't exist', () => {
      const obj = {};
      set(obj, 'user.address.city', 'Newtown');
      expect(obj).toEqual({ user: { address: { city: 'Newtown' } } });
    });

    it('should update an existing property', () => {
      const obj = { user: { name: 'John' } };
      set(obj, 'user.name', 'Jane');
      expect(obj.user.name).toBe('Jane');
    });

    it('should set an array element', () => {
      const obj = { data: [] };
      set(obj, 'data[0]', 'first');
      expect(obj).toEqual({ data: ['first'] });
    });
  });

  describe('omit', () => {
    const obj = { a: 1, b: 2, c: 3 };

    it('should omit specified keys', () => {
      const newObj = omit(obj, ['b', 'c']);
      expect(newObj).toEqual({ a: 1 });
      expect(newObj).not.toBe(obj);
    });

    it('should return a shallow copy if no keys are omitted', () => {
      const newObj = omit(obj, []);
      expect(newObj).toEqual(obj);
      expect(newObj).not.toBe(obj);
    });

    it('should handle non-existent keys', () => {
      const newObj = omit(obj, ['d']);
      expect(newObj).toEqual(obj);
    });
  });

  describe('pick', () => {
    const obj = { a: 1, b: 2, c: 3 };

    it('should pick specified keys', () => {
      const newObj = pick(obj, ['a', 'c']);
      expect(newObj).toEqual({ a: 1, c: 3 });
      expect(newObj).not.toBe(obj);
    });

    it('should return an empty object if no keys are picked', () => {
      const newObj = pick(obj, []);
      expect(newObj).toEqual({});
    });

    it('should handle non-existent keys', () => {
      const newObj = pick(obj, ['a', 'd']);
      expect(newObj).toEqual({ a: 1 });
    });
  });

  describe('containsObjectByKey', () => {
    const arr = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 3, name: 'Charlie' },
    ];

    test('should return true if an object with the key-value pair is found', () => {
      expect(containsObjectByKey(arr, 'id', 2)).toBe(true);
      expect(containsObjectByKey(arr, 'name', 'Alice')).toBe(true);
    });

    test('should return false if no object with the key-value pair is found', () => {
      expect(containsObjectByKey(arr, 'id', 99)).toBe(false);
      expect(containsObjectByKey(arr, 'name', 'David')).toBe(false);
    });

    test('should return false if the key does not exist in any object', () => {
      expect(containsObjectByKey(arr, 'age', 30)).toBe(false);
    });

    test('should return false for non-array input', () => {
      expect(containsObjectByKey(null, 'id', 1)).toBe(false);
      expect(containsObjectByKey(undefined, 'id', 1)).toBe(false);
      expect(containsObjectByKey({}, 'id', 1)).toBe(false);
    });

    test('should handle objects with null or undefined values', () => {
      const arrWithNull = [{ id: 1, value: null }, { id: 2, value: undefined }];
      expect(containsObjectByKey(arrWithNull, 'value', null)).toBe(true);
      expect(containsObjectByKey(arrWithNull, 'value', undefined)).toBe(true);
      expect(containsObjectByKey(arrWithNull, 'value', 'someValue')).toBe(false);
    });
  });
});
