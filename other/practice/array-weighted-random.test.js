import { weightedRandom } from './array-weighted-random';

describe('weightedRandom', () => {
  test('should return an element from the array', () => {
    const arr = ['a', 'b', 'c'];
    const weights = [1, 10, 1];
    const res = weightedRandom(arr, weights);
    expect(arr).toContain(res);
  });

  test('should eventually pick elements according to weights', () => {
    const arr = ['a', 'b'];
    const weights = [0, 1]; // 'a' should never be picked
    for (let i = 0; i < 10; i++) {
      expect(weightedRandom(arr, weights)).toBe('b');
    }
  });
});
