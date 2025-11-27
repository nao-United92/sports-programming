const { loadScript } = require('./dynamic-script-loader');

describe('Dynamic Script Loader', () => {
  const SCRIPT_URL = 'https://example.com/test.js';

  beforeEach(() => {
    // Clean up any scripts added to the body
    document.body.innerHTML = '';
    // Reset modules to ensure loadScript can be tested cleanly each time
    jest.resetModules();
  });

  test('should create a script tag and append it to the body', () => {
    loadScript(SCRIPT_URL);
    const scriptElement = document.querySelector(`script[src="${SCRIPT_URL}"]`);
    expect(scriptElement).not.toBeNull();
    expect(document.body.contains(scriptElement)).toBe(true);
  });

  test('should set script attributes correctly', () => {
    loadScript(SCRIPT_URL, { id: 'my-script', async: false, defer: true });
    const scriptElement = document.querySelector('#my-script');
    expect(scriptElement).not.toBeNull();
    expect(scriptElement.src).toBe(SCRIPT_URL);
    expect(scriptElement.id).toBe('my-script');
    expect(scriptElement.async).toBe(false);
    expect(scriptElement.defer).toBe(true);
  });

  test('should resolve the promise on script load', async () => {
    const { loadScript: newLoadScript } = require('./dynamic-script-loader');
    const promise = newLoadScript(SCRIPT_URL);

    const scriptElement = document.querySelector(`script[src="${SCRIPT_URL}"]`);
    scriptElement.dispatchEvent(new Event('load'));

    await expect(promise).resolves.toBeUndefined();
  });

  test('should reject the promise on script error', async () => {
    const { loadScript: newLoadScript } = require('./dynamic-script-loader');
    const promise = newLoadScript(SCRIPT_URL);

    const scriptElement = document.querySelector(`script[src="${SCRIPT_URL}"]`);
    scriptElement.dispatchEvent(new Event('error'));

    await expect(promise).rejects.toThrow(`Failed to load script: ${SCRIPT_URL}`);
  });

  test('should not add a new script if one with the same src already exists', () => {
    // Manually add a script to simulate it already being on the page
    const existingScript = document.createElement('script');
    existingScript.src = SCRIPT_URL;
    document.body.appendChild(existingScript);

    loadScript(SCRIPT_URL);

    const scriptElements = document.querySelectorAll(`script[src="${SCRIPT_URL}"]`);
    expect(scriptElements.length).toBe(1);
  });

  test('should append to a custom parent element', () => {
    const customParent = document.createElement('div');
    document.body.appendChild(customParent);

    loadScript(SCRIPT_URL, { parent: customParent });

    const scriptElement = customParent.querySelector(`script[src="${SCRIPT_URL}"]`);
    expect(scriptElement).not.toBeNull();
    expect(customParent.contains(scriptElement)).toBe(true);
  });
});