const { shuffle } = require('./array-shuffle-helper.js');

describe('shuffle', () => {
  test('should return an array with the same length', () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffled = shuffle([...arr]);
    expect(shuffled).toHaveLength(arr.length);
  });

  test('should contain the same elements as the original array', () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffled = shuffle([...arr]);
    expect(shuffled.sort()).toEqual(arr.sort());
  });

  test('should not modify the original array', () => {
    const arr = [1, 2, 3, 4, 5];
    const originalArr = [...arr];
    shuffle(arr);
    expect(arr).toEqual(originalArr);
  });

  test('should handle an empty array', () => {
    expect(shuffle([])).toEqual([]);
  });

  test('should return a new array instance', () => {
    const arr = [1, 2, 3];
    const shuffled = shuffle(arr);
    expect(shuffled).not.toBe(arr);
  });

  test('should throw an error if the argument is not an array', () => {
    expect(() => shuffle(null)).toThrow('Expected an array for the first argument.');
    expect(() => shuffle(undefined)).toThrow('Expected an array for the first argument.');
    expect(() => shuffle(123)).toThrow('Expected an array for the first argument.');
    expect(() => shuffle('string')).toThrow('Expected an array for the first argument.');
    expect(() => shuffle({})).toThrow('Expected an array for the first argument.');
  });
});
