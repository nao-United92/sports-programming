const { times } = require('./function-times');

describe('times', () => {
  test('should execute the iteratee n times and return an array of results', () => {
    const iteratee = jest.fn((i) => i * 2);
    expect(times(3, iteratee)).toEqual([0, 2, 4]);
    expect(iteratee).toHaveBeenCalledTimes(3);
    expect(iteratee).toHaveBeenCalledWith(0);
    expect(iteratee).toHaveBeenCalledWith(1);
    expect(iteratee).toHaveBeenCalledWith(2);
  });

  test('should return an empty array if n is 0', () => {
    const iteratee = jest.fn(() => 'hello');
    expect(times(0, iteratee)).toEqual([]);
    expect(iteratee).not.toHaveBeenCalled();
  });

  test('should handle iteratee that returns constant value', () => {
    const iteratee = () => 'test';
    expect(times(5, iteratee)).toEqual(['test', 'test', 'test', 'test', 'test']);
  });

  test('should throw TypeError if n is not a number', () => {
    expect(() => times('3', () => {})).toThrow(TypeError);
    expect(() => times(null, () => {})).toThrow(TypeError);
    expect(() => times(undefined, () => {})).toThrow(TypeError);
    expect(() => times({}, () => {})).toThrow(TypeError);
  });

  test('should throw TypeError if n is a negative number', () => {
    expect(() => times(-1, () => {})).toThrow(TypeError);
  });

  test('should throw TypeError if n is not an integer', () => {
    expect(() => times(3.5, () => {})).toThrow(TypeError);
  });

  test('should throw TypeError if iteratee is not a function', () => {
    expect(() => times(3, 'not a function')).toThrow(TypeError);
    expect(() => times(3, null)).toThrow(TypeError);
    expect(() => times(3, undefined)).toThrow(TypeError);
    expect(() => times(3, 123)).toThrow(TypeError);
  });
});
