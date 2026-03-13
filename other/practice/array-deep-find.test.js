const deepFind = require('./array-deep-find');

describe('deepFind', () => {
  const arr = [1, [2, [3, 4], 5], 6];

  test('finds element in nested array', () => {
    expect(deepFind(arr, (x) => x === 3)).toBe(3);
    expect(deepFind(arr, (x) => x === 6)).toBe(6);
  });

  test('returns undefined if not found', () => {
    expect(deepFind(arr, (x) => x === 10)).toBeUndefined();
  });

  test('works with objects in nested arrays', () => {
    const nested = [1, [{ id: 10 }, 2], 3];
    expect(deepFind(nested, (x) => x && x.id === 10)).toEqual({ id: 10 });
  });

  test('handles empty array', () => {
    expect(deepFind([], () => true)).toBeUndefined();
  });
});
