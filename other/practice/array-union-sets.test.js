import { unionSets } from './array-union-sets.js';

test('unionSets combines unique elements', () => {
  expect(unionSets([1, 2], [2, 3])).toEqual([1, 2, 3]);
});
