import { uuid } from './uuid-utils.js';

describe('uuid', () => {
  it('should generate a valid UUID v4 string', () => {
    const id = uuid();
    // UUID v4 regex: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
    // where x is a hexadecimal digit (0-9, a-f)
    // and y is one of 8, 9, A, or B
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    expect(id).toMatch(uuidRegex);
  });

  it('should generate unique UUIDs', () => {
    const ids = new Set();
    const numIdsToGenerate = 1000; // Generate a reasonable number to test uniqueness

    for (let i = 0; i < numIdsToGenerate; i++) {
      ids.add(uuid());
    }

    expect(ids.size).toBe(numIdsToGenerate);
  });

  it('should use crypto.getRandomValues if available', () => {
    // Mock crypto.getRandomValues to check if it's called
    const mockGetRandomValues = jest.fn((arr) => {
      for (let i = 0; i < arr.length; i++) {
        arr[i] = Math.floor(Math.random() * 256); // Fill with random bytes
      }
      return arr;
    });

    const originalCrypto = global.crypto;
    Object.defineProperty(global, 'crypto', {
      value: { getRandomValues: mockGetRandomValues },
      writable: true,
    });

    uuid();
    expect(mockGetRandomValues).toHaveBeenCalled();

    // Restore original crypto
    Object.defineProperty(global, 'crypto', {
      value: originalCrypto,
      writable: true,
    });
  });

  it('should fallback to Math.random if crypto.getRandomValues is not available', () => {
    // Mock crypto to be undefined
    const originalCrypto = global.crypto;
    Object.defineProperty(global, 'crypto', {
      value: undefined,
      writable: true,
    });

    const mathRandomSpy = jest.spyOn(Math, 'random');

    uuid();
    expect(mathRandomSpy).toHaveBeenCalled();

    // Restore original crypto and Math.random
    Object.defineProperty(global, 'crypto', {
      value: originalCrypto,
      writable: true,
    });
    mathRandomSpy.mockRestore();
  });
});
