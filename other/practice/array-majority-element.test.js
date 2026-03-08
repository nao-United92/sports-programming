import { majorityElement } from './array-majority-element';

describe('majorityElement', () => {
  test('should find the majority element', () => {
    expect(majorityElement([3, 2, 3])).toBe(3);
    expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toBe(2);
  });

  test('should return null if no majority element exists', () => {
    expect(majorityElement([1, 2, 3])).toBe(null);
  });

  test('should return null for empty array', () => {
    expect(majorityElement([])).toBe(null);
  });
});
