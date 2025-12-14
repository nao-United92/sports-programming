import map from './array-map-utils';

describe('map', () => {
  test('should apply a function to each element of an array', () => {
    const array = [1, 2, 3];
    expect(map(array, (x) => x * 2)).toEqual([2, 4, 6]);
  });

  test('should return an empty array if given an empty array', () => {
    expect(map([], (x) => x * 2)).toEqual([]);
  });

  test('should pass index and array to the callback', () => {
    const array = [1, 2, 3];
    const result = [];
    map(array, (x, i, arr) => {
      result.push({ value: x, index: i, original: arr });
    });
    expect(result).toEqual([
      { value: 1, index: 0, original: [1, 2, 3] },
      { value: 2, index: 1, original: [1, 2, 3] },
      { value: 3, index: 2, original: [1, 2, 3] },
    ]);
  });
});
