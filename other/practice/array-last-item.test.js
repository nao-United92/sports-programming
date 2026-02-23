import { lastItem } from './array-last-item.js';

test('lastItem returns the last element', () => {
  expect(lastItem([1, 2, 3])).toBe(3);
  expect(lastItem(['a', 'b'])).toBe('b');
});
