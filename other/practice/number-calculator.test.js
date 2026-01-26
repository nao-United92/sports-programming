const { sum, average } = require('./number-calculator');

describe('Number Calculator', () => {
  describe('sum', () => {
    test('should return the sum of an array of numbers', () => {
      expect(sum([1, 2, 3, 4, 5])).toBe(15);
    });

    test('should return 0 for an empty array', () => {
      expect(sum([])).toBe(0);
    });

    test('should ignore non-number elements in the array', () => {
      expect(sum([1, '2', 3, null, 4, undefined, 5])).toBe(13);
    });

    test('should handle negative numbers', () => {
      expect(sum([-1, -2, 3, 4, -5])).toBe(-1);
    });

    test('should return 0 if the input is not an array', () => {
      expect(sum('not an array')).toBe(0);
      expect(sum({ a: 1 })).toBe(0);
    });
  });

  describe('average', () => {
    test('should return the average of an array of numbers', () => {
      expect(average([1, 2, 3, 4, 5])).toBe(3);
    });

    test('should return 0 for an empty array', () => {
      expect(average([])).toBe(0);
    });

    test('should ignore non-number elements when calculating the average', () => {
      expect(average([1, '2', 3, null, 4, undefined, 5])).toBe(3.25); // (1+3+4+5) / 4
    });

    test('should handle floating point numbers', () => {
      expect(average([1.5, 2.5, 3.5])).toBeCloseTo(2.5);
    });

    test('should return 0 if no valid numbers are in the array', () => {
      expect(average(['a', 'b', null])).toBe(0);
    });
  });
});
