const groupByMap = require('./array-group-by-map');

describe('groupByMap', () => {
  test('groups elements by key selector', () => {
    const array = [
      { id: 1, type: 'a' },
      { id: 2, type: 'b' },
      { id: 3, type: 'a' },
    ];
    const result = groupByMap(array, item => item.type);
    expect(result.get('a')).toEqual([{ id: 1, type: 'a' }, { id: 3, type: 'a' }]);
    expect(result.get('b')).toEqual([{ id: 2, type: 'b' }]);
    expect(result.size).toBe(2);
  });

  test('throws error for non-array input', () => {
    expect(() => groupByMap('not array', x => x)).toThrow('Input must be an array');
  });
});
