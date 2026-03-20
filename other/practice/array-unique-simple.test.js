import { unique } from './array-unique-simple';

describe('unique', () => {
  test('returns unique elements', () => {
    expect(unique([1, 2, 2, 3])).toEqual([1, 2, 3]);
  });

  test('returns empty array for empty input', () => {
    expect(unique([])).toEqual([]);
  });
});
