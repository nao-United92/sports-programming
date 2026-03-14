const getQuarter = require('./date-get-quarter');

describe('getQuarter', () => {
  test('returns 1 for January, February, March', () => {
    expect(getQuarter('2024-01-01')).toBe(1);
    expect(getQuarter('2024-03-31')).toBe(1);
  });

  test('returns 2 for April, May, June', () => {
    expect(getQuarter(new Date('2024-04-15'))).toBe(2);
    expect(getQuarter('2024-06-30')).toBe(2);
  });

  test('returns 3 for July, August, September', () => {
    expect(getQuarter('2024-07-01')).toBe(3);
    expect(getQuarter('2024-09-15')).toBe(3);
  });

  test('returns 4 for October, November, December', () => {
    expect(getQuarter('2024-10-01')).toBe(4);
    expect(getQuarter('2024-12-31')).toBe(4);
  });

  test('throws error for invalid date', () => {
    expect(() => getQuarter('invalid')).toThrow('Invalid date');
  });
});
