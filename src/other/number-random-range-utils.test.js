const { randomNumberInRange } = require('./number-random-range-utils.js');

describe('randomNumberInRange', () => {
  // Mock Math.random to ensure predictable test results
  const mockMathRandom = (returnValue) => {
    const mock = jest.spyOn(Math, 'random').mockReturnValue(returnValue);
    return mock;
  };

  afterEach(() => {
    jest.restoreAllMocks(); // Restore Math.random after each test
  });

  it('should generate a random number within the specified range (inclusive)', () => {
    const min = 1;
    const max = 10;
    const results = new Set();
    for (let i = 0; i < 1000; i++) {
      const num = randomNumberInRange(min, max);
      expect(num).toBeGreaterThanOrEqual(min);
      expect(num).toBeLessThanOrEqual(max);
      results.add(num);
    }
    // Ensure that at least some numbers within the range are generated (probabilistic check)
    expect(results.size).toBeGreaterThan(1);
  });

  it('should return min when Math.random is 0', () => {
    mockMathRandom(0);
    expect(randomNumberInRange(1, 10)).toBe(1);
  });

  it('should return max when Math.random is just under 1', () => {
    mockMathRandom(0.9999999999999999); // Closest to 1 without being 1
    expect(randomNumberInRange(1, 10)).toBe(10);
  });

  it('should handle negative ranges', () => {
    mockMathRandom(0.5);
    expect(randomNumberInRange(-5, 5)).toBe(0); // (5 - (-5) + 1) = 11. 0.5 * 11 = 5.5. floor(5.5) = 5. 5 + (-5) = 0
  });

  it('should handle min and max being the same', () => {
    expect(randomNumberInRange(5, 5)).toBe(5);
  });

  it('should swap min and max if min is greater than max', () => {
    mockMathRandom(0.5);
    // If min=10, max=1, it should swap to min=1, max=10. Then random between 1 and 10.
    // (10 - 1 + 1) = 10. 0.5 * 10 = 5. floor(5) = 5. 5 + 1 = 6.
    // Wait, the calculation is (max - min + 1) + min. If min=1, max=10, then (10-1+1)+1 = 11. 0.5*11 = 5.5. floor(5.5)=5. 5+1=6.
    // So, for min=1, max=10, 0.5 should give 6.
    expect(randomNumberInRange(10, 1)).toBe(6);
  });
});