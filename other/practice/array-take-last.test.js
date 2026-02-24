import { takeLast } from './array-take-last.js';

test('takeLast returns last n elements', () => {
  expect(takeLast([1, 2, 3], 2)).toEqual([2, 3]);
  expect(takeLast([1, 2, 3], 5)).toEqual([1, 2, 3]);
});
