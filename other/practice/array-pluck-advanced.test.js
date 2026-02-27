const pluckAdvanced = require('./array-pluck-advanced');

test('pluckAdvanced retrieves nested properties', () => {
  const users = [
    { 'user': { 'name': 'barney', 'age': 36 } },
    { 'user': { 'name': 'fred', 'age': 40 } }
  ];
  expect(pluckAdvanced(users, 'user.name')).toEqual(['barney', 'fred']);
});

test('pluckAdvanced handles missing properties', () => {
  const users = [
    { 'user': { 'name': 'barney' } },
    { 'user': {} }
  ];
  expect(pluckAdvanced(users, 'user.age')).toEqual([undefined, undefined]);
});
