import { set } from './set-utils.js';

describe('set', () => {
  let obj;

  beforeEach(() => {
    obj = {
      a: {
        b: {
          c: 'hello',
        },
      },
    };
  });

  test('should set a top-level property', () => {
    set(obj, 'd', 'world');
    expect(obj.d).toBe('world');
  });

  test('should set a nested property', () => {
    set(obj, 'a.b.d', 'world');
    expect(obj.a.b.d).toBe('world');
  });

  test('should create nested objects if they do not exist', () => {
    set(obj, 'x.y.z', 'new');
    expect(obj.x.y.z).toBe('new');
  });

  test('should overwrite an existing property', () => {
    set(obj, 'a.b.c', 'new value');
    expect(obj.a.b.c).toBe('new value');
  });

  test('should handle an array path', () => {
    set(obj, ['a', 'b', 'e'], 'another');
    expect(obj.a.b.e).toBe('another');
  });

  test('should return the modified object', () => {
    const result = set(obj, 'a.f', 'test');
    expect(result).toBe(obj);
    expect(result.a.f).toBe('test');
  });

  test('should handle setting a property on a non-object value', () => {
    set(obj, 'a.b.c.d', 'test');
    expect(obj.a.b.c.d).toBe('test');
  });
});
