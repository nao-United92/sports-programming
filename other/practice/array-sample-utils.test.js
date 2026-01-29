import sample from './array-sample-utils';

describe('sample', () => {
  it('should return undefined for an empty array', () => {
    expect(sample([])).toBeUndefined();
  });

  it('should return undefined for non-array inputs', () => {
    expect(sample(null)).toBeUndefined();
    expect(sample(undefined)).toBeUndefined();
    expect(sample(123)).toBeUndefined();
    expect(sample({})).toBeUndefined();
  });

  it('should return an element from the array', () => {
    const array = [1, 2, 3, 4, 5];
    const result = sample(array);
    expect(array).toContain(result);
  });

  it('should return the only element for a single-element array', () => {
    expect(sample([10])).toBe(10);
  });

  it('should return different elements over multiple calls (probabilistic)', () => {
    const array = [1, 2, 3, 4, 5];
    const results = new Set();
    for (let i = 0; i < 100; i++) {
      results.add(sample(array));
    }
    // This test is probabilistic and might fail rarely, but it's a good general check
    expect(results.size).toBeGreaterThan(1);
  });
});