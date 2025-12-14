import flatten from './array-flatten-utils';

describe('flatten', () => {
  test('should flatten a nested array', () => {
    expect(flatten([1, [2, 3]])).toEqual([1, 2, 3]);
  });

  test('should only flatten one level deep', () => {
    expect(flatten([1, [2, [3, 4]]])).toEqual([1, 2, [3, 4]]);
  });

  test('should handle an already flat array', () => {
    expect(flatten([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test('should handle an empty array', () => {
    expect(flatten([])).toEqual([]);
  });
});
