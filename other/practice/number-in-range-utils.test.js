const { inRange } = require('./number-in-range-utils');

describe('inRange', () => {
  test('should return true if number is in range', () => {
    expect(inRange(3, 2, 4)).toBe(true);
    expect(inRange(4, 8)).toBe(true);
    expect(inRange(4.2, 8)).toBe(true);
    expect(inRange(2, 8)).toBe(true);
    expect(inRange(1.2, 2)).toBe(true);
  });

  test('should return false if number is not in range', () => {
    expect(inRange(4, 2, 4)).toBe(false);
    expect(inRange(8, 8)).toBe(false);
    expect(inRange(0, 2)).toBe(true);
  });

  test('should handle negative numbers', () => {
    expect(inRange(-3, -2, -4)).toBe(true);
    expect(inRange(-4, -2, -4)).toBe(true);
    expect(inRange(-2, -2, -4)).toBe(false);
  });

  test('should handle swapped start and end', () => {
    expect(inRange(3, 4, 2)).toBe(true);
    expect(inRange(4, 4, 2)).toBe(false);
  });
  
  test('should handle single argument correctly', () => {
    expect(inRange(2, 5)).toBe(true); // 0 to 5
    expect(inRange(5, 5)).toBe(false); // 0 to 5
    expect(inRange(-1, 5)).toBe(false); // 0 to 5
  });
});
