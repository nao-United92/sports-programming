const arrayRandomElement = require('./array-random-element');

describe('arrayRandomElement', () => {
  test('should return an element from the array', () => {
    const arr = [1, 2, 3, 4, 5];
    const randomElement = arrayRandomElement(arr);
    expect(arr).toContain(randomElement);
  });

  test('should return undefined for an empty array', () => {
    expect(arrayRandomElement([])).toBeUndefined();
  });

  test('should return undefined for non-array inputs', () => {
    expect(arrayRandomElement('not an array')).toBeUndefined();
    expect(arrayRandomElement(null)).toBeUndefined();
    expect(arrayRandomElement(undefined)).toBeUndefined();
    expect(arrayRandomElement({ a: 1 })).toBeUndefined();
  });

  test('should handle an array with a single element', () => {
    expect(arrayRandomElement([42])).toBe(42);
  });
});