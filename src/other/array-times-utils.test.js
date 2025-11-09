const { times } = require('./array-times-utils');

describe('times', () => {
  test('should invoke the iteratee n times and return an array of results', () => {
    const mockIteratee = jest.fn((i) => i * 2);
    const result = times(5, mockIteratee);

    expect(mockIteratee).toHaveBeenCalledTimes(5);
    expect(mockIteratee).toHaveBeenCalledWith(0);
    expect(mockIteratee).toHaveBeenCalledWith(1);
    expect(mockIteratee).toHaveBeenCalledWith(2);
    expect(mockIteratee).toHaveBeenCalledWith(3);
    expect(mockIteratee).toHaveBeenCalledWith(4);
    expect(result).toEqual([0, 2, 4, 6, 8]);
  });

  test('should pass the current index to the iteratee', () => {
    const mockIteratee = jest.fn();
    times(3, mockIteratee);

    expect(mockIteratee.mock.calls[0][0]).toBe(0);
    expect(mockIteratee.mock.calls[1][0]).toBe(1);
    expect(mockIteratee.mock.calls[2][0]).toBe(2);
  });

  test('should return an empty array when n is 0', () => {
    const mockIteratee = jest.fn();
    const result = times(0, mockIteratee);

    expect(mockIteratee).not.toHaveBeenCalled();
    expect(result).toEqual([]);
  });

  test('should return an empty array when n is a negative number', () => {
    const mockIteratee = jest.fn();
    const result = times(-5, mockIteratee);

    expect(mockIteratee).not.toHaveBeenCalled();
    expect(result).toEqual([]);
  });

  test('should handle iteratee returning different types', () => {
    let counter = 0;
    const mockIteratee = jest.fn(() => {
      counter++;
      return counter % 2 === 0 ? 'even' : 1;
    });
    const result = times(4, mockIteratee);

    expect(result).toEqual([1, 'even', 1, 'even']);
  });
});
