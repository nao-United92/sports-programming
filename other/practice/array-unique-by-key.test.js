
const uniqueByKey = require('./array-unique-by-key');

test('removes duplicates based on key', () => {
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 1, name: 'Alice' }
  ];
  expect(uniqueByKey(users, 'id')).toHaveLength(2);
});
