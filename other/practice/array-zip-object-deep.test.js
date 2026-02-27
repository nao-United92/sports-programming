const zipObjectDeep = require('./array-zip-object-deep');

test('zipObjectDeep creates deep object from paths and values', () => {
  expect(zipObjectDeep(['a.b.c'], [1])).toEqual({ 'a': { 'b': { 'c': 1 } } });
});
