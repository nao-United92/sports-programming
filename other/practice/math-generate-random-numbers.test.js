const generateRandomNumbers = require('./math-generate-random-numbers');

describe('generateRandomNumbers', () => {
  test('should generate a specified number of random numbers', () => {
    const numbers = generateRandomNumbers(5);
    expect(numbers.length).toBe(5);
    numbers.forEach(num => {
      expect(num).toBeGreaterThanOrEqual(0);
      expect(num).toBeLessThanOrEqual(1);
    });
  });

  test('should generate numbers within a specified range', () => {
    const numbers = generateRandomNumbers(3, 10, 20);
    expect(numbers.length).toBe(3);
    numbers.forEach(num => {
      expect(num).toBeGreaterThanOrEqual(10);
      expect(num).toBeLessThanOrEqual(20);
    });
  });

  test('should return an empty array if count is 0', () => {
    expect(generateRandomNumbers(0)).toEqual([]);
  });

  test('should return an empty array if count is negative', () => {
    expect(generateRandomNumbers(-5)).toEqual([]);
  });

  test('should handle min and max being the same', () => {
    const numbers = generateRandomNumbers(3, 5, 5);
    expect(numbers.length).toBe(3);
    numbers.forEach(num => {
      expect(num).toBe(5);
    });
  });
});
