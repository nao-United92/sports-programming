import { pick } from './pick-utils.js';

describe('pick', () => {
  const data = { a: 1, b: 2, c: 3 };

  test('should create a shallow copy', () => {
    const result = pick(data, ['a', 'b', 'c']);
    expect(result).toEqual(data);
    expect(result).not.toBe(data);
  });

  test('should pick a single key', () => {
    const result = pick(data, ['a']);
    expect(result).toEqual({ a: 1 });
  });

  test('should pick multiple keys', () => {
    const result = pick(data, ['a', 'c']);
    expect(result).toEqual({ a: 1, c: 3 });
  });

  test('should return an empty object if no keys are picked', () => {
    const result = pick(data, []);
    expect(result).toEqual({});
  });

  test('should handle non-existent keys gracefully', () => {
    const result = pick(data, ['a', 'd']);
    expect(result).toEqual({ a: 1 });
  });

  test('should handle an empty source object', () => {
    const result = pick({}, ['a']);
    expect(result).toEqual({});
  });

  test('should not pick inherited properties', () => {
    function MyObject() {
      this.a = 1;
    }
    MyObject.prototype.b = 2;

    const instance = new MyObject();
    const result = pick(instance, ['a', 'b']);
    expect(result).toEqual({ a: 1 }); // Only picks own properties
  });
});