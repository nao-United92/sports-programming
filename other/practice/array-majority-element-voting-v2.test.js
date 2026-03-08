import { majorityElementN3 } from './array-majority-element-voting-v2';

describe('majorityElementN3', () => {
  test('should find elements appearing more than n/3 times', () => {
    expect(majorityElementN3([3, 2, 3]).sort()).toEqual([3]);
    expect(majorityElementN3([1, 1, 1, 3, 3, 2, 2, 2]).sort()).toEqual([1, 2]);
  });
});
