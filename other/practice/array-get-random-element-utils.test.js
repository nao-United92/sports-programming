import { getRandomElement } from './array-get-random-element-utils';

describe('getRandomElement', () => {
  it('should return an element from the array', () => {
    const array = [1, 2, 3, 4, 5];
    const randomElement = getRandomElement(array);
    expect(array).toContain(randomElement);
  });

  it('should return undefined for an empty array', () => {
    expect(getRandomElement([])).toBeUndefined();
  });

  it('should return undefined for a null or undefined array', () => {
    expect(getRandomElement(null)).toBeUndefined();
    expect(getRandomElement(undefined)).toBeUndefined();
  });

  it('should return the only element for a single-element array', () => {
    const array = ['hello'];
    expect(getRandomElement(array)).toBe('hello');
  });
});