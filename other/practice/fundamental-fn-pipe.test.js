const pipe = require('./fundamental-fn-pipe');

test('fundamental-fn-pipe', () => {
  const add1 = n => n + 1;
  const double = n => n * 2;
  const add1ThenDouble = pipe(add1, double);
  expect(add1ThenDouble(2)).toBe(6);
});
