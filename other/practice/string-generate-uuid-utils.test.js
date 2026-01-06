const generateUUID = require('./string-generate-uuid-utils');

describe('generateUUID', () => {
  test('should generate a string of length 36', () => {
    const uuid = generateUUID();
    expect(uuid.length).toBe(36);
  });

  test('should generate a string with correct UUID format', () => {
    const uuid = generateUUID();
    // Example: "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
    // '4' at the 14th position (0-indexed) indicates UUID v4.
    // '8', '9', 'a', or 'b' at the 19th position (0-indexed) indicates variant.
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    expect(uuid).toMatch(uuidRegex);
  });

  test('should generate unique UUIDs on successive calls', () => {
    const uuid1 = generateUUID();
    const uuid2 = generateUUID();
    expect(uuid1).not.toBe(uuid2);
  });

  test('should generate a reasonable number of unique UUIDs without collision (probabilistic test)', () => {
    const numUUIDs = 1000;
    const uuids = new Set();
    for (let i = 0; i < numUUIDs; i++) {
      uuids.add(generateUUID());
    }
    expect(uuids.size).toBe(numUUIDs);
  });
});
