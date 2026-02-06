const initial = require('./array-initial-utils');

describe('initial', () => {
  test('should return all elements except the last for a non-empty array', () => {
    expect(initial([1, 2, 3, 4])).toEqual([1, 2, 3]);
    expect(initial(['a', 'b', 'c'])).toEqual(['a', 'b']);
    expect(initial([null, 1, 2])).toEqual([null, 1]);
    expect(initial([undefined, 1, 2])).toEqual([undefined, 1]);
  });

  test('should return an empty array for an empty array', () => {
    expect(initial([])).toEqual([]);
  });

  test('should return an empty array for an array with one element', () => {
    expect(initial([100])).toEqual([]);
  });

  test('should not modify the original array', () => {
    const originalArray = [1, 2, 3];
    initial(originalArray);
    expect(originalArray).toEqual([1, 2, 3]);
  });

  test('should throw an error for non-array input', () => {
    expect(() => initial(null)).toThrow('Expected an array');
    expect(() => initial(123)).toThrow('Expected an array');
    expect(() => initial('string')).toThrow('Expected an array');
    expect(() => initial({})).toThrow('Expected an array');
  });
});
