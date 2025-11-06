import { uuid } from './string-uuid-utils.js';

describe('uuid', () => {
  test('should generate a valid UUID v4 string', () => {
    const id = uuid();
    // UUID v4 regex: /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    expect(id).toMatch(uuidRegex);
  });

  test('should generate unique UUIDs', () => {
    const id1 = uuid();
    const id2 = uuid();
    expect(id1).not.toBe(id2);
  });

  test('should generate 1000 unique UUIDs', () => {
    const ids = new Set();
    for (let i = 0; i < 1000; i++) {
      ids.add(uuid());
    }
    expect(ids.size).toBe(1000);
  });
});
