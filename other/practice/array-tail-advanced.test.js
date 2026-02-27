const tailAdvanced = require('./array-tail-advanced');

test('tailAdvanced returns all but the first element', () => {
  expect(tailAdvanced([1, 2, 3])).toEqual([2, 3]);
  expect(tailAdvanced([1])).toEqual([]);
});
