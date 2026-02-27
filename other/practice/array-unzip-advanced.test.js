const unzipAdvanced = require('./array-unzip-advanced');

test('unzipAdvanced unzips an array of grouped elements', () => {
  expect(unzipAdvanced([['a', 1, true], ['b', 2, false]])).toEqual([['a', 'b'], [1, 2], [true, false]]);
});
