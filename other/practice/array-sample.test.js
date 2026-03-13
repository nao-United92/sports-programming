import { sample } from './array-sample.js';

describe('sample', () => {
  test('returns an element from the array', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = sample(arr);
    expect(arr).toContain(result);
  });

  test('returns undefined for an empty array', () => {
    expect(sample([])).toBeUndefined();
  });

  test('returns the only element for a single-element array', () => {
    expect(sample([10])).toBe(10);
  });

  test('works with different data types', () => {
    const arr = [{ a: 1 }, [2], '3'];
    const result = sample(arr);
    expect(arr).toContain(result);
  });
});
