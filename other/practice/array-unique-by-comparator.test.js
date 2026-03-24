const uniqueByComparator = require('./array-unique-by-comparator');

describe('uniqueByComparator', () => {
  test('uniques by comparator', () => {
    const arr = [
      { x: 1, y: 2 },
      { x: 2, y: 1 },
      { x: 1, y: 2 },
    ];
    // Simple deep equals
    const result = uniqueByComparator(arr, (a, b) => a.x === b.x && a.y === b.y);
    expect(result).toHaveLength(2);
    expect(result).toEqual([{ x: 1, y: 2 }, { x: 2, y: 1 }]);
  });
});
