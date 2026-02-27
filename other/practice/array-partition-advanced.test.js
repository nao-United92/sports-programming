const partitionAdvanced = require('./array-partition-advanced');

test('partitionAdvanced splits array by predicate', () => {
  const users = [
    { 'user': 'barney',  'age': 36, 'active': false },
    { 'user': 'fred',    'age': 40, 'active': true },
    { 'user': 'pebbles', 'age': 1,  'active': false }
  ];
  const [active, inactive] = partitionAdvanced(users, o => o.active);
  expect(active).toEqual([{ 'user': 'fred', 'age': 40, 'active': true }]);
  expect(inactive).toHaveLength(2);
});
