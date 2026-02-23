import { firstItem } from './array-first-item.js';

test('firstItem returns the first element', () => {
  expect(firstItem([1, 2, 3])).toBe(1);
  expect(firstItem(['a', 'b'])).toBe('a');
});
