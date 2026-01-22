const { groupBy } = require('./array-group-by-creator');

describe('groupBy', () => {
  it('should group by a given key', () => {
    const array = [
      { type: 'fruit', name: 'apple' },
      { type: 'vegetable', name: 'broccoli' },
      { type: 'fruit', name: 'banana' },
      { type: 'vegetable', name: 'carrot' },
    ];
    const expected = {
      fruit: [
        { type: 'fruit', name: 'apple' },
        { type: 'fruit', name: 'banana' },
      ],
      vegetable: [
        { type: 'vegetable', name: 'broccoli' },
        { type: 'vegetable', name: 'carrot' },
      ],
    };
    expect(groupBy(array, 'type')).toEqual(expected);
  });

  it('should group by a given function', () => {
    const array = [6.1, 4.2, 6.3];
    const expected = {
      '6': [6.1, 6.3],
      '4': [4.2],
    };
    expect(groupBy(array, Math.floor)).toEqual(expected);
  });

  it('should return an empty object for a non-array input', () => {
    expect(groupBy(null, 'key')).toEqual({});
    expect(groupBy(undefined, 'key')).toEqual({});
    expect(groupBy({}, 'key')).toEqual({});
  });

  it('should handle an empty array', () => {
    expect(groupBy([], 'key')).toEqual({});
  });
});
