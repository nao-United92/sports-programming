import { zipArrays } from './array-zip-arrays.js';

test('zipArrays combines arrays', () => {
  expect(zipArrays([1, 2], ['a', 'b'])).toEqual([[1, 'a'], [2, 'b']]);
  expect(zipArrays([1], ['a', 'b'])).toEqual([[1, 'a'], [undefined, 'b']]);
});
