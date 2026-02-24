import { tailElements } from './array-tail-elements.js';

test('tailElements returns all but first', () => {
  expect(tailElements([1, 2, 3])).toEqual([2, 3]);
});
