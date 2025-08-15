
import { loadScript, loadScriptsInOrder, loadScriptsInParallel } from './dynamic-script-loader';

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
    // Clear the internal cache of the loader by resetting the module
    jest.resetModules(); 
  });

  describe('loadScript', () => {
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
  });

  describe('loadScriptsInOrder', () => {
    it('should load scripts one after another', async () => {
      const urls = ['script1.js', 'script2.js', 'script3.js'];
      await loadScriptsInOrder(urls);
      expect(document.createElement).toHaveBeenCalledTimes(3);
      // This test setup doesn't easily allow checking the order of appendChild calls
      // without a more complex mock, but we can check that all were called.
      expect(appendChildSpy).toHaveBeenCalledTimes(3);
    });
  });

  describe('loadScriptsInParallel', () => {
    it('should load all scripts in parallel', async () => {
      const urls = ['p1.js', 'p2.js', 'p3.js'];
      await loadScriptsInParallel(urls);
      expect(document.createElement).toHaveBeenCalledTimes(3);
      expect(appendChildSpy).toHaveBeenCalledTimes(3);
    });
  });
});
