import { last } from './array-last-utils.js';

describe('last', () => {
  test('should return the last element of an array', () => {
    expect(last([1, 2, 3])).toBe(3);
  });

  test('should return undefined for an empty array', () => {
    expect(last([])).toBeUndefined();
  });

  test('should return the element for a single-element array', () => {
    expect(last([1])).toBe(1);
  });
});
