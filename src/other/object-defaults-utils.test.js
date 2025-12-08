const defaults = require('./object-defaults-utils');

describe('defaults', () => {
  test('should fill in undefined properties', () => {
    const obj = { a: 1 };
    const source = { b: 2, c: 3 };
    expect(defaults(obj, source)).toEqual({ a: 1, b: 2, c: 3 });
  });

  test('should not override existing properties', () => {
    const obj = { a: 1, b: 'original' };
    const source = { b: 'new', c: 3 };
    expect(defaults(obj, source)).toEqual({ a: 1, b: 'original', c: 3 });
  });

  test('should not override null properties', () => {
    const obj = { a: null };
    const source = { a: 1 };
    expect(defaults(obj, source)).toEqual({ a: null });
  });
  
  test('should handle multiple source objects', () => {
    const obj = { a: 1 };
    const source1 = { b: 2 };
    const source2 = { c: 3, a: 99 };
    expect(defaults(obj, source1, source2)).toEqual({ a: 1, b: 2, c: 3 });
  });

  test('should apply sources from left to right', () => {
    const obj = { a: undefined };
    const source1 = { a: 1, b: 2 };
    const source2 = { a: 99, b: 98 };
    expect(defaults(obj, source1, source2)).toEqual({ a: 1, b: 2 });
  });

  test('should not mutate the original object', () => {
    const obj = { a: 1 };
    const source = { b: 2 };
    const result = defaults(obj, source);
    expect(result).not.toBe(obj);
    expect(obj).toEqual({ a: 1 });
  });
  
  test('should handle null and undefined sources', () => {
    const obj = { a: 1 };
    expect(defaults(obj, null, { b: 2 }, undefined, { c: 3 })).toEqual({ a: 1, b: 2, c: 3 });
  });

  test('should include inherited properties from the source', () => {
    function Source() {
      this.b = 2;
    }
    Source.prototype.c = 3;

    const source = new Source();
    const obj = { a: 1 };

    expect(defaults(obj, source)).toEqual({ a: 1, b: 2, c: 3 });
  });
});
