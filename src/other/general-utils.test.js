import { times, random, uniqueId } from './general-utils.js';

describe('times', () => {
  it('should call the iteratee n times', () => {
    const iteratee = jest.fn();
    times(5, iteratee);
    expect(iteratee).toHaveBeenCalledTimes(5);
  });

  it('should return an array of results', () => {
    const result = times(5, String);
    expect(result).toEqual(['0', '1', '2', '3', '4']);
  });

  it('should return an empty array for n < 1', () => {
    expect(times(0, () => {})).toEqual([]);
    expect(times(-1, () => {})).toEqual([]);
  });
});

describe('random', () => {
  it('should return a number within the specified range', () => {
    const result = random(1, 10);
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(10);
  });

  it('should return a floating-point number if specified', () => {
    const result = random(1, 2, true);
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(2);
    expect(result % 1).not.toBe(0);
  });
});

describe('uniqueId', () => {
  it('should generate unique IDs', () => {
    const id1 = uniqueId();
    const id2 = uniqueId();
    expect(id1).not.toBe(id2);
  });

  it('should use a prefix if provided', () => {
    const id = uniqueId('contact_');
    expect(id.startsWith('contact_')).toBe(true);
  });
});