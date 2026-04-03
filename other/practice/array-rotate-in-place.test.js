const rotateInPlace = require('./array-rotate-in-place');

describe('rotateInPlace', () => {
  test('rotates array to the right by k positions', () => {
    const arr = [1, 2, 3, 4, 5];
    rotateInPlace(arr, 2);
    expect(arr).toEqual([4, 5, 1, 2, 3]);
  });

  test('rotates array correctly when k is larger than array length', () => {
    const arr = [1, 2, 3];
    rotateInPlace(arr, 4); // same as k=1
    expect(arr).toEqual([3, 1, 2]);
  });

  test('handles negative k (rotate left)', () => {
    const arr = [1, 2, 3, 4, 5];
    rotateInPlace(arr, -1); // same as k=4
    expect(arr).toEqual([2, 3, 4, 5, 1]);
  });

  test('does nothing for k=0 or empty array', () => {
    const arr = [1, 2, 3];
    rotateInPlace(arr, 0);
    expect(arr).toEqual([1, 2, 3]);

    const empty = [];
    rotateInPlace(empty, 5);
    expect(empty).toEqual([]);
  });
});
