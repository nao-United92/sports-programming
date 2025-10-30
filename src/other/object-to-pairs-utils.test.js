const { toPairs } = require('./object-to-pairs-utils.js');

describe('toPairs', () => {
  it('should convert a simple object to an array of pairs', () => {
    const obj = { a: 1, b: 'hello', c: true };
    expect(toPairs(obj)).toEqual([['a', 1], ['b', 'hello'], ['c', true]]);
  });

  it('should handle an empty object', () => {
    expect(toPairs({})).toEqual([]);
  });

  it('should handle objects with different data types', () => {
    const obj = { num: 123, str: 'test', bool: false, arr: [1, 2], obj: { x: 1 } };
    expect(toPairs(obj)).toEqual([
      ['num', 123],
      ['str', 'test'],
      ['bool', false],
      ['arr', [1, 2]],
      ['obj', { x: 1 }],
    ]);
  });

  it('should return an empty array for null or undefined input', () => {
    expect(toPairs(null)).toEqual([]);
    expect(toPairs(undefined)).toEqual([]);
  });

  it('should return an empty array for non-object input', () => {
    expect(toPairs(123)).toEqual([]);
    expect(toPairs('string')).toEqual([]);
    expect(toPairs(true)).toEqual([]);
    expect(toPairs([])).toEqual([]); // Arrays are objects, but Object.entries on array gives [index, value]
  });

  it('should handle objects with symbol keys (Object.entries ignores symbols)', () => {
    const sym = Symbol('test');
    const obj = { a: 1, [sym]: 'symbol_value' };
    expect(toPairs(obj)).toEqual([['a', 1]]);
  });
});