import { random } from './random-utils.js';

describe('random', () => {
  // Restore Math.random() after each test to ensure isolation
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('should generate a random integer within a specified range', () => {
    jest.spyOn(Math, 'random').mockReturnValue(0.1); // Ensure it's not exactly 0 or 1
    const num = random(1, 10);
    expect(num).toBeGreaterThanOrEqual(1);
    expect(num).toBeLessThanOrEqual(10);
    expect(Number.isInteger(num)).toBe(true);
  });

  test('should generate a random floating-point number within a specified range', () => {
    jest.spyOn(Math, 'random').mockReturnValue(0.51); // Ensure non-integer result
    const num = random(1.5, 10.5);
    expect(num).toBeGreaterThanOrEqual(1.5);
    expect(num).toBeLessThanOrEqual(10.5);
    expect(Number.isInteger(num)).toBe(false);
  });

  test('should generate a random floating-point number when floating is true', () => {
    jest.spyOn(Math, 'random').mockReturnValue(0.7); // Ensure non-integer result
    const num = random(1, 10, true);
    expect(num).toBeGreaterThanOrEqual(1);
    expect(num).toBeLessThanOrEqual(10);
    expect(Number.isInteger(num)).toBe(false);
  });

  test('should handle swapped lower and upper bounds', () => {
    jest.spyOn(Math, 'random').mockReturnValue(0.3); // Ensure integer result
    const num = random(10, 1);
    expect(num).toBeGreaterThanOrEqual(1);
    expect(num).toBeLessThanOrEqual(10);
    expect(Number.isInteger(num)).toBe(true);
  });

  test('should generate a random number between 0 and the given number if only one argument', () => {
    jest.spyOn(Math, 'random').mockReturnValue(0.8); // Ensure integer result
    const num = random(5);
    expect(num).toBeGreaterThanOrEqual(0);
    expect(num).toBeLessThanOrEqual(5);
    expect(Number.isInteger(num)).toBe(true);
  });

  test('should generate a random number between 0 and 1 if no arguments', () => {
    jest.spyOn(Math, 'random').mockReturnValue(0.12345); // Ensure non-integer result
    const num = random();
    expect(num).toBeGreaterThanOrEqual(0);
    expect(num).toBeLessThanOrEqual(1);
    expect(Number.isInteger(num)).toBe(false);
  });
});
