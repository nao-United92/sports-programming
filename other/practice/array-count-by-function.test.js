const countByFunction = require('./array-count-by-function');

describe('countByFunction', () => {
  test('counts by function', () => {
    expect(countByFunction([6.1, 4.2, 6.3], Math.floor)).toEqual({ '4': 1, '6': 2 });
  });

  test('counts by property shorthand', () => {
    expect(countByFunction(['one', 'two', 'three'], 'length')).toEqual({ '3': 2, '5': 1 });
  });
});
