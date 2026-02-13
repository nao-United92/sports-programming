import deepCloneCircular from './object-deep-clone-circular';

describe('deepCloneCircular', () => {
  test('should deep clone a simple object', () => {
    const obj = {
      a: 1,
      b: 'hello',
      c: true
    };
    const cloned = deepCloneCircular(obj);
    expect(cloned).toEqual(obj);
    expect(cloned).not.toBe(obj);
  });

  test('should deep clone nested objects', () => {
    const obj = {
      a: 1,
      b: {
        c: 2,
        d: {
          e: 3
        }
      }
    };
    const cloned = deepCloneCircular(obj);
    expect(cloned).toEqual(obj);
    expect(cloned).not.toBe(obj);
    expect(cloned.b).not.toBe(obj.b);
    expect(cloned.b.d).not.toBe(obj.b.d);
  });

  test('should deep clone arrays', () => {
    const arr = [1, 'test', {
      a: 2
    }, [3, 4]];
    const cloned = deepCloneCircular(arr);
    expect(cloned).toEqual(arr);
    expect(cloned).not.toBe(arr);
    expect(cloned[2]).not.toBe(arr[2]);
    expect(cloned[3]).not.toBe(arr[3]);
  });

  test('should handle circular references', () => {
    const obj = {};
    obj.a = 1;
    obj.b = obj; // Circular reference
    const cloned = deepCloneCircular(obj);
    expect(cloned).not.toBe(obj);
    expect(cloned.a).toBe(obj.a);
    expect(cloned.b).toBe(cloned); // Cloned circular reference should point to the cloned object
    expect(cloned.b).not.toBe(obj.b);
  });

  test('should handle multiple circular references', () => {
    const obj1 = {
      val: 1
    };
    const obj2 = {
      val: 2
    };
    obj1.ref = obj2;
    obj2.ref = obj1;
    const cloned = deepCloneCircular(obj1);

    expect(cloned).not.toBe(obj1);
    expect(cloned.val).toBe(1);
    expect(cloned.ref).not.toBe(obj2);
    expect(cloned.ref.val).toBe(2);
    expect(cloned.ref.ref).toBe(cloned); // Circularity correctly maintained in clone
  });

  test('should clone Date objects', () => {
    const date = new Date();
    const obj = {
      d: date
    };
    const cloned = deepCloneCircular(obj);
    expect(cloned.d).toEqual(date);
    expect(cloned.d).not.toBe(date); // Should be a new Date object
  });

  test('should clone RegExp objects', () => {
    const regex = /abc/gi;
    const obj = {
      r: regex
    };
    const cloned = deepCloneCircular(obj);
    expect(cloned.r).toEqual(regex);
    expect(cloned.r).not.toBe(regex); // Should be a new RegExp object
  });

  test('should return primitive values as is', () => {
    expect(deepCloneCircular(123)).toBe(123);
    expect(deepCloneCircular('string')).toBe('string');
    expect(deepCloneCircular(true)).toBe(true);
    expect(deepCloneCircular(null)).toBe(null);
    expect(deepCloneCircular(undefined)).toBe(undefined);
  });
});
