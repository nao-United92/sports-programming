/**
 * @jest-environment jsdom
 */

const { loadScript, loadStyle } = require('./dynamic-loader');

describe('Dynamic Loader', () => {
  beforeEach(() => {
    document.head.innerHTML = '';
  });

  describe('loadScript', () => {
    test('should add a script tag to the document head', () => {
      loadScript('test.js');
      const script = document.querySelector('script[src="test.js"]');
      expect(script).not.toBeNull();
    });

    test('should resolve the promise on script load', async () => {
      const promise = loadScript('success.js');
      const script = document.querySelector('script');
      
      // Manually trigger the load event for testing
      const loadEvent = new Event('load');
      script.dispatchEvent(loadEvent);

      await expect(promise).resolves.toBe(script);
    });

    test('should reject the promise on script error', async () => {
      const promise = loadScript('fail.js');
      const script = document.querySelector('script');

      // Manually trigger the error event for testing
      const errorEvent = new Event('error');
      script.dispatchEvent(errorEvent);

      await expect(promise).rejects.toThrow('Failed to load script: fail.js');
    });

    test('should set script attributes from options', () => {
        loadScript('test.js', { async: false, defer: true, type: 'module' });
        const script = document.querySelector('script');
        expect(script.async).toBe(false);
        expect(script.defer).toBe(true);
        expect(script.type).toBe('module');
    });

    test('should resolve immediately if script already exists', async () => {
        const script = document.createElement('script');
        script.src = 'existing.js';
        document.head.appendChild(script);

        const promise = loadScript('existing.js');
        await expect(promise).resolves.toBe(script);
        // Ensure no new script was added
        expect(document.querySelectorAll('script[src="existing.js"]').length).toBe(1);
    });
  });

  describe('loadStyle', () => {
    test('should add a link tag to the document head', () => {
      loadStyle('test.css');
      const link = document.querySelector('link[href="test.css"]');
      expect(link).not.toBeNull();
      expect(link.rel).toBe('stylesheet');
    });

    test('should resolve the promise on style load', async () => {
      const promise = loadStyle('success.css');
      const link = document.querySelector('link');

      // Manually trigger the load event
      const loadEvent = new Event('load');
      link.dispatchEvent(loadEvent);

      await expect(promise).resolves.toBe(link);
    });

    test('should reject the promise on style error', async () => {
      const promise = loadStyle('fail.css');
      const link = document.querySelector('link');

      // Manually trigger the error event
      const errorEvent = new Event('error');
      link.dispatchEvent(errorEvent);

      await expect(promise).rejects.toThrow('Failed to load style: fail.css');
    });

    test('should resolve immediately if style already exists', async () => {
        const link = document.createElement('link');
        link.href = 'existing.css';
        document.head.appendChild(link);

        const promise = loadStyle('existing.css');
        await expect(promise).resolves.toBe(link);
        expect(document.querySelectorAll('link[href="existing.css"]').length).toBe(1);
    });
  });
});
