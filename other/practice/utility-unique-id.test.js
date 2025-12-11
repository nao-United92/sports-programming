let uniqueId; // Declare outside to be reassigned in beforeEach

describe('uniqueId', () => {
  beforeEach(() => {
    jest.resetModules(); // Clear the module cache
    uniqueId = require('./utility-unique-id'); // Re-require the module to get a fresh instance with reset counter
  });

  test('should generate unique IDs', () => {
    const id1 = uniqueId();
    const id2 = uniqueId();
    expect(id1).not.toBe(id2);
  });

  test('should generate unique IDs with a given prefix', () => {
    const id1 = uniqueId('prefix_');
    const id2 = uniqueId('prefix_');
    expect(id1).not.toBe(id2);
    expect(id1).toMatch(/^prefix_/);
    expect(id2).toMatch(/^prefix_/);
  });

  test('should increment the ID counter for each call within the same test', () => {
    // After resetModules, the counter starts from 0 (then increments to 1 for first call)
    const id1 = uniqueId();
    const id2 = uniqueId();
    const id3 = uniqueId();

    expect(id1).toBe('1');
    expect(id2).toBe('2');
    expect(id3).toBe('3');
  });

  test('should generate IDs correctly without a prefix', () => {
    expect(uniqueId()).toBe('1');
    expect(uniqueId()).toBe('2');
  });

  test('should generate IDs correctly with a prefix', () => {
    expect(uniqueId('user_')).toBe('user_1');
    expect(uniqueId('item-')).toBe('item-2');
    expect(uniqueId('order_')).toBe('order_3');
  });
});