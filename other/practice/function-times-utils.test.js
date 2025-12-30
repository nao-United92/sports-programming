import times from './function-times-utils';

describe('times', () => {
  test('should invoke a function n times', () => {
    let count = 0;
    const increment = () => count++;
    times(5, increment);
    expect(count).toBe(5);
  });

  test('should return an array of the results', () => {
    const square = (i) => i * i;
    expect(times(5, square)).toEqual([0, 1, 4, 9, 16]);
  });

  test('should pass the index to the iteratee', () => {
    const identity = (i) => i;
    expect(times(3, identity)).toEqual([0, 1, 2]);
  });

  test('should return an empty array if n is 0', () => {
    const spy = jest.fn();
    expect(times(0, spy)).toEqual([]);
    expect(spy).not.toHaveBeenCalled();
  });

  test('should return an empty array for negative n', () => {
    expect(times(-3, () => {})).toEqual([]);
  });
});
