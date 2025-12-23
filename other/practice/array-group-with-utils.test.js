const groupWith = require('./array-group-with-utils');

describe('groupWith', () => {
  it('should group elements by a custom function', () => {
    const data = [6.1, 4.2, 6.3];
    const result = groupWith(data, Math.floor);
    expect(result).toEqual({ '6': [6.1, 6.3], '4': [4.2] });
  });

  it('should handle grouping by string properties', () => {
    const data = [{ name: 'Alice', age: 30 }, { name: 'Bob', age: 25 }, { name: 'Alice', age: 35 }];
    const result = groupWith(data, item => item.name);
    expect(result).toEqual({
      'Alice': [{ name: 'Alice', age: 30 }, { name: 'Alice', age: 35 }],
      'Bob': [{ name: 'Bob', age: 25 }]
    });
  });

  it('should return an empty object for an empty array', () => {
    expect(groupWith([], Math.floor)).toEqual({});
  });

  it('should handle complex grouping logic', () => {
    const data = [1, 2, 3, 4, 5, 6];
    const result = groupWith(data, n => (n % 2 === 0 ? 'even' : 'odd'));
    expect(result).toEqual({ 'odd': [1, 3, 5], 'even': [2, 4, 6] });
  });
});
