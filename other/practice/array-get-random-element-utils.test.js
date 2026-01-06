const getRandomElement = require('./array-get-random-element-utils');

describe('getRandomElement', () => {
  test('should return undefined for an empty array', () => {
    expect(getRandomElement([])).toBeUndefined();
  });

  test('should return undefined for non-array input', () => {
    expect(getRandomElement(null)).toBeUndefined();
    expect(getRandomElement(undefined)).toBeUndefined();
    expect(getRandomElement(123)).toBeUndefined();
    expect(getRandomElement('string')).toBeUndefined();
    expect(getRandomElement({})).toBeUndefined();
  });

  test('should return an element from the array', () => {
    const arr = [1, 2, 3, 4, 5];
    const randomElement = getRandomElement(arr);
    expect(arr).toContain(randomElement);
  });

  test('should return one of the elements for an array with one element', () => {
    const arr = ['single'];
    expect(getRandomElement(arr)).toBe('single');
  });

  test('should return different elements over multiple calls (probabilistic)', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const results = new Set();
    // Call multiple times to increase probability of getting different elements
    for (let i = 0; i < 50; i++) {
      results.add(getRandomElement(arr));
    }
    // Expect to have more than one unique element if the array has many
    if (arr.length > 1) {
      expect(results.size).toBeGreaterThan(1);
    }
    // All results must be in the original array
    results.forEach(element => {
      expect(arr).toContain(element);
    });
  });
});
