const cloneDeep = require('./object-clone-deep-utils');

describe('cloneDeep', () => {
  test('should clone primitives', () => {
    expect(cloneDeep(123)).toBe(123);
    expect(cloneDeep('hello')).toBe('hello');
    expect(cloneDeep(null)).toBe(null);
    expect(cloneDeep(undefined)).toBe(undefined);
    expect(cloneDeep(true)).toBe(true);
  });

  test('should clone a flat object', () => {
    const obj = { a: 1, b: 'two' };
    const cloned = cloneDeep(obj);
    expect(cloned).toEqual(obj);
    expect(cloned).not.toBe(obj);
  });

  test('should clone a flat array', () => {
    const arr = [1, 'two', { a: 3 }];
    const cloned = cloneDeep(arr);
    expect(cloned).toEqual(arr);
    expect(cloned).not.toBe(arr);
    expect(cloned[2]).not.toBe(arr[2]);
  });

  test('should perform a deep clone of a nested object', () => {
    const obj = {
      a: 1,
      b: {
        c: 'three',
        d: {
          e: 4,
        },
      },
    };
    const cloned = cloneDeep(obj);
    expect(cloned).toEqual(obj);
    expect(cloned).not.toBe(obj);
    expect(cloned.b).not.toBe(obj.b);
    expect(cloned.b.d).not.toBe(obj.b.d);
  });

  test('should perform a deep clone of an array with nested objects and arrays', () => {
    const obj = {
      arr: [1, { a: 'nested' }, [2, 3]],
    };
    const cloned = cloneDeep(obj);
    
    expect(cloned).toEqual(obj);
    expect(cloned.arr).not.toBe(obj.arr);
    expect(cloned.arr[1]).not.toBe(obj.arr[1]);
    expect(cloned.arr[2]).not.toBe(obj.arr[2]);
  });
  
  test('should handle objects with null and undefined properties', () => {
    const obj = { a: null, b: undefined, c: { d: null } };
    const cloned = cloneDeep(obj);
    expect(cloned).toEqual(obj);
    expect(cloned).not.toBe(obj);
    expect(cloned.c).not.toBe(obj.c);
  });
});
