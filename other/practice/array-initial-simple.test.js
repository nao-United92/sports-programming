
const initial = require('./array-initial-simple');

test('initial should return all elements except the last', () => {
  expect(initial([1, 2, 3])).toEqual([1, 2]);
});

test('initial of single element array should be empty', () => {
  expect(initial([1])).toEqual([]);
});

test('initial of empty array should be empty', () => {
  expect(initial([])).toEqual([]);
});
