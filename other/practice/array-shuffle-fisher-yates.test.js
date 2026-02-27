const shuffleFisherYates = require('./array-shuffle-fisher-yates');

test('shuffleFisherYates shuffles an array', () => {
  const input = [1, 2, 3, 4, 5];
  const result = shuffleFisherYates(input);
  expect(result).toHaveLength(input.length);
  expect(result.sort()).toEqual(input.sort());
});

test('shuffleFisherYates returns a new array', () => {
  const input = [1, 2, 3];
  const result = shuffleFisherYates(input);
  expect(result).not.toBe(input);
});
