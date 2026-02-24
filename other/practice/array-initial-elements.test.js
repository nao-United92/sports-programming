import { initialElements } from './array-initial-elements.js';

test('initialElements returns all but last', () => {
  expect(initialElements([1, 2, 3])).toEqual([1, 2]);
});
