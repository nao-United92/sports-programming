import { times } from './times-utils';

describe('times', () => {
  it('should invoke the iteratee n times', () => {
    const iteratee = jest.fn();
    times(5, iteratee);
    expect(iteratee).toHaveBeenCalledTimes(5);
  });

  it('should pass the index to the iteratee', () => {
    const iteratee = jest.fn();
    times(3, iteratee);
    expect(iteratee).toHaveBeenCalledWith(0);
    expect(iteratee).toHaveBeenCalledWith(1);
    expect(iteratee).toHaveBeenCalledWith(2);
  });

  it('should return an array of the results', () => {
    const iteratee = index => `item-${index}`;
    const result = times(4, iteratee);
    expect(result).toEqual(['item-0', 'item-1', 'item-2', 'item-3']);
  });

  it('should default to an identity-like iteratee, returning an array of indices', () => {
    const result = times(4);
    expect(result).toEqual([0, 1, 2, 3]);
  });

  it('should return an empty array if n is 0', () => {
    const iteratee = jest.fn();
    const result = times(0, iteratee);
    expect(result).toEqual([]);
    expect(iteratee).not.toHaveBeenCalled();
  });

  it('should return an empty array if n is negative', () => {
    const result = times(-3);
    expect(result).toEqual([]);
  });

  it('should work with a constant-returning iteratee', () => {
    const result = times(3, () => 'a');
    expect(result).toEqual(['a', 'a', 'a']);
  });
});
