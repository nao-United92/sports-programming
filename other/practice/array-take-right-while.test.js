const takeRightWhile = require('./array-take-right-while');

test('takeRightWhile takes elements from the end while predicate is true', () => {
  const users = [
    { 'user': 'barney',  'active': true },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': false }
  ];
  expect(takeRightWhile(users, o => !o.active)).toEqual([
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': false }
  ]);
});
