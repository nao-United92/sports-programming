
import { times } from './function-times-utils.js';

describe('times', () => {
  test('should invoke the iteratee n times', () => {
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
    const result = times(4, (i) => i * 2);
    expect(result).toEqual([0, 2, 4, 6]);
  });

  test('should return an empty array if n is less than 1', () => {
    expect(times(0, () => {})).toEqual([]);
    expect(times(-1, () => {})).toEqual([]);
  });

  test('can be used to create a constant array', () => {
    const result = times(3, () => 'a');
    expect(result).toEqual(['a', 'a', 'a']);
  });
});
