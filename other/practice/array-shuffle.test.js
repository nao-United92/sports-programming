import { shuffle } from './array-shuffle';

describe('shuffle', () => {
  test('should return an array of the same length', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(shuffle(arr)).toHaveLength(arr.length);
  });

  test('should contain the same elements as the original array', () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffledArr = shuffle(arr);
    expect(shuffledArr.sort()).toEqual(arr.sort());
  });

  test('should return a different order for a sufficiently large array', () => {
    const arr = Array.from({ length: 100 }, (_, i) => i + 1);
    const shuffledArr = shuffle(arr);
    // There's a tiny chance it could be the same, but highly improbable for 100 elements.
    // We'll run it a few times to increase confidence.
    let isDifferent = false;
    for (let i = 0; i < 5; i++) {
      if (JSON.stringify(shuffle(arr)) !== JSON.stringify(arr)) {
        isDifferent = true;
        break;
      }
    }
    expect(isDifferent).toBe(true);
  });

  test('should return an empty array if given an empty array', () => {
    const arr = [];
    expect(shuffle(arr)).toEqual([]);
  });

  test('should handle single element array', () => {
    const arr = [1];
    expect(shuffle(arr)).toEqual([1]);
  });

  test('should not modify the original array', () => {
    const arr = [1, 2, 3];
    const originalArr = [...arr];
    shuffle(arr);
    expect(arr).toEqual(originalArr);
  });
});
