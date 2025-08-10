import { set } from './set-utils';

describe('set', () => {
  let obj;

  beforeEach(() => {
    obj = { a: { b: { c: 1 } }, d: [{ e: 2 }] };
  });

  test('should set a value on a nested object using a string path', () => {
    set(obj, 'a.b.c', 2);
    expect(obj.a.b.c).toBe(2);
  });

  test('should set a value on a nested object using an array path', () => {
    set(obj, ['a', 'b', 'c'], 3);
    expect(obj.a.b.c).toBe(3);
  });

  test('should create nested properties if they do not exist', () => {
    const newObj = {};
    set(newObj, 'x.y.z', 10);
    expect(newObj.x.y.z).toBe(10);
  });

  test('should set a value in an array using bracket notation', () => {
    set(obj, 'd[0].e', 5);
    expect(obj.d[0].e).toBe(5);
  });

  test('should create nested arrays and objects', () => {
    const newObj = {};
    set(newObj, 'a[0].b.c', 100);
    expect(newObj.a[0].b.c).toBe(100);
    expect(Array.isArray(newObj.a)).toBe(true);
    expect(typeof newObj.a[0].b).toBe('object');
  });

  test('should not overwrite existing objects unless it is the final path segment', () => {
    set(obj, 'a.b.d', 4);
    expect(obj.a.b.c).toBe(1);
    expect(obj.a.b.d).toBe(4);
  });

  test('should return the modified object', () => {
    const result = set({}, 'a.b', 1);
    expect(result).toEqual({ a: { b: 1 } });
  });

  test('should not do anything if the object is not an object', () => {
    const notAnObject = null;
    const result = set(notAnObject, 'a.b', 1);
    expect(result).toBeNull();

    const alsoNotAnObject = 'string';
    const result2 = set(alsoNotAnObject, 'a.b', 1);
    expect(result2).toBe('string');
  });

  test('should handle a path that leads to an array extension', () => {
    const newObj = { a: [] };
    set(newObj, 'a[0]', 'hello');
    expect(newObj.a[0]).toBe('hello');
  });
});