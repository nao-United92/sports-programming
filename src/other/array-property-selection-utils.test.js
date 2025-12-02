const { pick, omit } = require('./array-property-selection-utils');

describe('pick', () => {
  const users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred',   'age': 40, 'active': false }
  ];

  test('should create an array of objects with picked properties', () => {
    expect(pick(users, ['user', 'active'])).toEqual([
      { 'user': 'barney', 'active': true },
      { 'user': 'fred', 'active': false }
    ]);
  });

  test('should handle non-existent keys gracefully', () => {
    expect(pick(users, ['user', 'email'])).toEqual([
      { 'user': 'barney' },
      { 'user': 'fred' }
    ]);
  });

  test('should return empty objects for empty keys array', () => {
    expect(pick(users, [])).toEqual([{}, {}]);
  });

  test('should return an empty array for invalid input', () => {
    expect(pick(null, ['user'])).toEqual([]);
  });
});

describe('omit', () => {
  const users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred',   'age': 40, 'active': false }
  ];

  test('should create an array of objects with omitted properties', () => {
    expect(omit(users, ['age', 'active'])).toEqual([
      { 'user': 'barney' },
      { 'user': 'fred' }
    ]);
  });

  test('should handle non-existent keys gracefully', () => {
    expect(omit(users, ['email'])).toEqual(users);
  });

  test('should return full objects for empty keys array', () => {
    expect(omit(users, [])).toEqual(users);
  });

  test('should return an empty array for invalid input', () => {
    expect(omit(null, ['age'])).toEqual([]);
  });
});
