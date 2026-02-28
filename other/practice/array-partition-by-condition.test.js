const partition = require('./array-partition-by-condition');

test('partitions array based on predicate', () => {
  const users = [
    { user: 'barney', age: 36, active: false },
    { user: 'fred', age: 40, active: true },
    { user: 'pebbles', age: 1, active: false }
  ];
  const [active, inactive] = partition(users, o => o.active);
  expect(active).toHaveLength(1);
  expect(inactive).toHaveLength(2);
});
