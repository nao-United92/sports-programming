// other/practice/array-shuffle.test.js
const arrayShuffle = require('./array-shuffle');

describe('arrayShuffle', () => {
  const originalArray = [1, 2, 3, 4, 5];

  test('should return an array of the same length', () => {
    const shuffled = arrayShuffle(originalArray);
    expect(shuffled.length).toBe(originalArray.length);
  });

  test('should contain the same elements as the original array', () => {
    const shuffled = arrayShuffle(originalArray);
    expect(shuffled).toEqual(expect.arrayContaining(originalArray));
    expect(originalArray).toEqual(expect.arrayContaining(shuffled));
  });

  test('should not mutate the original array', () => {
    const originalCopy = [...originalArray];
    arrayShuffle(originalArray);
    expect(originalArray).toEqual(originalCopy);
  });

  test('should return an empty array for an empty input array', () => {
    expect(arrayShuffle([])).toEqual([]);
  });

  test('should handle arrays with a single element', () => {
    expect(arrayShuffle([1])).toEqual([1]);
  });

  test('should return an empty array if input is not an array', () => {
    expect(arrayShuffle(null)).toEqual([]);
    expect(arrayShuffle(undefined)).toEqual([]);
    expect(arrayShuffle('string')).toEqual([]);
    expect(arrayShuffle(123)).toEqual([]);
    expect(arrayShuffle({})).toEqual([]);
  });

  // This test checks for a high probability of change, not a guarantee.
  // It might fail rarely due to pure chance, but it's good for confidence.
  test('should generally change the order of elements for arrays with multiple elements', () => {
    let changed = false;
    for (let i = 0; i < 10; i++) { // Run multiple times to increase probability
      const shuffled = arrayShuffle(originalArray);
      if (!arrayEquals(originalArray, shuffled)) {
        changed = true;
        break;
      }
    }
    expect(changed).toBe(true);
  });

  // Helper function for deep array equality check (order matters)
  function arrayEquals(a, b) {
    return (
      Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index])
    );
  }
});
