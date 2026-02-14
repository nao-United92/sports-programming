const { compact } = require('./array-compact-non-empty');

describe('compact', () => {
  test('should remove null, undefined, empty strings, empty arrays, and empty objects', () => {
    const arr = [
      1,
      null,
      'hello',
      undefined,
      '',
      [1, 2],
      [],
      { a: 1 },
      {},
      '  ',
      0,
      false,
    ];
    expect(compact(arr)).toEqual([1, 'hello', [1, 2], { a: 1 }, 0, false]);
  });

  test('should return an empty array if all elements are empty values', () => {
    const arr = [null, undefined, '', [], {}, '  '];
    expect(compact(arr)).toEqual([]);
  });

  test('should return the same array if no empty values are present', () => {
    const arr = [1, 'test', { a: 1 }, [1]];
    expect(compact(arr)).toEqual([1, 'test', { a: 1 }, [1]]);
  });

  test('should handle empty array input', () => {
    expect(compact([])).toEqual([]);
  });

  test('should handle nested empty objects/arrays if they are not the top-level items to be compacted', () => {
    const arr = [{ a: {} }, [[]]];
    expect(compact(arr)).toEqual([{ a: {} }, [[]]]);
  });

  test('should throw TypeError if argument is not an array', () => {
    expect(() => compact('not an array')).toThrow(TypeError);
    expect(() => compact(null)).toThrow(TypeError);
    expect(() => compact(undefined)).toThrow(TypeError);
    expect(() => compact({})).toThrow(TypeError);
    expect(() => compact(123)).toThrow(TypeError);
  });
});
