const findIndex = require('./array-find-index-utils');

test('finds the index of an element in an array', () => {
  const arr = [1, 2, 3, 4, 5];
  const predicate = (x) => x === 3;
  const result = findIndex(arr, predicate);
  expect(result).toBe(2);
});

test('returns -1 if the element is not found', () => {
  const arr = [1, 2, 3, 4, 5];
  const predicate = (x) => x === 6;
  const result = findIndex(arr, predicate);
  expect(result).toBe(-1);
});

test('works with complex objects', () => {
  const arr = [{ a: 1 }, { a: 2 }, { a: 3 }];
  const predicate = (x) => x.a === 2;
  const result = findIndex(arr, predicate);
  expect(result).toBe(1);
});
