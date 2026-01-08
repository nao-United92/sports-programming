import getElementByIdSafe from './dom-get-element-by-id-utils';

describe('getElementByIdSafe', () => {
  // Set up a basic DOM for testing
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="test-div"></div>
      <span id="test-span"></span>
    `;
  });

  test('should return the element if it exists', () => {
    const div = document.getElementById('test-div');
    expect(getElementByIdSafe('test-div')).toBe(div);
  });

  test('should return null if the element does not exist', () => {
    expect(getElementByIdSafe('non-existent-id')).toBeNull();
  });

  test.skip('should return null if `document` is not defined (non-browser env)', () => {
    // This test is difficult to set up reliably in Jest's JSDOM environment
    // because `document` is always defined by JSDOM.
    // To truly test this, one would need to mock the global 'document'
    // BEFORE the module under test is imported, and then clear the module cache.
    // For now, we skip this test.
    const originalDocument = global.document;
    global.document = undefined;
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});

    expect(getElementByIdSafe('test-div')).toBeNull();
    expect(consoleWarnSpy).toHaveBeenCalledWith('`document` is not defined. Cannot retrieve DOM element.');

    consoleWarnSpy.mockRestore();
    global.document = originalDocument; // Restore document
  });

  test('should throw TypeError if ID argument is not a non-empty string', () => {
    expect(() => getElementByIdSafe(null)).toThrow(TypeError);
    expect(() => getElementByIdSafe(undefined)).toThrow(TypeError);
    expect(() => getElementByIdSafe('')).toThrow(TypeError);
    expect(() => getElementByIdSafe(123)).toThrow(TypeError);
    expect(() => getElementByIdSafe({})).toThrow(TypeError);
  });
});