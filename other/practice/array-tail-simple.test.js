import { tail } from './array-tail-simple';

describe('tail', () => {
  test('should return all but the first element', () => {
    expect(tail([1, 2, 3])).toEqual([2, 3]);
  });

  test('should return an empty array for a single-element array', () => {
    expect(tail([1])).toEqual([]);
  });

  test('should return an empty array for an empty input', () => {
    expect(tail([])).toEqual([]);
    expect(tail(null)).toEqual([]);
  });
});
