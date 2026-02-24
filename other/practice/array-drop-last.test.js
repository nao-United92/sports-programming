import { dropLast } from './array-drop-last.js';

test('dropLast removes last n elements', () => {
  expect(dropLast([1, 2, 3], 1)).toEqual([1, 2]);
  expect(dropLast([1, 2, 3], 2)).toEqual([1]);
});
