const slidingWindow = require('./array-sliding-window');

describe('slidingWindow', () => {
  test('creates windows with step 1', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(slidingWindow(arr, 3)).toEqual([
      [1, 2, 3],
      [2, 3, 4],
      [3, 4, 5]
    ]);
  });

  test('creates windows with custom step', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    expect(slidingWindow(arr, 2, 2)).toEqual([
      [1, 2],
      [3, 4],
      [5, 6]
    ]);
  });

  test('returns empty if size is greater than array length', () => {
    expect(slidingWindow([1, 2], 3)).toEqual([]);
  });

  test('returns empty if size is 0 or negative', () => {
    expect(slidingWindow([1, 2], 0)).toEqual([]);
    expect(slidingWindow([1, 2], -1)).toEqual([]);
  });
});
