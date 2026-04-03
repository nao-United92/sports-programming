const mathIsSquareFree = require('./math-is-square-free');

describe('mathIsSquareFree', () => {
  test('1 is square-free', () => {
    expect(mathIsSquareFree(1)).toBe(true);
  });

  test('10 is square-free (2 * 5)', () => {
    expect(mathIsSquareFree(10)).toBe(true);
  });

  test('4 is not square-free (2^2)', () => {
    expect(mathIsSquareFree(4)).toBe(false);
  });

  test('12 is not square-free (2^2 * 3)', () => {
    expect(mathIsSquareFree(12)).toBe(false);
  });

  test('30 is square-free (2 * 3 * 5)', () => {
    expect(mathIsSquareFree(30)).toBe(true);
  });
});
