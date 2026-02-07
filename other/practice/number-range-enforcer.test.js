const { clamp } = require('./number-range-enforcer');

describe('clamp', () => {
  it('should not change the number if it is within the range', () => {
    expect(clamp(5, 0, 10)).toBe(5);
  });

  it('should clamp to the lower bound if the number is smaller', () => {
    expect(clamp(-5, 0, 10)).toBe(0);
  });

  it('should clamp to the upper bound if the number is larger', () => {
    expect(clamp(15, 0, 10)).toBe(10);
  });

  it('should work with negative ranges', () => {
    expect(clamp(-15, -10, -5)).toBe(-10);
    expect(clamp(0, -10, -5)).toBe(-5);
    expect(clamp(-8, -10, -5)).toBe(-8);
  });

  it('should handle cases where lower and upper bounds are swapped', () => {
    expect(clamp(15, 10, 0)).toBe(10);
    expect(clamp(-5, 10, 0)).toBe(0);
    expect(clamp(5, 10, 0)).toBe(5);
  });

  it('should work when the number is equal to one of the bounds', () => {
    expect(clamp(0, 0, 10)).toBe(0);
    expect(clamp(10, 0, 10)).toBe(10);
  });
});
