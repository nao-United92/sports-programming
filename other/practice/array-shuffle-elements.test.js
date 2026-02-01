const arrayShuffleElements = require('./array-shuffle-elements');

describe('arrayShuffleElements', () => {
  test('should return the same array instance (shuffle in place)', () => {
    const arr = [1, 2, 3];
    const shuffledArr = arrayShuffleElements(arr);
    expect(shuffledArr).toBe(arr);
  });

  test('should return an empty array for an empty input', () => {
    const arr = [];
    expect(arrayShuffleElements(arr)).toEqual([]);
  });

  test('should return the same array for a single-element input', () => {
    const arr = [1];
    expect(arrayShuffleElements(arr)).toEqual([1]);
  });

  test('should have the same length as the original array', () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffledArr = arrayShuffleElements(arr);
    expect(shuffledArr.length).toBe(arr.length);
  });

  test('should contain the same elements as the original array', () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffledArr = arrayShuffleElements(arr);
    expect(shuffledArr).toEqual(expect.arrayContaining(arr));
    expect(arr).toEqual(expect.arrayContaining(shuffledArr));
  });

  test('should change the order of elements for arrays with multiple distinct elements (probabilistic check)', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let isShuffled = false;
    // Try multiple times to reduce the chance of a false negative due to random chance
    for (let i = 0; i < 50; i++) {
      const originalCopy = [...arr]; // Create a new copy each time for shuffling
      const shuffledArr = arrayShuffleElements(originalCopy);
      if (shuffledArr.join(',') !== arr.join(',')) {
        isShuffled = true;
        break;
      }
    }
    expect(isShuffled).toBe(true);
  });

  test('should throw TypeError if input is not an array', () => {
    expect(() => arrayShuffleElements(null)).toThrow(TypeError);
    expect(() => arrayShuffleElements(undefined)).toThrow(TypeError);
    expect(() => arrayShuffleElements('string')).toThrow(TypeError);
    expect(() => arrayShuffleElements(123)).toThrow(TypeError);
    expect(() => arrayShuffleElements({})).toThrow(TypeError);
  });
});
