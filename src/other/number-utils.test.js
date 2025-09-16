const { inRange, random } = require('./number-utils.js');

describe('inRange', () => {
  it('should return true if the number is in the range', () => {
    expect(inRange(3, 2, 4)).toBe(true);
    expect(inRange(4, 8)).toBe(true);
    expect(inRange(4, 2, 8)).toBe(true);
    expect(inRange(2, 2, 8)).toBe(true);
  });

  it('should return false if the number is not in the range', () => {
    expect(inRange(1, 2, 4)).toBe(false);
    expect(inRange(8, 4)).toBe(false);
    expect(inRange(8, 2, 8)).toBe(false);
  });
});

describe('random', () => {
  it('should return a random integer between two numbers', () => {
    const result = random(1, 10);
    expect(Number.isInteger(result)).toBe(true);
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(10);
  });

  it('should return a random float between two numbers', () => {
    const result = random(1.5, 9.5, true);
    expect(result).toBeGreaterThanOrEqual(1.5);
    expect(result).toBeLessThanOrEqual(9.5);
  });

  it('should work with a single argument', () => {
    const result = random(5);
    expect(Number.isInteger(result)).toBe(true);
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThanOrEqual(5);
  });
});