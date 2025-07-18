import { uuid } from './general-utils.js';

describe('general-utils', () => {
  describe('uuid', () => {
    test('should generate a valid UUID v4', () => {
      const id = uuid();
      // UUID v4 regex pattern
      const uuidV4Pattern = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
      expect(id).toMatch(uuidV4Pattern);
    });

    test('should generate unique UUIDs', () => {
      const id1 = uuid();
      const id2 = uuid();
      expect(id1).not.toBe(id2);
    });
  });
});
