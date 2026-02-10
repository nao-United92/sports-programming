import arrayShuffle from './array-shuffle';

describe('arrayShuffle', () => {
  test('should shuffle an array without losing elements', () => {
    const originalArray = [1, 2, 3, 4, 5];
    const shuffledArray = arrayShuffle([...originalArray]); // Create a copy to not modify original

    expect(shuffledArray.sort()).toEqual(originalArray.sort());
    expect(shuffledArray.length).toBe(originalArray.length);
  });

  test('should return an empty array if an empty array is provided', () => {
    const emptyArray = [];
    expect(arrayShuffle(emptyArray)).toEqual([]);
  });

  test('should return the same array if it has only one element', () => {
    const singleElementArray = [1];
    expect(arrayShuffle(singleElementArray)).toEqual([1]);
  });

  test('should return a different order for a non-trivial array (probabilistic test)', () => {
    // This test is probabilistic and might fail rarely due to random chance
    // A truly random shuffle could theoretically result in the same order.
    // We'll run it a few times to increase confidence.
    const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let differentOrderCount = 0;
    const attempts = 10;

    for (let i = 0; i < attempts; i++) {
      const shuffled = arrayShuffle([...original]);
      if (shuffled.join(',') !== original.join(',')) {
        differentOrderCount++;
      }
    }
    // Expect at least one shuffle to result in a different order over 10 attempts
    expect(differentOrderCount).toBeGreaterThan(0);
  });
});