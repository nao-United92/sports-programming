
const arrayShuffleFisherYates = require('./array-shuffle-fisher-yates');

describe('arrayShuffleFisherYates', () => {
  test('returns an array of the same length', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = arrayShuffleFisherYates(arr);
    expect(result.length).toBe(arr.length);
  });

  test('contains the same elements', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = arrayShuffleFisherYates(arr);
    expect(result.sort()).toEqual(arr.sort());
  });

  test('does not modify original array', () => {
    const arr = [1, 2, 3];
    const original = [...arr];
    arrayShuffleFisherYates(arr);
    expect(arr).toEqual(original);
  });
});
