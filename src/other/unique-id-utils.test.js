import { uniqueId } from './unique-id-utils.js';

describe('uniqueId', () => {
  // Reset the counter before each test to ensure consistent results
  let originalIdCounter;
  beforeEach(() => {
    originalIdCounter = global.idCounter;
    global.idCounter = 0; // Assuming idCounter is globally accessible or can be reset
  });

  afterEach(() => {
    global.idCounter = originalIdCounter;
  });

  test('should generate unique IDs sequentially', () => {
    const id1 = uniqueId();
    const id2 = uniqueId();
    const id3 = uniqueId();

    expect(id1).toBe('1');
    expect(id2).toBe('2');
    expect(id3).toBe('3');
  });

  test('should generate unique IDs with a custom prefix', () => {
    const id1 = uniqueId('prefix-');
    const id2 = uniqueId('prefix-');

    expect(id1).toBe('prefix-1');
    expect(id2).toBe('prefix-2');
  });

  test('should generate unique IDs with an empty prefix', () => {
    const id = uniqueId('');
    expect(id).toBe('1');
  });

  test('should generate unique IDs across different prefixes', () => {
    const idA1 = uniqueId('A-');
    const idB1 = uniqueId('B-');
    const idA2 = uniqueId('A-');

    expect(idA1).toBe('A-1');
    expect(idB1).toBe('B-2');
    expect(idA2).toBe('A-3');
  });
});
