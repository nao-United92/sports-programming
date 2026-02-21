
const reject = require('./array-reject-simple');

test('reject should filter out matching elements', () => {
  const users = [
    { user: 'barney', age: 36, active: false },
    { user: 'fred', age: 40, active: true }
  ];
  expect(reject(users, (o) => !o.active)).toEqual([{ user: 'fred', age: 40, active: true }]);
});
