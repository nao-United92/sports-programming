const wrap = require('./array-wrap');

test('wrap wraps non-array values in array', () => {
  expect(wrap('a')).toEqual(['a']);
  expect(wrap([1])).toEqual([1]);
  expect(wrap(null)).toEqual([]);
});
