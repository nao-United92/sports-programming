import { generateUniqueId } from './id-utils.js';

describe('generateUniqueId', () => {
  it('should generate a unique ID each time it is called', () => {
    const id1 = generateUniqueId();
    const id2 = generateUniqueId();
    expect(id1).not.toBe(id2);
  });

  it('should generate a string', () => {
    const id = generateUniqueId();
    expect(typeof id).toBe('string');
  });

  it('should generate a non-empty string', () => {
    const id = generateUniqueId();
    expect(id.length).toBeGreaterThan(0);
  });
});
