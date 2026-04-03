const arrayUnionMultiple = require('./array-union-multiple');

describe('arrayUnionMultiple', () => {
  test('should return unique elements from multiple arrays', () => {
    expect(arrayUnionMultiple([1, 2], [2, 3], [3, 4])).toEqual([1, 2, 3, 4]);
  });

  test('should handle single array', () => {
    expect(arrayUnionMultiple([1, 2, 2, 3])).toEqual([1, 2, 3]);
  });

  test('should handle empty arrays', () => {
    expect(arrayUnionMultiple([], [1], [])).toEqual([1]);
  });

  test('should handle no arguments', () => {
    expect(arrayUnionMultiple()).toEqual([]);
  });

  test('should handle arrays with different types', () => {
    expect(arrayUnionMultiple([1, 'a'], ['a', true], [true, 1])).toEqual([1, 'a', true]);
  });
});
