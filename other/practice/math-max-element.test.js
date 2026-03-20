import { max } from './math-max-element';

describe('max', () => {
  test('returns maximum value in array', () => {
    expect(max([1, 2, 3])).toBe(3);
    expect(max([3, 1, 2])).toBe(3);
  });

  test('returns undefined for empty array', () => {
    expect(max([])).toBeUndefined();
  });
});
