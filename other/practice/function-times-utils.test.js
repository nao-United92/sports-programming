const { times } = require('./function-times-utils');

describe('times', () => {
  test('should call the iteratee n times', () => {
    const iteratee = jest.fn();
    times(5, iteratee);
    expect(iteratee).toHaveBeenCalledTimes(5);
  });

  test('should pass the index to the iteratee', () => {
    const iteratee = jest.fn();
    times(3, iteratee);
    expect(iteratee).toHaveBeenCalledWith(0);
    expect(iteratee).toHaveBeenCalledWith(1);
    expect(iteratee).toHaveBeenCalledWith(2);
  });

  test('should return an array of the results', () => {
    const result = times(5, String);
    expect(result).toEqual(['0', '1', '2', '3', '4']);
  });

  test('should handle n=0', () => {
    const iteratee = jest.fn();
    const result = times(0, iteratee);
    expect(iteratee).not.toHaveBeenCalled();
    expect(result).toEqual([]);
  });
});