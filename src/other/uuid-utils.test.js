import { generateUUID } from './uuid-utils';

describe('generateUUID', () => {
  test('should generate a valid UUID v4 format', () => {
    const uuid = generateUUID();
    // UUID v4 regex: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
    // where y is one of [8, 9, A, B]
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    expect(uuid).toMatch(uuidRegex);
  });

  test('should generate unique UUIDs', () => {
    const uuid1 = generateUUID();
    const uuid2 = generateUUID();
    const uuid3 = generateUUID();

    expect(uuid1).not.toBe(uuid2);
    expect(uuid1).not.toBe(uuid3);
    expect(uuid2).not.toBe(uuid3);
  });

  test('should generate a large number of unique UUIDs', () => {
    const numUUIDs = 1000;
    const uuids = new Set();
    for (let i = 0; i < numUUIDs; i++) {
      uuids.add(generateUUID());
    }
    expect(uuids.size).toBe(numUUIDs);
  });
});
