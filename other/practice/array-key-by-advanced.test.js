const keyByAdvanced = require('./array-key-by-advanced');

test('keyByAdvanced keys by property', () => {
  const users = [
    { id: '1', name: 'Alice' },
    { id: '2', name: 'Bob' }
  ];
  expect(keyByAdvanced(users, 'id')).toEqual({
    '1': { id: '1', name: 'Alice' },
    '2': { id: '2', name: 'Bob' }
  });
});

test('keyByAdvanced keys by function', () => {
  const users = [
    { id: '1', name: 'Alice' },
    { id: '2', name: 'Bob' }
  ];
  expect(keyByAdvanced(users, (user) => `user_${user.id}`)).toEqual({
    'user_1': { id: '1', name: 'Alice' },
    'user_2': { id: '2', name: 'Bob' }
  });
});
