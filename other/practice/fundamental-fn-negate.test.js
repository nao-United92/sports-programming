const negate = require('./fundamental-fn-negate');

test('fundamental-fn-negate', () => {
  const isEven = n => n % 2 === 0;
  const isOdd = negate(isEven);
  expect(isOdd(1)).toBe(true);
  expect(isOdd(2)).toBe(false);
});
