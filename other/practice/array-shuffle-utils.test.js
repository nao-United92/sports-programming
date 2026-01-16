const arrayShuffle = require('./array-shuffle-utils');

describe('arrayShuffle', () => {
  test('should return an array of the same length', () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffledArr = arrayShuffle([...arr]); // Create a copy to not modify original
    expect(shuffledArr.length).toBe(arr.length);
  });

  test('should contain the same elements as the original array', () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffledArr = arrayShuffle([...arr]); // Create a copy
    expect(shuffledArr.sort()).toEqual(arr.sort()); // Sort to compare elements
  });

  test('should shuffle the array (check for non-original order, with tolerance)', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let allSameOrder = true;
    // Try multiple times to reduce chance of false negative due to random order being same
    for (let i = 0; i < 10; i++) {
      const shuffledArr = arrayShuffle([...arr]);
      if (shuffledArr.join(',') !== arr.join(',')) {
        allSameOrder = false;
        break;
      }
    }
    expect(allSameOrder).toBe(false); // Expect that at least one shuffle changes the order
  });

  test('should handle empty arrays', () => {
    const arr = [];
    expect(arrayShuffle(arr)).toEqual([]);
  });

  test('should handle single-element arrays', () => {
    const arr = [1];
    expect(arrayShuffle(arr)).toEqual([1]);
  });

  test('should throw an error if the input is not an array', () => {
    expect(() => arrayShuffle(null)).toThrow('Expected an array for the first argument.');
    expect(() => arrayShuffle(undefined)).toThrow('Expected an array for the first argument.');
    expect(() => arrayShuffle('string')).toThrow('Expected an array for the first argument.');
    expect(() => arrayShuffle(123)).toThrow('Expected an array for the first argument.');
    expect(() => arrayShuffle({})).toThrow('Expected an array for the first argument.');
  });
});
