import { pick, omit, isEmpty, get, set } from './object-utils.js';

describe('pick', () => {
  it('should pick specified keys from an object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(pick(obj, ['a', 'c'])).toEqual({ a: 1, c: 3 });
  });

  it('should return an empty object if no keys are picked', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(pick(obj, ['d', 'e'])).toEqual({});
  });
});

describe('omit', () => {
  it('should omit specified keys from an object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(omit(obj, ['a', 'c'])).toEqual({ b: 2 });
  });

  it('should return the original object if no keys are omitted', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(omit(obj, ['d', 'e'])).toEqual({ a: 1, b: 2, c: 3 });
  });
});

describe('isEmpty', () => {
  it('should return true for an empty object', () => {
    expect(isEmpty({})).toBe(true);
  });

  it('should return false for a non-empty object', () => {
    expect(isEmpty({ a: 1 })).toBe(false);
  });

  it('should return false for an object with inherited properties but no own properties', () => {
    function Parent() { this.a = 1; }
    function Child() {}
    Child.prototype = new Parent();
    const child = new Child();
    expect(isEmpty(child)).toBe(false); // Object.keys will return [] but it's not truly empty
  });

  it('should return false for null', () => {
    expect(isEmpty(null)).toBe(false);
  });

  it('should return false for non-object types', () => {
    expect(isEmpty(123)).toBe(false);
    expect(isEmpty('string')).toBe(false);
    expect(isEmpty(true)).toBe(false);
    expect(isEmpty(undefined)).toBe(false);
  });

  it('should return true for an empty array', () => {
    expect(isEmpty([])).toBe(true);
  });

  it('should return false for a non-empty array', () => {
    expect(isEmpty([1, 2])).toBe(false);
  });
});

describe('get', () => {
  const testObj = {
    a: {
      b: {
        c: 1,
      },
      d: [2, 3],
    },
    e: null,
  };

  it('should get a value from a nested path using a string', () => {
    expect(get(testObj, 'a.b.c')).toBe(1);
  });

  it('should get a value from a nested path using an array', () => {
    expect(get(testObj, ['a', 'b', 'c'])).toBe(1);
  });

  it('should get an array value', () => {
    expect(get(testObj, 'a.d')).toEqual([2, 3]);
  });

  it('should get a value from an array by index using dot notation', () => {
    expect(get(testObj, 'a.d.0')).toBe(2);
  });

  it('should get a value from an array by index using bracket notation', () => {
    expect(get(testObj, 'a.d[1]')).toBe(3);
  });

  it('should return undefined for a non-existent path', () => {
    expect(get(testObj, 'a.x.y')).toBeUndefined();
  });

  it('should return the default value for a non-existent path', () => {
    expect(get(testObj, 'a.x.y', 'default')).toBe('default');
  });

  it('should return the default value for a path that ends in a nullish value', () => {
      expect(get(testObj, 'e.f', 'default')).toBe('default');
  });

  it('should handle null or undefined objects', () => {
    expect(get(null, 'a.b')).toBeUndefined();
    expect(get(undefined, 'a.b', 'default')).toBe('default');
  });
});

describe('set', () => {
  let testObj;

  beforeEach(() => {
    testObj = {
      a: {
        b: {
          c: 1,
        },
        d: [2, 3],
      },
      e: null,
    };
  });

  it('should set a value on a nested path using a string', () => {
    set(testObj, 'a.b.c', 100);
    expect(testObj.a.b.c).toBe(100);
  });

  it('should set a value on a nested path using an array', () => {
    set(testObj, ['a', 'b', 'c'], 100);
    expect(testObj.a.b.c).toBe(100);
  });

  it('should create nested objects if they do not exist', () => {
    const obj = {};
    set(obj, 'x.y.z', 200);
    expect(obj.x.y.z).toBe(200);
  });

  it('should overwrite an existing value', () => {
    const newObj = { a: 1 };
    set(testObj, 'a.b', newObj);
    expect(testObj.a.b).toBe(newObj);
  });

  it('should set a value on an array by index using dot notation', () => {
      set(testObj, 'a.d.1', 99);
      expect(testObj.a.d[1]).toBe(99);
  });

  it('should set a value on an array by index using bracket notation', () => {
      set(testObj, 'a.d[0]', 88);
      expect(testObj.a.d[0]).toBe(88);
  });

  it('should create nested arrays and objects as needed', () => {
      const obj = {};
      set(obj, 'a[0].b', 'test');
      expect(obj.a[0].b).toBe('test');
  });

  it('should not throw on null or undefined objects and return the object', () => {
      expect(set(null, 'a.b', 1)).toBe(null);
      expect(set(undefined, 'a.b', 1)).toBe(undefined);
  });

  it('should mutate the original object', () => {
      const original = {};
      const result = set(original, 'a.b', 1);
      expect(result).toBe(original);
      expect(original.a.b).toBe(1);
  });
});