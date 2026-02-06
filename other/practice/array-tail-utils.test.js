const tail = require('./array-tail-utils');

describe('tail', () => {
  test('should return all elements except the first for a non-empty array', () => {
    expect(tail([1, 2, 3, 4])).toEqual([2, 3, 4]);
    expect(tail(['a', 'b', 'c'])).toEqual(['b', 'c']);
    expect(tail([null, 1, 2])).toEqual([1, 2]);
    expect(tail([undefined, 1, 2])).toEqual([1, 2]);
  });

  test('should return an empty array for an empty array', () => {
    expect(tail([])).toEqual([]);
  });

  test('should return an empty array for an array with one element', () => {
    expect(tail([100])).toEqual([]);
  });

  test('should not modify the original array', () => {
    const originalArray = [1, 2, 3];
    tail(originalArray);
    expect(originalArray).toEqual([1, 2, 3]);
  });

  test('should throw an error for non-array input', () => {
    expect(() => tail(null)).toThrow('Expected an array');
    expect(() => tail(123)).toThrow('Expected an array');
    expect(() => tail('string')).toThrow('Expected an array');
    expect(() => tail({})).toThrow('Expected an array');
  });
});
