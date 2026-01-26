const { groupBy } = require('./array-grouper');

describe('Array Grouper', () => {
  const users = [
    { name: 'Alice', age: 30, city: 'New York' },
    { name: 'Bob', age: 25, city: 'London' },
    { name: 'Charlie', age: 30, city: 'London' },
    { name: 'David', age: 35, city: 'New York' },
  ];

  test('should group an array of objects by a property key', () => {
    const groupedByCity = groupBy(users, 'city');
    expect(groupedByCity).toEqual({
      'New York': [
        { name: 'Alice', age: 30, city: 'New York' },
        { name: 'David', age: 35, city: 'New York' },
      ],
      'London': [
        { name: 'Bob', age: 25, city: 'London' },
        { name: 'Charlie', age: 30, city: 'London' },
      ],
    });
  });

  test('should group an array of objects by an iterator function', () => {
    const groupedByAgeCategory = groupBy(users, (user) => (user.age < 30 ? 'young' : 'old'));
    expect(groupedByAgeCategory).toEqual({
      'old': [
        { name: 'Alice', age: 30, city: 'New York' },
        { name: 'Charlie', age: 30, city: 'London' },
        { name: 'David', age: 35, city: 'New York' },
      ],
      'young': [
        { name: 'Bob', age: 25, city: 'London' },
      ],
    });
  });

  test('should handle empty arrays', () => {
    expect(groupBy([], 'city')).toEqual({});
  });

  test('should handle arrays with non-existent keys', () => {
    const groupedByCountry = groupBy(users, 'country');
    expect(groupedByCountry).toEqual({
      undefined: users,
    });
  });

  test('should handle non-array inputs', () => {
    expect(groupBy(null, 'city')).toEqual({});
    expect(groupBy({}, 'city')).toEqual({});
  });
});
