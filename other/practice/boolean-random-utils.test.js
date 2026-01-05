import randomBoolean from './boolean-random-utils';

describe('randomBoolean', () => {
  test('should return a boolean value', () => {
    const result = randomBoolean();
    expect(typeof result).toBe('boolean');
  });

  test('should return true or false', () => {
    const results = Array.from({ length: 100 }, () => randomBoolean());
    // Check if both true and false appear in a sufficiently large sample
    expect(results).toContain(true);
    expect(results).toContain(false);
  });
});
