
const findLastIndex = require('./array-find-last-index-custom');

test('finds last index of element matching predicate', () => {
  const users = [
    { user: 'barney', active: true },
    { user: 'fred', active: false },
    { user: 'pebbles', active: false }
  ];
  expect(findLastIndex(users, o => o.user === 'pebbles')).toBe(2);
  expect(findLastIndex(users, o => o.active === false)).toBe(2);
  expect(findLastIndex(users, o => o.active === true)).toBe(0);
});
