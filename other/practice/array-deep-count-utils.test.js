import { deepCount } from './array-deep-count-utils';

describe('deepCount', () => {
  it('should count elements in a nested array', () => {
    expect(deepCount([1, 2, [3, 4, [5]]])).toBe(7);
  });

  it('should return 0 for an empty array', () => {
    expect(deepCount([])).toBe(0);
  });

  it('should handle an array with no nesting', () => {
    expect(deepCount([1, 2, 3])).toBe(3);
  });

  it('should handle complex nested arrays', () => {
    expect(deepCount([1, [2, [3, [4, [5]]]]])).toBe(9);
  });
});
