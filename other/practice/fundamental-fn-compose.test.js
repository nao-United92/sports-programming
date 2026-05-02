const compose = require('./fundamental-fn-compose');

test('fundamental-fn-compose', () => {
  const add1 = n => n + 1;
  const double = n => n * 2;
  const add1ThenDouble = compose(double, add1);
  expect(add1ThenDouble(2)).toBe(6);
});
