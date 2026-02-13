import isJsonObject from './is-json-object';

describe('isJsonObject', () => {
  test('should return true for a plain JSON object', () => {
    expect(isJsonObject({})).toBe(true);
    expect(isJsonObject({
      a: 1,
      b: 'test'
    })).toBe(true);
    expect(isJsonObject(JSON.parse('{"a":1}'))).toBe(true);
  });

  test('should return false for non-object types', () => {
    expect(isJsonObject(null)).toBe(false);
    expect(isJsonObject(undefined)).toBe(false);
    expect(isJsonObject(123)).toBe(false);
    expect(isJsonObject('string')).toBe(false);
    expect(isJsonObject(true)).toBe(false);
    expect(isJsonObject(Symbol('foo'))).toBe(false);
  });

  test('should return false for arrays', () => {
    expect(isJsonObject([])).toBe(false);
    expect(isJsonObject([1, 2, 3])).toBe(false);
  });

  test('should return false for functions', () => {
    expect(isJsonObject(() => {})).toBe(false);
    expect(isJsonObject(function() {})).toBe(false);
  });

  test('should return false for Date objects', () => {
    expect(isJsonObject(new Date())).toBe(false);
  });

  test('should return false for RegExp objects', () => {
    expect(isJsonObject(/abc/)).toBe(false);
  });

  test('should return false for instances of custom classes', () => {
    class MyClass {
      constructor() {
        this.a = 1;
      }
    }
    expect(isJsonObject(new MyClass())).toBe(false);
  });

  test('should return true for objects with a null prototype', () => {
    // Objects created with Object.create(null) are plain JSON-compatible,
    // but their prototype is null. My current implementation handles this.
    expect(isJsonObject(Object.create(null))).toBe(true);
  });

  test('should return false for objects with a custom prototype', () => {
    const proto = {
      x: 1
    };
    const obj = Object.create(proto);
    obj.y = 2;
    expect(isJsonObject(obj)).toBe(false);
  });
});
