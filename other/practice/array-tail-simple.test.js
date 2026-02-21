
const tail = require('./array-tail-simple');

test('tail should return all elements except the first', () => {
  expect(tail([1, 2, 3])).toEqual([2, 3]);
});

test('tail of single element array should be empty', () => {
  expect(tail([1])).toEqual([]);
});

test('tail of empty array should be empty', () => {
  expect(tail([])).toEqual([]);
});
