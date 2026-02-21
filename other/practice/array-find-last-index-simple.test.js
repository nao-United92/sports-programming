
const findLastIndex = require('./array-find-last-index-simple');

test('findLastIndex should return index of last matching element', () => {
  const users = [
    { 'user': 'barney',  'active': true },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': true }
  ];
  expect(findLastIndex(users, (o) => o.active)).toBe(2);
});
