import { arrayUniqueElements } from './array-unique-elements';

test('arrayUniqueElements returns unique elements', () => {
  expect(arrayUniqueElements([1, 2, 2, 3, 3, 3])).toEqual([1, 2, 3]);
  expect(arrayUniqueElements(['a', 'b', 'a'])).toEqual(['a', 'b']);
  expect(arrayUniqueElements([])).toEqual([]);
});
