import { omit } from './omit-utils.js';

describe('omit', () => {
  const data = { a: 1, b: 2, c: 3 };

  test('should create a shallow copy', () => {
    const result = omit(data, []);
    expect(result).toEqual(data);
    expect(result).not.toBe(data);
  });

  test('should omit a single key', () => {
    const result = omit(data, ['a']);
    expect(result).toEqual({ b: 2, c: 3 });
  });

  test('should omit multiple keys', () => {
    const result = omit(data, ['a', 'c']);
    expect(result).toEqual({ b: 2 });
  });

  test('should return the same object if no keys are omitted', () => {
    const result = omit(data, []);
    expect(result).toEqual({ a: 1, b: 2, c: 3 });
  });

  test('should handle non-existent keys', () => {
    const result = omit(data, ['d', 'e']);
    expect(result).toEqual(data);
  });

  test('should handle an empty source object', () => {
    const result = omit({}, ['a']);
    expect(result).toEqual({});
  });

  test('should not omit inherited properties', () => {
    function MyObject() {
      this.a = 1;
    }
    MyObject.prototype.b = 2;

    const instance = new MyObject();
    const result = omit(instance, ['a']);
    expect(result).toEqual({}); // Only own properties are considered
  });
});