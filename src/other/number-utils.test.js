const { inRange, random } = require('./number-utils.js');

describe('number-utils', () => {
  describe('inRange', () => {
    it('should return true if the number is within the range', () => {
      expect(inRange(3, 2, 4)).toBe(true);
      expect(inRange(2, 2, 4)).toBe(true); // inclusive of start
    });

    it('should handle inverted ranges', () => {
      expect(inRange(3, 4, 2)).toBe(true);
    });

    it('should return false if the number is outside the range', () => {
      expect(inRange(4, 2, 4)).toBe(false); // exclusive of end
      expect(inRange(1, 2, 4)).toBe(false);
      expect(inRange(5, 2, 4)).toBe(false);
    });

    it('should work with a single argument (range from 0)', () => {
      expect(inRange(2, 4)).toBe(true);
      expect(inRange(0, 4)).toBe(true);
      expect(inRange(4, 4)).toBe(false);
      expect(inRange(-1, 4)).toBe(false);
    });

    it('should handle negative numbers', () => {
      expect(inRange(-3, -4, -2)).toBe(true);
      expect(inRange(-4, -4, -2)).toBe(true);
      expect(inRange(-2, -4, -2)).toBe(false);
    });
  });

  describe('random', () => {
    it('should return a random integer within the specified range (inclusive)', () => {
      const lower = 1;
      const upper = 10;
      for (let i = 0; i < 100; i++) {
        const result = random(lower, upper);
        expect(result).toBeGreaterThanOrEqual(lower);
        expect(result).toBeLessThanOrEqual(upper);
        expect(Number.isInteger(result)).toBe(true);
      }
    });

    it('should return a random float when floating is true', () => {
      const lower = 1.5;
      const upper = 2.5;
      for (let i = 0; i < 100; i++) {
        const result = random(lower, upper, true);
        expect(result).toBeGreaterThanOrEqual(lower);
        expect(result).toBeLessThanOrEqual(upper);
        expect(Number.isInteger(result)).toBe(false);
      }
    });

    it('should return a random float if one of the bounds is a float', () => {
      for (let i = 0; i < 100; i++) {
        const result = random(1, 5.5);
        expect(result).toBeGreaterThanOrEqual(1);
        expect(result).toBeLessThanOrEqual(5.5);
        expect(Number.isInteger(result)).toBe(false);
      }
    });

    it('should handle a single argument, returning an integer between 0 and the argument', () => {
      for (let i = 0; i < 100; i++) {
        const result = random(10);
        expect(result).toBeGreaterThanOrEqual(0);
        expect(result).toBeLessThanOrEqual(10);
        expect(Number.isInteger(result)).toBe(true);
      }
    });

    it('should handle inverted ranges', () => {
      for (let i = 0; i < 100; i++) {
        const result = random(10, 1);
        expect(result).toBeGreaterThanOrEqual(1);
        expect(result).toBeLessThanOrEqual(10);
        expect(Number.isInteger(result)).toBe(true);
      }
    });
  });
});