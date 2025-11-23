import { set } from './object-set-utils';

describe('set', () => {
  it('should set a value at a given path', () => {
    const object = { 'a': { 'b': 2 } };
    set(object, 'a.b', 3);
    expect(object.a.b).toBe(3);
  });

  it('should create intermediate objects if they do not exist', () => {
    const object = {};
    set(object, 'a.b.c', 1);
    expect(object.a.b.c).toBe(1);
  });

  it('should create intermediate arrays for integer-keyed paths', () => {
    const object = {};
    set(object, 'a[0].b', 2);
    expect(object.a[0].b).toBe(2);
    expect(Array.isArray(object.a)).toBe(true);
  });

  it('should handle array paths', () => {
    const object = { 'a': [{ 'b': 2 }] };
    set(object, ['a', '0', 'b'], 3);
    expect(object.a[0].b).toBe(3);
  });

  it('should return the modified object', () => {
    const object = {};
    const result = set(object, 'x', 1);
    expect(result).toBe(object);
  });

  it('should not modify non-object inputs', () => {
    const str = 'hello';
    set(str, 'length', 10);
    expect(str.length).toBe(5); // Should remain unchanged
  });

  it('should handle setting a value at the root', () => {
    const object = {};
    set(object, 'a', 1);
    expect(object.a).toBe(1);
  });

  it('should overwrite existing values', () => {
    const object = { 'a': 1 };
    set(object, 'a', 2);
    expect(object.a).toBe(2);
  });
});
