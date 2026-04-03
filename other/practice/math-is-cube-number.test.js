const isCubeNumber = require('./math-is-cube-number');

describe('isCubeNumber', () => {
  test('returns true for perfect cube numbers', () => {
    expect(isCubeNumber(0)).toBe(true);
    expect(isCubeNumber(1)).toBe(true);
    expect(isCubeNumber(8)).toBe(true);
    expect(isCubeNumber(27)).toBe(true);
    expect(isCubeNumber(64)).toBe(true);
    expect(isCubeNumber(125)).toBe(true);
    expect(isCubeNumber(1000)).toBe(true);
    expect(isCubeNumber(-1)).toBe(true);
    expect(isCubeNumber(-8)).toBe(true);
  });

  test('returns false for non-perfect cube numbers', () => {
    expect(isCubeNumber(2)).toBe(false);
    expect(isCubeNumber(3)).toBe(false);
    expect(isCubeNumber(4)).toBe(false);
    expect(isCubeNumber(9)).toBe(false);
    expect(isCubeNumber(26)).toBe(false);
    expect(isCubeNumber(28)).toBe(false);
    expect(isCubeNumber(1.5)).toBe(false);
  });
});
