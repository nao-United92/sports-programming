import { mathAverageValue } from './math-average-value';

test('mathAverageValue calculates average', () => {
  expect(mathAverageValue([1, 2, 3, 4, 5])).toBe(3);
  expect(mathAverageValue([10, 20])).toBe(15);
  expect(mathAverageValue([])).toBe(0);
});
