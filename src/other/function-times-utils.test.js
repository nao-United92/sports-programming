const { times } = require('./function-times-utils.js');

describe('times', () => {
  test('should invoke the iteratee n times and return an array of results', () => {
    const iteratee = jest.fn(index => index * 2);
    const result = times(3, iteratee);

    expect(iteratee).toHaveBeenCalledTimes(3);
    expect(iteratee).toHaveBeenCalledWith(0);
    expect(iteratee).toHaveBeenCalledWith(1);
    expect(iteratee).toHaveBeenCalledWith(2);
    expect(result).toEqual([0, 2, 4]);
  });

  test('should return an empty array if n is 0', () => {
    const iteratee = jest.fn();
    const result = times(0, iteratee);

    expect(iteratee).not.toHaveBeenCalled();
    expect(result).toEqual([]);
  });

  test('should return an empty array if n is negative', () => {
    const iteratee = jest.fn();
    const result = times(-5, iteratee);

    expect(iteratee).not.toHaveBeenCalled();
    expect(result).toEqual([]);
  });

  test('should handle non-integer n by flooring it', () => {
    const iteratee = jest.fn(index => index + 1);
    const result = times(2.9, iteratee);

    expect(iteratee).toHaveBeenCalledTimes(2);
    expect(result).toEqual([1, 2]);
  });

  test('should return an array of undefined if iteratee does not return a value', () => {
    const iteratee = jest.fn();
    const result = times(2, iteratee);

    expect(result).toEqual([undefined, undefined]);
  });
});