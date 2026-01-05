import generateUUID from './uuid-generate-utils';

describe('generateUUID', () => {
  test('should return a string', () => {
    const uuid = generateUUID();
    expect(typeof uuid).toBe('string');
  });

  test('should return a UUID in the correct format', () => {
    const uuid = generateUUID();
    // UUID v4 format: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
    // where x is any hexadecimal digit and y is one of 8, 9, A, or B.
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    expect(uuid).toMatch(uuidRegex);
  });

  test('should generate unique UUIDs (probabilistically)', () => {
    const uuids = new Set();
    const numberOfUUIDs = 1000; // Generate a reasonable number to test uniqueness
    for (let i = 0; i < numberOfUUIDs; i++) {
      uuids.add(generateUUID());
    }
    expect(uuids.size).toBe(numberOfUUIDs);
  });
});
