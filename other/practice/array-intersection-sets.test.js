import { intersectionSets } from './array-intersection-sets.js';

test('intersectionSets returns common elements', () => {
  expect(intersectionSets([1, 2, 3], [2, 3, 4])).toEqual([2, 3]);
});
