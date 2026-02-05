const { groupBy } = require('./object-group-by');

describe('groupBy', () => {
  const people = [
    { name: 'Alice', age: 21, city: 'New York' },
    { name: 'Bob', age: 25, city: 'Los Angeles' },
    { name: 'Charlie', age: 21, city: 'New York' },
    { name: 'Dave', age: 25, city: 'New York' },
  ];

  it('should group an array of objects by a key string', () => {
    const groupedByCity = groupBy(people, 'city');
    expect(groupedByCity['New York']).toHaveLength(3);
    expect(groupedByCity['Los Angeles']).toHaveLength(1);
    expect(groupedByCity['New York'].map(p => p.name)).toEqual(['Alice', 'Charlie', 'Dave']);
  });

  it('should group an array of objects by a function', () => {
    const groupedByAge = groupBy(people, person => person.age);
    expect(groupedByAge[21]).toHaveLength(2);
    expect(groupedByAge[25]).toHaveLength(2);
    expect(groupedByAge[21].map(p => p.name)).toEqual(['Alice', 'Charlie']);
  });

  it('should return an empty object for an empty array', () => {
    expect(groupBy([], 'name')).toEqual({});
  });
  
  it('should handle non-string keys from the function', () => {
    const groupedByAgeBracket = groupBy(people, p => Math.floor(p.age / 10) * 10);
    expect(groupedByAgeBracket[20]).toHaveLength(4);
  });

  it('should throw an error if the first argument is not an array', () => {
    expect(() => groupBy({}, 'key')).toThrow(TypeError);
    expect(() => groupBy(null, 'key')).toThrow(TypeError);
  });
});
