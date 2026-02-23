import { sortedIndexOf } from './array-sorted-index-of.js';

test('sortedIndexOf finds insertion index', () => {
  expect(sortedIndexOf([10, 20, 30], 25)).toBe(2);
  expect(sortedIndexOf([10, 20, 30], 5)).toBe(0);
});
