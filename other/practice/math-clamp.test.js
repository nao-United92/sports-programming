import { mathClamp } from './math-clamp';

test('mathClamp restricts number to range', () => {
  expect(mathClamp(5, 0, 10)).toBe(5);
  expect(mathClamp(-5, 0, 10)).toBe(0);
  expect(mathClamp(15, 0, 10)).toBe(10);
});
