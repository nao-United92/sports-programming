const { inRange } = require('./number-boundary-checker');

describe('inRange', () => {
  it('should return true if number is within the range (exclusive end)', () => {
    expect(inRange(3, 2, 4)).toBe(true);
  });

  it('should return false if number is outside the range', () => {
    expect(inRange(1, 2, 4)).toBe(false);
    expect(inRange(4, 2, 4)).toBe(false); // end is exclusive
  });

  it('should handle start and end being swapped', () => {
    expect(inRange(3, 4, 2)).toBe(true);
    expect(inRange(2, 4, 2)).toBe(true);
    expect(inRange(4, 4, 2)).toBe(false);
  });

  it('should work with only one argument for range (start is 0, end is argument)', () => {
    expect(inRange(3, 5)).toBe(true);
    expect(inRange(5, 5)).toBe(false);
    expect(inRange(-1, 5)).toBe(false);
  });

  it('should work with negative numbers', () => {
    expect(inRange(-3, -5, -1)).toBe(true);
    expect(inRange(-1, -5, -1)).toBe(false);
    expect(inRange(-6, -5, -1)).toBe(false);
  });

  it('should return false for non-numeric inputs', () => {
    expect(inRange('3', 2, 4)).toBe(false);
    expect(inRange(3, '2', 4)).toBe(false);
  });
});
