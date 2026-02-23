import { partitionGroups } from './array-partition-groups.js';

test('partitionGroups splits array based on predicate', () => {
  expect(partitionGroups([1, 2, 3, 4], x => x % 2 === 0)).toEqual([[2, 4], [1, 3]]);
});
