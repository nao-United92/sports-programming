import { countOccurrencesMap } from './array-count-occurrences-map.js';

test('countOccurrencesMap counts elements', () => {
  expect(countOccurrencesMap(['a', 'b', 'a'])).toEqual({ a: 2, b: 1 });
});
