const last = require('./array-last-utils');

describe('last', () => {
  test('should return the last element of a non-empty array', () => {
    expect(last([1, 2, 3])).toBe(3);
    expect(last(['a', 'b', 'c'])).toBe('c');
    expect(last([null, 1, 2])).toBe(2);
    expect(last([undefined, 1, 2])).toBe(2);
  });

  test('should return undefined for an empty array', () => {
    expect(last([])).toBe(undefined);
  });

  test('should return the only element if array has one element', () => {
    expect(last([100])).toBe(100);
  });

  test('should throw an error for non-array input', () => {
    expect(() => last(null)).toThrow('Expected an array');
    expect(() => last(123)).toThrow('Expected an array');
    expect(() => last('string')).toThrow('Expected an array');
    expect(() => last({})).toThrow('Expected an array');
  });
});