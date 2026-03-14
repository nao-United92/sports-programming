const shuffleWithSeed = require('./array-shuffle-with-seed');

describe('shuffleWithSeed', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  test('returns same shuffle for same seed', () => {
    const seed = 12345;
    const shuffle1 = shuffleWithSeed(arr, seed);
    const shuffle2 = shuffleWithSeed(arr, seed);
    expect(shuffle1).toEqual(shuffle2);
  });

  test('returns different shuffle for different seed', () => {
    const shuffle1 = shuffleWithSeed(arr, 1);
    const shuffle2 = shuffleWithSeed(arr, 2);
    expect(shuffle1).not.toEqual(shuffle2);
  });

  test('returns all original elements', () => {
    const shuffled = shuffleWithSeed(arr, 42);
    expect(shuffled.sort((a, b) => a - b)).toEqual(arr);
  });

  test('handles empty array', () => {
    expect(shuffleWithSeed([], 1)).toEqual([]);
  });
});
