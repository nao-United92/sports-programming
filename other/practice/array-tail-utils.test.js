import { arrayTail } from './array-tail-utils';

describe('arrayTail', () => {
  test('returns all but the first element of an array', () => {
    expect(arrayTail([1, 2, 3])).toEqual([2, 3]);
  });

  test('returns empty array for array with one element', () => {
    expect(arrayTail([1])).toEqual([]);
  });

  test('returns empty array for empty array', () => {
    expect(arrayTail([])).toEqual([]);
  });
});
