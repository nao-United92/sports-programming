const { uniqueId } = require('./utility-unique-id-utils.js');

describe('uniqueId', () => {
  // Note: The idCounter is global within the module. For isolated tests,
  // a reset mechanism or re-importing the module might be needed.
  // For this test suite, we'll assume sequential IDs across tests.

  it('should generate unique IDs sequentially', () => {
    const id1 = uniqueId();
    const id2 = uniqueId();
    const id3 = uniqueId();

    expect(id1).not.toBe(id2);
    expect(id2).not.toBe(id3);
  });

  it('should generate unique IDs with a given prefix', () => {
    const id1 = uniqueId('user_');
    const id2 = uniqueId('user_');
    const id3 = uniqueId('item-');

    expect(id1).toMatch(/^user_\d+$/);
    expect(id2).toMatch(/^user_\d+$/);
    expect(id3).toMatch(/^item-\d+$/);
    expect(id1).not.toBe(id2);
    expect(id2).not.toBe(id3);
  });

  it('should ensure IDs are strings', () => {
    expect(typeof uniqueId()).toBe('string');
    expect(typeof uniqueId('prefix_')).toBe('string');
  });
});
