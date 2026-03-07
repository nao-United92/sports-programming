const averageByProperty = require('./math-average-by-property');

describe('averageByProperty', () => {
  test('calculates the average of a specific property across objects', () => {
    const data = [
      { score: 10, name: 'Alice' },
      { score: 20, name: 'Bob' },
      { score: 30, name: 'Charlie' }
    ];
    expect(averageByProperty(data, 'score')).toBe(20);
  });

  test('returns 0 for empty array', () => {
    expect(averageByProperty([], 'score')).toBe(0);
  });

  test('returns 0 if property is not a number', () => {
    const data = [{ score: 'not a number' }];
    expect(averageByProperty(data, 'score')).toBe(0);
  });

  test('handles missing properties as 0', () => {
    const data = [{ score: 10 }, { name: 'Alice' }];
    expect(averageByProperty(data, 'score')).toBe(5);
  });
});
