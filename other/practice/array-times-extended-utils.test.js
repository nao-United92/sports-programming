const { times } = require('./array-times-extended-utils');

describe('times', () => {
  test('should call the iteratee n times', () => {
    const iteratee = jest.fn();
    times(5, iteratee);
    expect(iteratee).toHaveBeenCalledTimes(5);
  });

  test('should return an array of the results of each iteratee call', () => {
    const result = times(5, String);
    expect(result).toEqual(['0', '1', '2', '3', '4']);
  });

  test('should return an empty array if n is less than 1', () => {
    const result = times(0, String);
    expect(result).toEqual([]);
  });

  test('should pass the index to the iteratee', () => {
    const iteratee = jest.fn();
    times(3, iteratee);
    expect(iteratee).toHaveBeenCalledWith(0);
    expect(iteratee).toHaveBeenCalledWith(1);
    expect(iteratee).toHaveBeenCalledWith(2);
  });
});