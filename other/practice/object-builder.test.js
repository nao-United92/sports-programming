const { fromPairs } = require('./object-builder.js');

describe('fromPairs', () => {
  test('should create an object from an array of key-value pairs', () => {
    const pairs = [['a', 1], ['b', 2], ['c', 3]];
    expect(fromPairs(pairs)).toEqual({ a: 1, b: 2, c: 3 });
  });

  test('should handle empty array, returning an empty object', () => {
    expect(fromPairs([])).toEqual({});
  });

  test('should handle non-string keys, converting them to strings', () => {
    const pairs = [[1, 'a'], [2, 'b']];
    expect(fromPairs(pairs)).toEqual({ '1': 'a', '2': 'b' });
  });

  test('should handle duplicate keys, with the last one overriding previous', () => {
    const pairs = [['a', 1], ['b', 2], ['a', 3]];
    expect(fromPairs(pairs)).toEqual({ a: 3, b: 2 });
  });

  test('should handle null or undefined values', () => {
    const pairs = [['a', null], ['b', undefined]];
    expect(fromPairs(pairs)).toEqual({ a: null, b: undefined });
  });

  test('should throw an error if the argument is not an array', () => {
    expect(() => fromPairs(null)).toThrow('Expected an array for the first argument.');
    expect(() => fromPairs(undefined)).toThrow('Expected an array for the first argument.');
    expect(() => fromPairs({})).toThrow('Expected an array for the first argument.');
    expect(() => fromPairs('string')).toThrow('Expected an array for the first argument.');
  });

  test('should throw an error if any element is not a two-element array (pair)', () => {
    expect(() => fromPairs([['a', 1], 'b'])).toThrow('Each element in the array must be a key-value pair (an array of two elements).');
    expect(() => fromPairs([['a', 1], [2]])).toThrow('Each element in the array must be a key-value pair (an array of two elements).');
    expect(() => fromPairs([['a', 1], [2, 3, 4]])).toThrow('Each element in the array must be a key-value pair (an array of two elements).');
    expect(() => fromPairs([['a', 1], {}])).toThrow('Each element in the array must be a key-value pair (an array of two elements).');
  });
});
