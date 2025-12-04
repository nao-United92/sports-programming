import { random, shuffle } from './random-utils.js';

describe('random', () => {
  it('should generate a random integer within a specified range', () => {
    const num = random(1, 10);
    expect(num).toBeGreaterThanOrEqual(1);
    expect(num).toBeLessThanOrEqual(10);
    expect(Number.isInteger(num)).toBe(true);
  });

  it('should generate a random float within a specified range', () => {
    const num = random(1, 10, true);
    expect(num).toBeGreaterThanOrEqual(1);
    expect(num).toBeLessThanOrEqual(10);
    expect(Number.isInteger(num)).toBe(false);
  });

  it('should generate a random integer between 0 and upper when lower is omitted', () => {
    const num = random(5); // upper = 5, lower = 0
    expect(num).toBeGreaterThanOrEqual(0);
    expect(num).toBeLessThanOrEqual(5);
    expect(Number.isInteger(num)).toBe(true);
  });

  it('should generate a random float between 0 and upper when lower is omitted', () => {
    const num = random(5, true); // upper = 5, lower = 0
    expect(num).toBeGreaterThanOrEqual(0);
    expect(num).toBeLessThanOrEqual(5);
    expect(Number.isInteger(num)).toBe(false);
  });

  it('should handle negative ranges', () => {
    const num = random(-10, -5);
    expect(num).toBeGreaterThanOrEqual(-10);
    expect(num).toBeLessThanOrEqual(-5);
    expect(Number.isInteger(num)).toBe(true);
  });
});

describe('shuffle', () => {
  it('should return a new array', () => {
    const originalArray = [1, 2, 3, 4, 5];
    const shuffledArray = shuffle(originalArray);
    expect(shuffledArray).not.toBe(originalArray);
  });

  it('should contain the same elements as the original array', () => {
    const originalArray = [1, 2, 3, 4, 5];
    const shuffledArray = shuffle(originalArray);
    expect(shuffledArray.sort()).toEqual(originalArray.sort());
  });

  it('should shuffle the array (order should be different most of the time)', () => {
    const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let isShuffled = false;
    // Run multiple times to increase confidence, but it's still probabilistic
    for (let i = 0; i < 10; i++) {
      const shuffledArray = shuffle(originalArray);
      if (JSON.stringify(shuffledArray) !== JSON.stringify(originalArray)) {
        isShuffled = true;
        break;
      }
    }
    expect(isShuffled).toBe(true);
  });

  it('should handle an empty array', () => {
    expect(shuffle([])).toEqual([]);
  });

  it('should handle an array with one element', () => {
    expect(shuffle([1])).toEqual([1]);
  });
});
