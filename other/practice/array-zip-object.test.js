const zipObject = require('./array-zip-object');

test('zipObject creates object from keys and values', () => {
  expect(zipObject(['a', 'b'], [1, 2])).toEqual({ 'a': 1, 'b': 2 });
});
