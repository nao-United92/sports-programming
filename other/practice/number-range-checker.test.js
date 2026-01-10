const { inRange } = require('./number-range-checker.js');

describe('inRange', () => {
  // --- Basic functionality ---
  test('should return true if num is within the specified range (inclusive start, exclusive end)', () => {
    expect(inRange(5, 0, 10)).toBe(true);
    expect(inRange(0, 0, 10)).toBe(true); // Inclusive start
    expect(inRange(9, 0, 10)).toBe(true);
  });

  test('should return false if num is outside the specified range', () => {
    expect(inRange(-1, 0, 10)).toBe(false);
    expect(inRange(10, 0, 10)).toBe(false); // Exclusive end
    expect(inRange(11, 0, 10)).toBe(false);
  });

  // --- Handling swapped start/end ---
  test('should correctly handle ranges where start is greater than end', () => {
    expect(inRange(5, 10, 0)).toBe(true); // Swaps to (0, 10)
    expect(inRange(0, 10, 0)).toBe(true);
    expect(inRange(9, 10, 0)).toBe(true);
    expect(inRange(10, 10, 0)).toBe(false);
  });

  // --- Handling single argument (end is implicit) ---
  test('should correctly handle ranges with only two arguments (start and num, end is 0)', () => {
    // Equivalent to inRange(num, 0, start) if start > 0
    // or inRange(num, start, 0) if start < 0 (which then gets swapped to (start, 0))
    expect(inRange(5, 10)).toBe(true); // Effectively inRange(5, 0, 10)
    expect(inRange(0, 10)).toBe(true);
    expect(inRange(9, 10)).toBe(true);
    expect(inRange(10, 10)).toBe(false);

    expect(inRange(-5, -10)).toBe(true); // Effectively inRange(-5, -10, 0)
    expect(inRange(-10, -10)).toBe(true);
    expect(inRange(-1, -10)).toBe(true);
    expect(inRange(0, -10)).toBe(false);
  });

  // --- Edge cases ---
  test('should work with negative numbers', () => {
    expect(inRange(-5, -10, 0)).toBe(true);
    expect(inRange(-10, -5, -1)).toBe(false);
    expect(inRange(-1, -5, -1)).toBe(false);
  });

  test('should work with floating point numbers', () => {
    expect(inRange(5.5, 0.1, 10.9)).toBe(true);
    expect(inRange(0.1, 0.1, 0.2)).toBe(true);
    expect(inRange(0.2, 0.1, 0.2)).toBe(false);
  });

  // --- Type checks ---
  test('should throw an error if num or start is not a number', () => {
    expect(() => inRange('5', 0, 10)).toThrow('Expected numbers for num and start arguments.');
    expect(() => inRange(5, '0', 10)).toThrow('Expected numbers for num and start arguments.');
    expect(() => inRange(5, null, 10)).toThrow('Expected numbers for num and start arguments.');
  });

  test('should throw an error if end is provided but not a number', () => {
    expect(() => inRange(5, 0, '10')).toThrow('Expected a number for the end argument if provided.');
    expect(() => inRange(5, 0, null)).toThrow('Expected a number for the end argument if provided.');
  });
});
