import { times } from './times-utils';

describe('times', () => {
  it('should call the iteratee n times', () => {
    const mockIteratee = jest.fn();
    times(5, mockIteratee);
    expect(mockIteratee).toHaveBeenCalledTimes(5);
  });

  it('should return an array of results', () => {
    const result = times(4, String);
    expect(result).toEqual(['0', '1', '2', '3']);
  });

  it('should pass the index to the iteratee', () => {
    const indices = [];
    times(3, (index) => indices.push(index));
    expect(indices).toEqual([0, 1, 2]);
  });

  it('should return an empty array for n = 0', () => {
    const mockIteratee = jest.fn();
    const result = times(0, mockIteratee);
    expect(result).toEqual([]);
    expect(mockIteratee).not.toHaveBeenCalled();
  });
});
