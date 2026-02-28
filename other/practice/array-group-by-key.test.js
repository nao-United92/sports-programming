
const groupByKey = require('./array-group-by-key');

test('groups array of objects by key', () => {
  const users = [
    { name: 'Alice', role: 'admin' },
    { name: 'Bob', role: 'user' },
    { name: 'Charlie', role: 'admin' }
  ];
  const grouped = groupByKey(users, 'role');
  expect(grouped.admin).toHaveLength(2);
  expect(grouped.user).toHaveLength(1);
});
