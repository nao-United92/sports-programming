
const swap = require('./array-swap');

test('should swap elements at indices', () => {
  const arr = [1, 2, 3];
  swap(arr, 0, 2);
  expect(arr).toEqual([3, 2, 1]);
});

test('should return array if invalid', () => {
    expect(swap(null)).toBeNull();
});
