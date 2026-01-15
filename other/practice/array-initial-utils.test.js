import { initial } from './array-initial-utils.js';

describe('initial', () => {
  test('should return all but the last element of an array', () => {
    expect(initial([1, 2, 3])).toEqual([1, 2]);
  });

  test('should return an empty array for a single-element array', () => {
    expect(initial([1])).toEqual([]);
  });

  test('should return an empty array for an empty array', () => {
    expect(initial([])).toEqual([]);
  });
});