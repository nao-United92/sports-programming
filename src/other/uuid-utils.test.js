import { uuid } from './uuid-utils';

describe('uuid', () => {
  test('should generate a string', () => {
    expect(typeof uuid()).toBe('string');
  });

  test('should generate a UUID of length 36', () => {
    expect(uuid().length).toBe(36);
  });

  test('should generate a UUID with correct format', () => {
    const id = uuid();
    // Regex to match UUID v4 format
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    expect(id).toMatch(uuidRegex);
  });

  test('should generate unique UUIDs (within reasonable probability)', () => {
    const ids = new Set();
    const numGenerations = 1000;
    for (let i = 0; i < numGenerations; i++) {
      ids.add(uuid());
    }
    expect(ids.size).toBe(numGenerations);
  });

  test('should have the correct version (4) at the 15th character', () => {
    const id = uuid();
    expect(id.charAt(14)).toBe('4');
  });

  test('should have the correct variant (8, 9, a, or b) at the 20th character', () => {
    const id = uuid();
    const variantChar = id.charAt(19);
    expect(['8', '9', 'a', 'b']).toContain(variantChar);
  });
});