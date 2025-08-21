import { invert } from './object-invert-utils.js';

describe('invert', () => {
  test('should invert keys and values of an object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const result = invert(obj);
    expect(result).toEqual({ 1: 'a', 2: 'b', 3: 'c' });
  });

  test('should handle duplicate values by overwriting with the last key', () => {
    const obj = { a: 1, b: 2, c: 1 };
    const result = invert(obj);
    expect(result).toEqual({ 1: 'c', 2: 'b' });
  });

  test('should convert non-string/number values to strings for keys', () => {
    const obj = { a: true, b: null, c: undefined, d: { x: 1 } };
    const result = invert(obj);
    expect(result).toEqual({
      'true': 'a',
      'null': 'b',
      'undefined': 'c',
      '[object Object]': 'd',
    });
  });

  test('should return an empty object for an empty input object', () => {
    const obj = {};
    const result = invert(obj);
    expect(result).toEqual({});
  });

  test('should not include inherited properties', () => {
    function Parent() {
      this.a = 1;
    }
    function Child() {
      this.b = 2;
    }
    Child.prototype = new Parent();
    const child = new Child();
    const result = invert(child);
    expect(result).toEqual({ 2: 'b' });
  });
});
