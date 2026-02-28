
const pluck = require('./array-pluck');

test('pluck extracts property values from array of objects', () => {
  const users = [
    { user: 'barney', age: 36 },
    { user: 'fred', age: 40 }
  ];
  expect(pluck(users, 'user')).toEqual(['barney', 'fred']);
});
