
import { loadScript } from './dynamic-script-loader';

// Mocking the DOM environment for Jest
global.document.createElement = jest.fn(() => ({}));
global.document.head = { appendChild: jest.fn() };

describe('dynamic-script-loader', () => {
  let scriptElement;
  let appendChildSpy;

  beforeEach(() => {
    // Reset mocks before each test
    scriptElement = {};
    appendChildSpy = jest.spyOn(document.head, 'appendChild').mockImplementation((el) => {
      // Simulate the script loading process
      scriptElement = el;
      // Trigger onload for success cases, onerror for failure cases
      setTimeout(() => {
        if (scriptElement.src.includes('error')) {
          if (scriptElement.onerror) scriptElement.onerror();
        } else {
          if (scriptElement.onload) scriptElement.onload();
        }
      }, 0);
    });
    jest.spyOn(document, 'createElement').mockReturnValue(scriptElement);
  });

  afterEach(() => {
    jest.clearAllMocks();
    // Clear the internal cache of the loader
    jest.resetModules(); 
  });

  it('should create a script tag with the correct URL', async () => {
    const url = 'https://example.com/script.js';
    await loadScript(url);
    expect(document.createElement).toHaveBeenCalledWith('script');
    expect(scriptElement.src).toBe(url);
    expect(appendChildSpy).toHaveBeenCalledWith(scriptElement);
  });

  it('should resolve the promise on successful script load', async () => {
    const url = 'https://example.com/success.js';
    await expect(loadScript(url)).resolves.toBe(scriptElement);
  });

  it('should reject the promise on a script load error', async () => {
    const url = 'https://example.com/error.js';
    await expect(loadScript(url)).rejects.toThrow('Failed to load script: https://example.com/error.js');
  });

  it('should only load the same script once', async () => {
    const url = 'https://example.com/unique.js';
    const promise1 = loadScript(url);
    const promise2 = loadScript(url);

    expect(promise1).toBe(promise2); // Should return the same promise object
    await promise1;
    expect(document.createElement).toHaveBeenCalledTimes(1);
  });

  it('should set script attributes based on options', async () => {
    const url = 'https://example.com/options.js';
    const setAttribute = jest.fn();
    scriptElement.setAttribute = setAttribute;

    const options = {
      async: false,
      defer: true,
      id: 'my-script',
      attributes: {
        'data-custom': 'value',
        'integrity': 'sha-123',
      },
    };

    await loadScript(url, options);

    expect(scriptElement.async).toBe(false);
    expect(scriptElement.defer).toBe(true);
    expect(scriptElement.id).toBe('my-script');
    expect(setAttribute).toHaveBeenCalledWith('data-custom', 'value');
    expect(setAttribute).toHaveBeenCalledWith('integrity', 'sha-123');
  });
});
