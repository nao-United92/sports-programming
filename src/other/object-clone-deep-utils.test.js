const { cloneDeep } = require('./object-clone-deep-utils');

describe('cloneDeep', () => {
  test('should clone primitives', () => {
    expect(cloneDeep(1)).toBe(1);
    expect(cloneDeep('hello')).toBe('hello');
    expect(cloneDeep(null)).toBe(null);
    expect(cloneDeep(undefined)).toBe(undefined);
  });

  test('should clone a flat object', () => {
    const obj = { a: 1, b: 'test' };
    const cloned = cloneDeep(obj);
    expect(cloned).toEqual(obj);
    expect(cloned).not.toBe(obj);
  });

  test('should clone an object with nested objects', () => {
    const obj = { a: 1, b: { c: 2, d: { e: 3 } } };
    const cloned = cloneDeep(obj);
    expect(cloned).toEqual(obj);
    expect(cloned).not.toBe(obj);
    expect(cloned.b).not.toBe(obj.b);
    expect(cloned.b.d).not.toBe(obj.b.d);
  });

  test('should clone an array with primitives', () => {
    const arr = [1, 2, 3];
    const cloned = cloneDeep(arr);
    expect(cloned).toEqual(arr);
    expect(cloned).not.toBe(arr);
  });

  test('should clone an array with objects', () => {
    const arr = [{ a: 1 }, { b: 2 }];
    const cloned = cloneDeep(arr);
    expect(cloned).toEqual(arr);
    expect(cloned).not.toBe(arr);
    expect(cloned[0]).not.toBe(arr[0]);
  });

  test('should clone a Date object', () => {
    const date = new Date();
    const cloned = cloneDeep(date);
    expect(cloned).toEqual(date);
    expect(cloned).not.toBe(date);
    expect(cloned.getTime()).toBe(date.getTime());
  });
});
