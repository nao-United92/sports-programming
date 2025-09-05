import { times } from './functional-utils.js';

describe('times', () => {
  it('should call the iteratee n times', () => {
    const iteratee = jest.fn();
    times(5, iteratee);
    expect(iteratee).toHaveBeenCalledTimes(5);
  });

  it('should pass the index to the iteratee', () => {
    const indices = [];
    const iteratee = (index) => indices.push(index);
    times(3, iteratee);
    expect(indices).toEqual([0, 1, 2]);
  });

  it('should return an array of the results', () => {
    const iteratee = (index) => `item-${index}`;
    const result = times(4, iteratee);
    expect(result).toEqual(['item-0', 'item-1', 'item-2', 'item-3']);
  });

  it('should return an empty array if n is 0', () => {
    const iteratee = jest.fn();
    const result = times(0, iteratee);
    expect(result).toEqual([]);
    expect(iteratee).not.toHaveBeenCalled();
  });
});
