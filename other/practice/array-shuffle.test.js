import { shuffle } from './array-shuffle';

describe('shuffle', () => {
  test('shuffles the elements of an array', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const shuffled = shuffle(arr);
    expect(shuffled).toHaveLength(arr.length);
    expect(shuffled).toEqual(expect.arrayContaining(arr));
    // Note: Technically it could be equal by chance, but very unlikely for 10 elements.
    expect(shuffled).not.toEqual(arr);
  });

  test('returns a new array', () => {
    const arr = [1, 2, 3];
    const shuffled = shuffle(arr);
    expect(shuffled).not.toBe(arr);
  });
});
