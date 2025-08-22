import { defaults } from './defaults-utils.js';

describe('defaults', () => {
  test('should apply default values for undefined properties', () => {
    const obj = { a: 1 };
    const source = { b: 2, c: 3 };
    defaults(obj, source);
    expect(obj).toEqual({ a: 1, b: 2, c: 3 });
  });

  test('should not overwrite existing properties', () => {
    const obj = { a: 1, b: 2 };
    const source = { b: 99, c: 3 };
    defaults(obj, source);
    expect(obj).toEqual({ a: 1, b: 2, c: 3 });
  });

  test('should handle multiple source objects', () => {
    const obj = { a: 1 };
    const source1 = { b: 2, c: 3 };
    const source2 = { c: 99, d: 4 };
    defaults(obj, source1, source2);
    expect(obj).toEqual({ a: 1, b: 2, c: 3, d: 4 });
  });

  test('should not overwrite null properties', () => {
    const obj = { a: null };
    const source = { a: 1, b: 2 };
    defaults(obj, source);
    expect(obj).toEqual({ a: null, b: 2 });
  });

  test('should handle null or undefined sources gracefully', () => {
    const obj = { a: 1 };
    defaults(obj, null, { b: 2 }, undefined, { c: 3 });
    expect(obj).toEqual({ a: 1, b: 2, c: 3 });
  });

  test('should return the modified object', () => {
    const obj = { a: 1 };
    const result = defaults(obj, { b: 2 });
    expect(result).toBe(obj);
  });

  test('should apply defaults from inherited properties of source', () => {
    function Source() {
      this.b = 2;
    }
    Source.prototype.c = 3;

    const obj = { a: 1 };
    const source = new Source();
    defaults(obj, source);
    expect(obj).toEqual({ a: 1, b: 2, c: 3 });
  });
});

describe('defaultsDeep', () => {
  test('should recursively apply default values', () => {
    const obj = { a: { b: 1 } };
    const source = { a: { b: 2, c: 3 }, d: 4 };
    defaultsDeep(obj, source);
    expect(obj).toEqual({ a: { b: 1, c: 3 }, d: 4 });
  });

  test('should not overwrite existing nested properties', () => {
    const obj = { a: { b: 1 } };
    const source = { a: { b: 99 } };
    defaultsDeep(obj, source);
    expect(obj).toEqual({ a: { b: 1 } });
  });

  test('should handle multiple nested source objects', () => {
    const obj = { a: { b: 1 } };
    const source1 = { a: { c: 2 } };
    const source2 = { a: { b: 99, d: 3 }, e: 4 };
    defaultsDeep(obj, source1, source2);
    expect(obj).toEqual({ a: { b: 1, c: 2, d: 3 }, e: 4 });
  });
});
