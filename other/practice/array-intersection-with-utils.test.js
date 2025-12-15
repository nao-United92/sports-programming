const intersectionWith = require('./array-intersection-with-utils');

test('finds the intersection of two arrays with a custom comparator', () => {
  const arr1 = [{ x: 1, y: 2 }, { x: 2, y: 1 }];
  const arr2 = [{ x: 1, y: 1 }, { x: 1, y: 2 }];
  const comparator = (a, b) => a.x === b.x && a.y === b.y;
  const result = intersectionWith(arr1, arr2, comparator);
  expect(result).toEqual([{ x: 1, y: 2 }]);
});

test('returns an empty array if there is no intersection', () => {
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  const comparator = (a, b) => a === b;
  const result = intersectionWith(arr1, arr2, comparator);
  expect(result).toEqual([]);
});
