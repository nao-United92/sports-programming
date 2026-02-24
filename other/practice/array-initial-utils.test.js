import { arrayInitial } from './array-initial-utils';

describe('arrayInitial', () => {
  test('returns all but the last element of an array', () => {
    expect(arrayInitial([1, 2, 3])).toEqual([1, 2]);
  });

  test('returns empty array for array with one element', () => {
    expect(arrayInitial([1])).toEqual([]);
  });

  test('returns empty array for empty array', () => {
    expect(arrayInitial([])).toEqual([]);
  });
});
