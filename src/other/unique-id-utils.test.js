import { uniqueId } from './unique-id-utils';

describe('uniqueId', () => {
  // Reset counter before each test to ensure consistent results
  let originalIdCounter;
  beforeEach(() => {
    originalIdCounter = global.idCounter;
    global.idCounter = 0; // Assuming idCounter is globally accessible for testing
  });

  afterEach(() => {
    global.idCounter = originalIdCounter;
  });

  it('should generate unique IDs', () => {
    const id1 = uniqueId();
    const id2 = uniqueId();
    expect(id1).not.toBe(id2);
  });

  it('should generate IDs with a prefix', () => {
    const id = uniqueId('prefix-');
    expect(id).toMatch(/^prefix-\d+$/);
  });

  it('should increment the ID counter', () => {
    const id1 = uniqueId();
    const id2 = uniqueId();
    expect(parseInt(id2.replace(/\D/g, ''))).toBe(parseInt(id1.replace(/\D/g, '')) + 1);
  });

  it('should work without a prefix', () => {
    const id = uniqueId();
    expect(id).toMatch(/^\d+$/);
  });
});