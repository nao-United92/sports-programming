const set = require('./object-set-utils');

describe('set', () => {
  let obj;
  beforeEach(() => {
    obj = {
      a: [
        { b: { c: 3 } },
        4
      ],
      x: {},
    };
  });

  test('should set a value on a nested path', () => {
    const newObj = set(obj, 'a[0].b.c', 10);
    expect(newObj.a[0].b.c).toBe(10);
    expect(obj.a[0].b.c).toBe(3); // Original should be unchanged
  });

  test('should create nested properties if they do not exist', () => {
    const newObj = set(obj, 'x.y.z', 'new value');
    expect(newObj.x.y.z).toBe('new value');
    expect(obj.x.y).toBe(undefined); // Original should be unchanged
  });

  test('should create nested arrays if path indicates numeric index', () => {
    const newObj = set({}, 'a[0].b', 'test');
    expect(newObj.a).toBeInstanceOf(Array);
    expect(newObj.a[0].b).toBe('test');
  });

  test('should not mutate the original object', () => {
    const newObj = set(obj, 'x.y', 'test');
    expect(obj).not.toBe(newObj);
    expect(obj.x).not.toBe(newObj.x);
    expect(obj.a).toBe(newObj.a); // Unaffected paths should be the same reference
  });

  test('should handle array paths', () => {
    const newObj = set(obj, ['a', '0', 'b', 'c'], 99);
    expect(newObj.a[0].b.c).toBe(99);
    expect(obj.a[0].b.c).toBe(3);
  });
  
  test('should overwrite an existing property', () => {
    const newObj = set(obj, 'a[1]', { overwritten: true });
    expect(newObj.a[1]).toEqual({ overwritten: true });
    expect(obj.a[1]).toBe(4);
  });
  
  test('should handle setting a value on the root', () => {
    const newObj = set(obj, 'a', 'new root value');
    expect(newObj.a).toBe('new root value');
    expect(Array.isArray(obj.a)).toBe(true);
  });

  test('should return a shallow copy for an empty path', () => {
    const newObj = set(obj, []);
    expect(newObj).toEqual(obj);
    expect(newObj).not.toBe(obj);
  });
});