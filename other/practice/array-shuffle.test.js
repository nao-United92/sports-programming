import { shuffle } from './array-shuffle.js';
describe('shuffle', () => {
  it('should return an array with same elements', () => {
    const arr = [1, 2, 3, 4, 5];
    const res = shuffle(arr);
    expect(res.sort()).toEqual(arr.sort());
  });
});
