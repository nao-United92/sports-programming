import { standardScore } from './array-standard-score';

describe('standardScore', () => {
  test('should calculate z-scores correctly', () => {
    const scores = standardScore([10, 20, 30]);
    expect(scores[1]).toBe(0);
    expect(scores[0]).toBeLessThan(0);
    expect(scores[2]).toBeGreaterThan(0);
  });

  test('should return 0s if all values are same', () => {
    expect(standardScore([5, 5, 5])).toEqual([0, 0, 0]);
  });
});
