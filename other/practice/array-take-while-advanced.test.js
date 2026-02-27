const takeWhileAdvanced = require('./array-take-while-advanced');

test('takeWhileAdvanced takes elements while predicate is true', () => {
  const users = [
    { 'user': 'barney',  'active': true },
    { 'user': 'fred',    'active': true },
    { 'user': 'pebbles', 'active': false }
  ];
  expect(takeWhileAdvanced(users, o => o.active)).toEqual([
    { 'user': 'barney',  'active': true },
    { 'user': 'fred',    'active': true }
  ]);
});
