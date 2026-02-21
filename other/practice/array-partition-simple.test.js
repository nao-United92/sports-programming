
const partition = require('./array-partition-simple');

test('partition should split array based on predicate', () => {
  const users = [
    { user: 'barney', age: 36, active: false },
    { user: 'fred', age: 40, active: true },
    { user: 'pebbles', age: 1, active: false }
  ];
  const result = partition(users, (o) => o.active);
  expect(result[0]).toEqual([{ user: 'fred', age: 40, active: true }]);
  expect(result[1]).toEqual([
    { user: 'barney', age: 36, active: false },
    { user: 'pebbles', age: 1, active: false }
  ]);
});
