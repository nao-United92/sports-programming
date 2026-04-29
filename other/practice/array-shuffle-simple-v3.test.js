import { shuffleSimple } from './array-shuffle-simple-v3';

describe('shuffleSimple', () => {
  test('should shuffle the array', () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffled = shuffleSimple(arr);
    expect(shuffled).toHaveLength(arr.length);
    expect(shuffled).toEqual(expect.arrayContaining(arr));
  });
});
