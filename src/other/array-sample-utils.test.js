const { sample } = require('./array-sample-utils');

describe('sample', () => {
  const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // Mock Math.random to make tests deterministic
  const mockMath = Object.create(global.Math);
  mockMath.random = jest.fn();
  global.Math = mockMath;

  beforeEach(() => {
    // Reset mock before each test
    mockMath.random.mockClear();
  });

  test('should return a single random element when n is not provided', () => {
    mockMath.random.mockReturnValueOnce(0.5); // Should pick element at index 5 (value 6)
    const result = sample(testArray);
    expect(testArray).toContain(result);
    expect(result).toBe(6); // 0.5 * 10 = 5, so index 5
  });

  test('should return an array of n random elements when n is provided', () => {
    // Simulate random picks for splicing
    // For testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    // 1st pick: Math.random() = 0.1 -> index 1 (value 2)
    // arrCopy becomes [1, 3, 4, 5, 6, 7, 8, 9, 10]
    // 2nd pick: Math.random() = 0.9 -> index 8 (value 10)
    // arrCopy becomes [1, 3, 4, 5, 6, 7, 8, 9]
    // 3rd pick: Math.random() = 0.3 -> index 2 (value 4)
    // arrCopy becomes [1, 3, 5, 6, 7, 8, 9]
    mockMath.random.mockReturnValueOnce(0.1) // index 1 (value 2)
                  .mockReturnValueOnce(0.9) // index 8 (value 10)
                  .mockReturnValueOnce(0.3); // index 2 (value 4)

    const result = sample(testArray, 3);
    expect(result.length).toBe(3);
    expect(result).toEqual([2, 10, 4]); // Expected order based on mock values
    result.forEach(item => expect(testArray).toContain(item));
  });

  test('should return all elements if n is greater than array length (shuffled)', () => {
    // Simulate random picks for splicing
    // This test is still tricky to make deterministic for exact order,
    // but we can check for content and length.
    // For simplicity, we'll mock enough values to ensure all elements are picked.
    mockMath.random.mockReturnValueOnce(0.1) // 1
                  .mockReturnValueOnce(0.9) // 9
                  .mockReturnValueOnce(0.3) // 3
                  .mockReturnValueOnce(0.7) // 7
                  .mockReturnValueOnce(0.5) // 5
                  .mockReturnValueOnce(0.2) // 2
                  .mockReturnValueOnce(0.8) // 8
                  .mockReturnValueOnce(0.4) // 4
                  .mockReturnValueOnce(0.6) // 6
                  .mockReturnValueOnce(0.0); // 0

    const result = sample(testArray, 20);
    expect(result.length).toBe(testArray.length);
    // Check if all elements are present, order might vary
    expect(result.sort((a, b) => a - b)).toEqual(testArray.sort((a, b) => a - b));
    // It should not be the exact same order as original (unless it's a very specific mock)
    // This check is less strict now.
  });

  test('should return an empty array if n is 0', () => {
    const result = sample(testArray, 0);
    expect(result).toEqual([]);
  });

  test('should return an empty array if n is negative', () => {
    const result = sample(testArray, -5);
    expect(result).toEqual([]);
  });

  test('should return undefined for an empty array when n is not provided', () => {
    expect(sample([])).toBeUndefined();
  });

  test('should return an empty array for an empty array when n is provided', () => {
    expect(sample([], 5)).toEqual([]);
  });
});