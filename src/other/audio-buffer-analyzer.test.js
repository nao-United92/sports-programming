const { calculateRMS, isSilent } = require('./audio-buffer-analyzer');

describe('Audio Buffer Analyzer', () => {
  describe('calculateRMS', () => {
    test('should return 0 for an empty or null buffer', () => {
      expect(calculateRMS([])).toBe(0);
      expect(calculateRMS(null)).toBe(0);
      expect(calculateRMS(undefined)).toBe(0);
    });

    test('should return 0 for a buffer of all zeros', () => {
      expect(calculateRMS([0, 0, 0, 0])).toBe(0);
    });

    test('should return 1 for a buffer of all ones (DC signal)', () => {
      expect(calculateRMS([1, 1, 1, 1])).toBe(1);
    });

    test('should correctly calculate RMS for a simple sine-like wave', () => {
      const buffer = [0, 0.707, 1, 0.707, 0, -0.707, -1, -0.707];
      // For a full sine wave, RMS is Amplitude / sqrt(2) approx 0.707
      // This is a discrete approximation, so we check for a close value.
      expect(calculateRMS(buffer)).toBeCloseTo(0.707, 3);
    });

    test('should correctly calculate RMS for a square-like wave', () => {
      const buffer = [0.5, 0.5, -0.5, -0.5];
      // sqrt( (0.25 + 0.25 + 0.25 + 0.25) / 4 ) = sqrt(1 / 4) = 0.5
      expect(calculateRMS(buffer)).toBe(0.5);
    });
  });

  describe('isSilent', () => {
    test('should return true for an empty buffer', () => {
      expect(isSilent([])).toBe(true);
    });

    test('should return true for a buffer with RMS below the default threshold', () => {
      const buffer = [0.0001, -0.0001, 0.0001];
      expect(isSilent(buffer)).toBe(true);
    });

    test('should return false for a buffer with RMS above the default threshold', () => {
      const buffer = [0.1, -0.1, 0.1];
      expect(isSilent(buffer)).toBe(false);
    });

    test('should respect a custom threshold', () => {
      const buffer = [0.05, -0.05, 0.05]; // RMS will be 0.05
      expect(isSilent(buffer, 0.1)).toBe(true);
      expect(isSilent(buffer, 0.01)).toBe(false);
    });

    test('should return false for a buffer with RMS equal to the threshold', () => {
      const buffer = [0.1, 0.1, 0.1, 0.1]; // RMS is 0.1
      expect(isSilent(buffer, 0.1)).toBe(false);
    });
  });
});
