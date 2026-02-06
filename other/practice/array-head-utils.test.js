const head = require('./array-head-utils');

describe('head', () => {
  test('should return the first element of a non-empty array', () => {
    expect(head([1, 2, 3])).toBe(1);
    expect(head(['a', 'b', 'c'])).toBe('a');
    expect(head([null, 1, 2])).toBe(null);
    expect(head([undefined, 1, 2])).toBe(undefined);
  });

  test('should return undefined for an empty array', () => {
    expect(head([])).toBe(undefined);
  });

  test('should return the only element if array has one element', () => {
    expect(head([100])).toBe(100);
  });

  test('should throw an error for non-array input', () => {
    expect(() => head(null)).toThrow('Expected an array');
    expect(() => head(123)).toThrow('Expected an array');
    expect(() => head('string')).toThrow('Expected an array');
    expect(() => head({})).toThrow('Expected an array');
  });
});