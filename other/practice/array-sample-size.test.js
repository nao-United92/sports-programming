const sampleSize = require('./array-sample-size');

test('sampleSize gets N elements from array', () => {
  const input = [1, 2, 3, 4, 5];
  const result = sampleSize(input, 3);
  expect(result).toHaveLength(3);
  result.forEach(item => expect(input).toContain(item));
});

test('sampleSize returns up to array length', () => {
  const input = [1, 2];
  expect(sampleSize(input, 5)).toHaveLength(2);
});
