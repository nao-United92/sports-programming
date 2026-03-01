const mathInRange = require('./math-in-range');

test('checks if number is in range', () => {
  expect(mathInRange(3, 2, 5)).toBe(true);
  expect(mathInRange(3, 4, 1)).toBe(true);
  expect(mathInRange(5, 2, 5)).toBe(false);
});

test('handles single bound', () => {
  expect(mathInRange(3, 5)).toBe(true);
  expect(mathInRange(6, 5)).toBe(false);
});
