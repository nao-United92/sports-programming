const nPermutations = require('./math-n-permutations');

describe('nPermutations', () => {
  test('calculates permutations correctly', () => {
    expect(nPermutations(5, 2)).toBe(20);
    expect(nPermutations(5, 3)).toBe(60);
    expect(nPermutations(5, 5)).toBe(120);
    expect(nPermutations(10, 3)).toBe(720);
    expect(nPermutations(5, 0)).toBe(1);
  });

  test('returns 0 for invalid inputs', () => {
    expect(nPermutations(5, 6)).toBe(0);
    expect(nPermutations(-1, 2)).toBe(0);
    expect(nPermutations(5, -1)).toBe(0);
  });
});
