import { majorityElementsK } from './array-majority-element-k';

describe('majorityElementsK', () => {
  test('should find elements appearing more than n/3 times', () => {
    const res = majorityElementsK([3, 2, 3, 1, 2, 2, 3], 3);
    expect(res.sort()).toEqual([2, 3]);
  });

  test('should handle k=2 (standard majority)', () => {
    expect(majorityElementsK([3, 2, 3], 2)).toEqual([3]);
  });

  test('should return empty if none found', () => {
    expect(majorityElementsK([1, 2, 3, 4], 4)).toEqual([]);
  });
});
