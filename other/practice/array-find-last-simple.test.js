
const findLast = require('./array-find-last-simple');

test('findLast should return last matching element', () => {
  const users = [
    { 'user': 'barney',  'age': 36, 'active': true },
    { 'user': 'fred',    'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1,  'active': true }
  ];
  expect(findLast(users, (o) => o.active)).toEqual({ 'user': 'pebbles', 'age': 1,  'active': true });
});
