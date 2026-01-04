import { getRandomElement } from './array-random-element-utils';

describe('getRandomElement', () => {
  const originalArray = [1, 2, 3, 4, 5];

  test('should return an element that is present in the original array', () => {
    const randomElement = getRandomElement(originalArray);
    expect(originalArray).toContain(randomElement);
  });

  test('should return undefined for an empty array', () => {
    expect(getRandomElement([])).toBeUndefined();
  });

  test('should handle a single-element array correctly', () => {
    expect(getRandomElement([42])).toBe(42);
  });

  test('should not modify the original array', () => {
    const testArray = [...originalArray];
    getRandomElement(testArray);
    expect(testArray).toEqual(originalArray);
  });

  test('should throw an error if input is not an array', () => {
    expect(() => getRandomElement(null)).toThrow('Expected an array');
    expect(() => getRandomElement(undefined)).toThrow('Expected an array');
    expect(() => getRandomElement("string")).toThrow('Expected an array');
    expect(() => getRandomElement(123)).toThrow('Expected an array');
    expect(() => getRandomElement({})).toThrow('Expected an array');
  });

  test('should (probabilistically) return different elements over many calls', () => {
    const results = new Set();
    for (let i = 0; i < 100; i++) {
      results.add(getRandomElement(originalArray));
    }
    // For a reasonably sized array and enough iterations, we expect to see more than one unique result
    // This is a probabilistic test, so it's not guaranteed, but highly likely for 100 iterations on 5 elements.
    expect(results.size).toBeGreaterThan(1);
  });
});
