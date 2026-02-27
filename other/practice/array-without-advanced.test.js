const withoutAdvanced = require('./array-without-advanced');

test('withoutAdvanced removes specified values', () => {
  expect(withoutAdvanced([2, 1, 2, 3], 1, 2)).toEqual([3]);
});
