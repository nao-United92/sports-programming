const { groupBy } = require('./array-group-by');

describe('groupBy', () => {
  const people = [
    { name: 'Alice', age: 25, city: 'New York' },
    { name: 'Bob', age: 30, city: 'San Francisco' },
    { name: 'Charlie', age: 25, city: 'New York' },
    { name: 'Diana', age: 30, city: 'San Francisco' },
  ];

  it('should group an array of objects by a key', () => {
    const groupedByAge = groupBy(people, 'age');
    expect(groupedByAge).toEqual({
      '25': [
        { name: 'Alice', age: 25, city: 'New York' },
        { name: 'Charlie', age: 25, city: 'New York' },
      ],
      '30': [
        { name: 'Bob', age: 30, city: 'San Francisco' },
        { name: 'Diana', age: 30, city: 'San Francisco' },
      ],
    });
  });

  it('should handle a key that does not exist', () => {
    const groupedByCountry = groupBy(people, 'country');
    expect(groupedByCountry).toEqual({
      'undefined': people,
    });
  });

  it('should return an empty object for an empty array', () => {
    expect(groupBy([], 'name')).toEqual({});
  });

  it('should handle various data types as keys', () => {
    const data = [
      { id: 1, group: 'A' },
      { id: 2, group: 'B' },
      { id: 3, group: 'A' },
    ];
    const grouped = groupBy(data, 'group');
    expect(grouped).toEqual({
      'A': [{ id: 1, group: 'A' }, { id: 3, group: 'A' }],
      'B': [{ id: 2, group: 'B' }],
    });
  });

  it('should return an empty object if the input is not an array', () => {
    expect(groupBy(null, 'key')).toEqual({});
    expect(groupBy({}, 'key')).toEqual({});
    expect(groupBy('string', 'key')).toEqual({});
  });
});