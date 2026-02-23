import { unzipArrays } from './array-unzip-arrays.js';

test('unzipArrays splits array of arrays', () => {
  expect(unzipArrays([[1, 'a'], [2, 'b']])).toEqual([[1, 2], ['a', 'b']]);
});
