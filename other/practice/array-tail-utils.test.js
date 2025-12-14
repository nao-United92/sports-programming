import tail from './array-tail-utils';

describe('tail', () => {
  test('should return all but the first element of an array', () => {
    expect(tail([1, 2, 3])).toEqual([2, 3]);
  });

  test('should return an empty array for an array with one element', () => {
    expect(tail([1])).toEqual([]);
  });

  test('should return an empty array for an empty array', () => {
    expect(tail([])).toEqual([]);
  });
});
