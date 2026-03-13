const sampleWithoutReplacement = require('./array-sample-without-replacement');

describe('sampleWithoutReplacement', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  test('returns specified number of elements', () => {
    expect(sampleWithoutReplacement(arr, 3)).toHaveLength(3);
  });

  test('returns only unique elements from the original array', () => {
    const sampled = sampleWithoutReplacement(arr, 5);
    const uniqueSampled = [...new Set(sampled)];
    expect(uniqueSampled).toHaveLength(5);
    sampled.forEach(item => {
      expect(arr).toContain(item);
    });
  });

  test('returns entire array if n is larger than length', () => {
    expect(sampleWithoutReplacement([1, 2], 5)).toHaveLength(2);
  });

  test('handles empty array or zero n', () => {
    expect(sampleWithoutReplacement([], 5)).toEqual([]);
    expect(sampleWithoutReplacement([1, 2, 3], 0)).toEqual([]);
  });
});
