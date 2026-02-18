import { arrayShuffle } from './array-shuffle';

test('arrayShuffle shuffles an array', () => {
  const arr = [1, 2, 3, 4, 5];
  const shuffled = arrayShuffle(arr);
  expect(shuffled).toHaveLength(arr.length);
  expect(shuffled).toEqual(expect.arrayContaining(arr));
  // Probability of same order is low for large array, but for 5 elements (1/120), it might happen.
  // Checking distinctness is tricky in deterministic tests without mocking random.
  // We'll just check it returns a new array.
  expect(shuffled).not.toBe(arr);
});
