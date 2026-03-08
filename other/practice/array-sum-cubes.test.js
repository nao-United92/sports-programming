import { sumCubes } from './array-sum-cubes';

describe('sumCubes', () => {
  test('should calculate sum of cubes', () => {
    expect(sumCubes([1, 2, 3])).toBe(1 + 8 + 27);
  });

  test('should return 0 for empty array', () => {
    expect(sumCubes([])).toBe(0);
  });
});
