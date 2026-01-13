
import { getNthElement } from './array-nth-element-getter-utils.js';

describe('getNthElement', () => {
  const arr = [10, 20, 30, 40, 50];

  it('should return the element at a positive index', () => {
    expect(getNthElement(arr, 0)).toBe(10);
    expect(getNthElement(arr, 2)).toBe(30);
    expect(getNthElement(arr, 4)).toBe(50);
  });

  it('should return the element at a negative index (from the end)', () => {
    expect(getNthElement(arr, -1)).toBe(50);
    expect(getNthElement(arr, -3)).toBe(30);
    expect(getNthElement(arr, -5)).toBe(10);
  });

  it('should return undefined for out-of-bounds positive indices', () => {
    expect(getNthElement(arr, 5)).toBeUndefined();
    expect(getNthElement(arr, 10)).toBeUndefined();
  });

  it('should return undefined for out-of-bounds negative indices', () => {
    expect(getNthElement(arr, -6)).toBeUndefined();
  });

  it('should return undefined for an empty array', () => {
    expect(getNthElement([], 0)).toBeUndefined();
    expect(getNthElement([], -1)).toBeUndefined();
  });

  it('should return undefined if the array is null or undefined', () => {
    expect(getNthElement(null, 0)).toBeUndefined();
    expect(getNthElement(undefined, 0)).toBeUndefined();
  });
});
