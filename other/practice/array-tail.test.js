import { tail } from './array-tail';

describe('tail', () => {
  test('returns all but the first element of an array', () => {
    expect(tail([1, 2, 3])).toEqual([2, 3]);
  });

  test('returns an empty array for an empty array', () => {
    expect(tail([])).toEqual([]);
  });

  test('returns an empty array for a single element array', () => {
    expect(tail([1])).toEqual([]);
  });
});
