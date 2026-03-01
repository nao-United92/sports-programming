const mathClamp = require('./math-clamp');

test('clamps a number within range', () => {
  expect(mathClamp(5, 0, 10)).toBe(5);
  expect(mathClamp(-5, 0, 10)).toBe(0);
  expect(mathClamp(15, 0, 10)).toBe(10);
});
