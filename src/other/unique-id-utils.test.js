import { uniqueId, uuid } from './unique-id-utils.js';

describe('uniqueId', () => {
  // Note: idCounter is module-scoped and persists across test runs within the same Jest worker.
  // For truly isolated tests, a mechanism to reset or inject the counter would be ideal.
  // For this exercise, we'll rely on the incrementing nature and test uniqueness.

  it('should generate unique IDs without a prefix', () => {
    const id1 = uniqueId();
    const id2 = uniqueId();
    expect(id1).not.toBe(id2);
    expect(id1).toMatch(/^\d+$/); // Should be just numbers
  });

  it('should generate unique IDs with a given prefix', () => {
    const prefix = 'test_';
    const id1 = uniqueId(prefix);
    const id2 = uniqueId(prefix);
    expect(id1).not.toBe(id2);
    expect(id1).toMatch(/^test_\d+$/);
    expect(id2).toMatch(/^test_\d+$/);
  });

  it('should generate different IDs even with the same prefix', () => {
    const prefix = 'item-';
    const ids = new Set();
    for (let i = 0; i < 5; i++) { // Reduced loop count for faster execution in CI/CD
      ids.add(uniqueId(prefix));
    }
    expect(ids.size).toBe(5);
  });

  it('should handle empty string prefix', () => {
    const id1 = uniqueId('');
    const id2 = uniqueId('');
    expect(id1).not.toBe(id2);
    expect(id1).toMatch(/^\d+$/);
  });
});

describe('uuid', () => {
  it('should generate a valid UUID v4', () => {
    const id = uuid();
    // UUID v4 regex: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
    // where x is any hexadecimal digit and y is one of 8, 9, A, or B.
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    expect(id).toMatch(uuidRegex);
  });

  it('should generate unique UUIDs', () => {
    const ids = new Set();
    for (let i = 0; i < 1000; i++) {
      ids.add(uuid());
    }
    expect(ids.size).toBe(1000);
  });
});