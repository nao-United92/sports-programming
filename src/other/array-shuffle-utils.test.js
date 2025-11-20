const { shuffle, shuffleArray } = require('./array-shuffle-utils');

describe('shuffle', () => {
  const originalArray = [1, 2, 3, 4, 5];

  test('should return an array of the same length', () => {
    const shuffled = shuffle(originalArray);
    expect(shuffled.length).toBe(originalArray.length);
  });

  test('should contain the same elements as the original array', () => {
    const shuffled = shuffle(originalArray);
    expect(shuffled.sort()).toEqual(originalArray.sort());
  });

  test('should not mutate the original array', () => {
    const originalCopy = [...originalArray];
    shuffle(originalArray);
    expect(originalArray).toEqual(originalCopy);
  });

  test('should return a new array instance', () => {
    const shuffled = shuffle(originalArray);
    expect(shuffled).not.toBe(originalArray);
  });

  test('should return an empty array for an empty input array', () => {
    expect(shuffle([])).toEqual([]);
  });

  // This test has a very small chance of failing if Math.random produces a sequence
  // that results in the array being shuffled back to its original order.
  // However, for practical purposes, it's a good check for randomness.
  test('should generally change the order of elements', () => {
    let isShuffled = false;
    for (let i = 0; i < 100; i++) { // Try multiple times to reduce false negatives
      const shuffled = shuffle(originalArray);
      if (!shuffled.every((val, index) => val === originalArray[index])) {
        isShuffled = true;
        break;
      }
    }
    expect(isShuffled).toBe(true);
  });
});

describe('shuffleArray', () => {
  const originalArray = [1, 2, 3, 4, 5];

  it('should return an array of the same length', () => {
    const shuffled = shuffleArray(originalArray);
    expect(shuffled.length).toBe(originalArray.length);
  });

  it('should contain the same elements as the original array', () => {
    const shuffled = shuffleArray(originalArray);
    expect(shuffled.sort()).toEqual(originalArray.sort());
  });

  it('should not mutate the original array', () => {
    const originalCopy = [...originalArray];
    shuffleArray(originalArray);
    expect(originalArray).toEqual(originalCopy);
  });

  it('should return a new array instance', () => {
    const shuffled = shuffleArray(originalArray);
    expect(shuffled).not.toBe(originalArray);
  });

  it('should return an empty array for an empty input array', () => {
    expect(shuffleArray([])).toEqual([]);
  });

  // This test has a very small chance of failing if Math.random produces a sequence
  // that results in the array being shuffled back to its original order.
  it('should generally change the order of elements', () => {
    let isShuffled = false;
    for (let i = 0; i < 100; i++) { // Try multiple times to reduce false negatives
      const shuffled = shuffleArray(originalArray);
      if (!shuffled.every((val, index) => val === originalArray[index])) {
        isShuffled = true;
        break;
      }
    }
    expect(isShuffled).toBe(true);
  });
});