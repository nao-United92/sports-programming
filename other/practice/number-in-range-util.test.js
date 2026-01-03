const inRange = require('./number-in-range-util');

describe('inRange', () => {
  it('should return true if the number is within the range (exclusive of end)', () => {
    expect(inRange(3, 2, 4)).toBe(true);
  });

  it('should return false if the number is outside the range', () => {
    expect(inRange(1, 2, 4)).toBe(false);
    expect(inRange(4, 2, 4)).toBe(false); // End is exclusive
  });

  it('should handle negative numbers', () => {
    expect(inRange(-3, -4, -2)).toBe(true);
    expect(inRange(-5, -4, -2)).toBe(false);
  });

  it('should swap start and end if start is greater than end', () => {
    expect(inRange(3, 4, 2)).toBe(true); // Effectively inRange(3, 2, 4)
  });

  it('should treat start as 0 if only two arguments are provided', () => {
    expect(inRange(3, 5)).toBe(true); // Effectively inRange(3, 0, 5)
    expect(inRange(5, 5)).toBe(false); // Effectively inRange(5, 0, 5), end is exclusive
    expect(inRange(-1, 5)).toBe(false);
  });

  it('should handle floating point numbers', () => {
    expect(inRange(3.5, 3.1, 3.9)).toBe(true);
    expect(inRange(3.0, 3.1, 3.9)).toBe(false);
  });

  it('should return false if start and end are the same', () => {
    expect(inRange(5, 5, 5)).toBe(false);
  });
});
