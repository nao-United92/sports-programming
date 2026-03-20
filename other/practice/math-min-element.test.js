import { min } from './math-min-element';

describe('min', () => {
  test('returns minimum value in array', () => {
    expect(min([1, 2, 3])).toBe(1);
    expect(min([3, 1, 2])).toBe(1);
  });

  test('returns undefined for empty array', () => {
    expect(min([])).toBeUndefined();
  });
});
