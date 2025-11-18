const { deepClone } = require('./object-deep-clone');

describe('deepClone', () => {
  test('should return the same value for primitives', () => {
    expect(deepClone(123)).toBe(123);
    expect(deepClone('hello')).toBe('hello');
    expect(deepClone(null)).toBeNull();
    expect(deepClone(undefined)).toBeUndefined();
  });

  test('should clone a flat object', () => {
    const original = { a: 1, b: 'test' };
    const cloned = deepClone(original);
    expect(cloned).toEqual(original);
    expect(cloned).not.toBe(original);
  });

  test('should clone a nested object', () => {
    const original = { a: 1, b: { c: 2, d: { e: 3 } } };
    const cloned = deepClone(original);
    expect(cloned).toEqual(original);
    expect(cloned).not.toBe(original);
    expect(cloned.b).not.toBe(original.b);
    expect(cloned.b.d).not.toBe(original.b.d);
  });

  test('should clone an object with an array', () => {
    const original = { a: [1, 2, 3], b: 'test' };
    const cloned = deepClone(original);
    expect(cloned).toEqual(original);
    expect(cloned).not.toBe(original);
    expect(cloned.a).not.toBe(original.a);
  });

  test('should clone an array of objects', () => {
    const original = [{ a: 1 }, { b: 2 }];
    const cloned = deepClone(original);
    expect(cloned).toEqual(original);
    expect(cloned).not.toBe(original);
    expect(cloned[0]).not.toBe(original[0]);
  });
});
