import { initial } from './array-initial-simple';

describe('initial', () => {
  test('should return all but the last element', () => {
    expect(initial([1, 2, 3])).toEqual([1, 2]);
  });

  test('should return an empty array for a single-element array', () => {
    expect(initial([1])).toEqual([]);
  });

  test('should return an empty array for an empty input', () => {
    expect(initial([])).toEqual([]);
    expect(initial(null)).toEqual([]);
  });
});
