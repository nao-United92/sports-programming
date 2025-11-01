import { deepClone } from './deep-clone-utils.js';

describe('deepClone', () => {
  test('should clone primitives correctly', () => {
    expect(deepClone(123)).toBe(123);
    expect(deepClone('hello')).toBe('hello');
    expect(deepClone(null)).toBeNull();
    expect(deepClone(undefined)).toBeUndefined();
    expect(deepClone(true)).toBe(true);
  });

  test('should clone a simple object', () => {
    const original = { a: 1, b: 'test' };
    const cloned = deepClone(original);
    expect(cloned).toEqual(original);
    expect(cloned).not.toBe(original);
  });

  test('should clone an object with nested objects and arrays', () => {
    const original = {
      a: { b: { c: 1 } },
      d: [1, 2, { e: 3 }],
    };
    const cloned = deepClone(original);

    expect(cloned).toEqual(original);
    expect(cloned).not.toBe(original);
    expect(cloned.a).not.toBe(original.a);
    expect(cloned.a.b).not.toBe(original.a.b);
    expect(cloned.d).not.toBe(original.d);
    expect(cloned.d[2]).not.toBe(original.d[2]);
  });

  test('modifying the cloned object should not affect the original', () => {
    const original = { a: { b: 1 }, c: [1, 2] };
    const cloned = deepClone(original);

    cloned.a.b = 99;
    cloned.c.push(3);

    expect(original.a.b).toBe(1);
    expect(original.c).toEqual([1, 2]);
  });

  test('should correctly clone Date and RegExp objects', () => {
    const original = {
      date: new Date(),
      regex: /abc/gi,
    };
    const cloned = deepClone(original);

    expect(cloned.date).toEqual(original.date);
    expect(cloned.date).not.toBe(original.date);
    expect(cloned.regex).toEqual(original.regex);
    expect(cloned.regex).not.toBe(original.regex);
  });

  test('should handle circular references', () => {
    const original = { a: 1 };
    original.b = original; // Circular reference

    const cloned = deepClone(original);

    expect(cloned.a).toBe(1);
    expect(cloned.b).toBe(cloned); // Check if the circular reference is maintained in the clone
    expect(cloned.b).not.toBe(original);
  });

  test('should handle complex circular references', () => {
    const obj1 = { name: 'obj1' };
    const obj2 = { name: 'obj2' };
    obj1.ref = obj2;
    obj2.ref = obj1;

    const cloned1 = deepClone(obj1);

    expect(cloned1.name).toBe('obj1');
    expect(cloned1.ref.name).toBe('obj2');
    expect(cloned1.ref.ref).toBe(cloned1);
    expect(cloned1.ref.ref).not.toBe(obj1);
  });
});
