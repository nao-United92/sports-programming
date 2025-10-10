const { set } = require('./object-set-utils.js');

describe('set', () => {
  test('should set a value on a nested path', () => {
    const obj = { a: { b: 2 } };
    const newObj = set(obj, 'a.c', 3);
    expect(newObj.a.c).toBe(3);
  });

  test('should not mutate the original object', () => {
    const obj = { a: { b: 2 } };
    set(obj, 'a.c', 3);
    expect(obj.a.c).toBeUndefined();
  });

  test('should create nested properties if they do not exist', () => {
    const obj = {};
    const newObj = set(obj, 'a.b.c', 1);
    expect(newObj.a.b.c).toBe(1);
  });

  test('should set a value in a nested array', () => {
    const obj = { a: [{ b: 1 }] };
    const newObj = set(obj, 'a[0].c', 2);
    expect(newObj.a[0].c).toBe(2);
  });

  test('should create nested arrays', () => {
    const obj = {};
    const newObj = set(obj, 'a[0].b', 1);
    expect(Array.isArray(newObj.a)).toBe(true);
    expect(newObj.a[0].b).toBe(1);
  });

  test('should handle a null or undefined initial object', () => {
    const newObj = set(null, 'a.b', 1);
    expect(newObj.a.b).toBe(1);
  });

  test('should deep clone nested objects and arrays when setting values', () => {
    const originalNested = { c: 3 };
    const obj = { a: { b: originalNested } };
    const newObj = set(obj, 'a.b.d', 4);

    expect(newObj.a.b.c).toBe(3);
    expect(newObj.a.b.d).toBe(4);
    expect(newObj.a.b).not.toBe(originalNested); // Ensure deepClone was used
    expect(obj.a.b.d).toBeUndefined(); // Original object should not be mutated
  });

  test('should handle Date objects correctly during deep cloning', () => {
    const date = new Date();
    const obj = { a: date };
    const newObj = set(obj, 'b', 1);

    expect(newObj.a).toEqual(date);
    expect(newObj.a).not.toBe(date); // Should be a cloned Date object
    expect(obj.b).toBeUndefined();
  });
});