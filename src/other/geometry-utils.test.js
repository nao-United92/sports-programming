import { distance, degToRad } from './geometry-utils.js';

describe('Geometry Utilities', () => {
  describe('distance', () => {
    it('should calculate the distance between two points', () => {
      expect(distance(0, 0, 3, 4)).toBe(5);
    });

    it('should return 0 for the same point', () => {
      expect(distance(1, 1, 1, 1)).toBe(0);
    });

    it('should handle negative coordinates', () => {
      expect(distance(-1, -1, -4, -5)).toBe(5);
    });
  });

  describe('degToRad', () => {
    it('should convert degrees to radians', () => {
      expect(degToRad(180)).toBe(Math.PI);
    });

    it('should handle 0 degrees', () => {
      expect(degToRad(0)).toBe(0);
    });

    it('should handle negative degrees', () => {
      expect(degToRad(-90)).toBe(-Math.PI / 2);
    });
  });
});
