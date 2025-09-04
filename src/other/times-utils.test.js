import times from './times-utils.js';

describe('times', () => {
  test('should invoke iteratee n times', () => {
    const iteratee = jest.fn();
    times(3, iteratee);
    expect(iteratee).toHaveBeenCalledTimes(3);
  });

  test('should pass the index to the iteratee', () => {
    const iteratee = jest.fn();
    times(3, iteratee);
    expect(iteratee).toHaveBeenCalledWith(0);
    expect(iteratee).toHaveBeenCalledWith(1);
    expect(iteratee).toHaveBeenCalledWith(2);
  });

  test('should return an array of the results', () => {
    const result = times(4, (i) => `item-${i}`);
    expect(result).toEqual(['item-0', 'item-1', 'item-2', 'item-3']);
  });

  test('should return an empty array if n is 0', () => {
    const iteratee = jest.fn();
    const result = times(0, iteratee);
    expect(result).toEqual([]);
    expect(iteratee).not.toHaveBeenCalled();
  });

  test('should return an empty array for negative, null, or non-finite n', () => {
    expect(times(-1, () => {})).toEqual([]);
    expect(times(null, () => {})).toEqual([]);
    expect(times(Infinity, () => {})).toEqual([]);
    expect(times(NaN, () => {})).toEqual([]);
  });

  test('should work with a built-in constructor as iteratee', () => {
    const result = times(3, String);
    expect(result).toEqual(['0', '1', '2']);
  });
});