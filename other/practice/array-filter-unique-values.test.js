import { filterUniqueValues } from './array-filter-unique-values.js';

test('filterUniqueValues removes duplicates', () => {
  expect(filterUniqueValues([1, 2, 2, 3])).toEqual([1, 2, 3]);
  expect(filterUniqueValues(['a', 'b', 'a'])).toEqual(['a', 'b']);
});
