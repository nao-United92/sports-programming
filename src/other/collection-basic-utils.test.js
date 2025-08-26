import { forEach, map, filter, reduce } from './collection-basic-utils.js';

describe('forEach', () => {
  it('should iterate over array elements', () => {
    const arr = [1, 2, 3];
    const mockCallback = jest.fn();
    forEach(arr, mockCallback);
    expect(mockCallback).toHaveBeenCalledTimes(3);
    expect(mockCallback).toHaveBeenCalledWith(1, 0, arr);
    expect(mockCallback).toHaveBeenCalledWith(2, 1, arr);
    expect(mockCallback).toHaveBeenCalledWith(3, 2, arr);
  });

  it('should iterate over object properties', () => {
    const obj = { a: 1, b: 2 };
    const mockCallback = jest.fn();
    forEach(obj, mockCallback);
    expect(mockCallback).toHaveBeenCalledTimes(2);
    expect(mockCallback).toHaveBeenCalledWith(1, 'a', obj);
    expect(mockCallback).toHaveBeenCalledWith(2, 'b', obj);
  });
});

describe('map', () => {
  it('should map array elements', () => {
    const arr = [1, 2, 3];
    const result = map(arr, (n) => n * 2);
    expect(result).toEqual([2, 4, 6]);
  });

  it('should map object properties', () => {
    const obj = { a: 1, b: 2 };
    const result = map(obj, (v) => v * 2);
    expect(result).toEqual([2, 4]);
  });
});

describe('filter', () => {
  it('should filter array elements', () => {
    const arr = [1, 2, 3, 4];
    const result = filter(arr, (n) => n % 2 === 0);
    expect(result).toEqual([2, 4]);
  });

  it('should filter object properties', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const result = filter(obj, (v) => v % 2 === 0);
    expect(result).toEqual([2]);
  });
});

describe('reduce', () => {
  it('should reduce array elements with initial accumulator', () => {
    const arr = [1, 2, 3];
    const result = reduce(arr, (sum, n) => sum + n, 0);
    expect(result).toBe(6);
  });

  it('should reduce array elements without initial accumulator', () => {
    const arr = [1, 2, 3];
    const result = reduce(arr, (sum, n) => sum + n);
    expect(result).toBe(6);
  });

  it('should reduce object properties with initial accumulator', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const result = reduce(obj, (sum, v) => sum + v, 0);
    expect(result).toBe(6);
  });
});
