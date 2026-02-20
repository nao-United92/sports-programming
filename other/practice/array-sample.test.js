import { sample } from './array-sample';

describe('sample', () => {
  test('returns a random element from the array', () => {
    const arr = [1, 2, 3];
    const result = sample(arr);
    expect(arr).toContain(result);
  });

  test('returns undefined for an empty array', () => {
    expect(sample([])).toBeUndefined();
  });
});
