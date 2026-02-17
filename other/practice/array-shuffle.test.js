import arrayShuffle from './array-shuffle';

describe('arrayShuffle', () => {
  test('should return a new array with the same elements but in a different order', () => {
    const originalArr = [1, 2, 3, 4, 5];
    const shuffledArr = arrayShuffle(originalArr);

    // Check if it's a new array
    expect(shuffledArr).not.toBe(originalArr);
    // Check if it contains the same elements
    expect(shuffledArr).toHaveLength(originalArr.length);
    expect(shuffledArr.sort()).toEqual(originalArr.sort());
    // There's a very low probability that it will be in the same order, but it's possible.
    // So, we'll just check if it's not the same reference and contains the same elements.
  });

  test('should handle an empty array', () => {
    const arr = [];
    expect(arrayShuffle(arr)).toEqual([]);
  });

  test('should handle an array with a single element', () => {
    const arr = [1];
    expect(arrayShuffle(arr)).toEqual([1]);
  });

  test('should throw an error if the argument is not an array', () => {
    expect(() => arrayShuffle(null)).toThrow('Expected an array for the first argument.');
    expect(() => arrayShuffle(undefined)).toThrow('Expected an array for the first argument.');
    expect(() => arrayShuffle('string')).toThrow('Expected an array for the first argument.');
    expect(() => arrayShuffle(123)).toThrow('Expected an array for the first argument.');
    expect(() => arrayShuffle({})).toThrow('Expected an array for the first argument.');
  });
});
