import { sampleSize } from './array-sample-size';

describe('sampleSize', () => {
  test('returns the specified number of random elements', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = sampleSize(arr, 3);
    expect(result).toHaveLength(3);
    result.forEach(item => expect(arr).toContain(item));
  });

  test('returns all elements if n is greater than array length', () => {
    const arr = [1, 2];
    expect(sampleSize(arr, 5)).toHaveLength(2);
  });

  test('returns an empty array for invalid n', () => {
    expect(sampleSize([1, 2], 0)).toEqual([]);
    expect(sampleSize([1, 2], -1)).toEqual([]);
  });
});
