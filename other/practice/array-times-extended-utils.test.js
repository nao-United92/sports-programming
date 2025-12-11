const times = require('./array-times-extended-utils');

describe('times', () => {
  test('should invoke the iteratee n times and return an array of results', () => {
    const iteratee = jest.fn((i) => i * 2);
    expect(times(3, iteratee)).toEqual([0, 2, 4]);
    expect(iteratee).toHaveBeenCalledTimes(3);
    expect(iteratee).toHaveBeenCalledWith(0);
    expect(iteratee).toHaveBeenCalledWith(1);
    expect(iteratee).toHaveBeenCalledWith(2);
  });

  test('should return an empty array if n is 0', () => {
    const iteratee = jest.fn();
    expect(times(0, iteratee)).toEqual([]);
    expect(iteratee).not.toHaveBeenCalled();
  });

  test('should return an empty array if n is negative', () => {
    const iteratee = jest.fn();
    expect(times(-5, iteratee)).toEqual([]);
    expect(iteratee).not.toHaveBeenCalled();
  });

  test('should return an empty array if n is not an integer', () => {
    const iteratee = jest.fn();
    expect(times(3.5, iteratee)).toEqual([]);
    expect(iteratee).not.toHaveBeenCalled();
  });

  test('should return an array of undefined if iteratee is not a function', () => {
    expect(times(2, null)).toEqual([undefined, undefined]);
    expect(times(2, undefined)).toEqual([undefined, undefined]);
  });

  test('should generate a sequence of numbers', () => {
    expect(times(5, (i) => i + 1)).toEqual([1, 2, 3, 4, 5]);
  });

  test('should generate objects', () => {
    expect(times(2, (i) => ({
      id: i
    }))).toEqual([{
      id: 0
    }, {
      id: 1
    }]);
  });
});
