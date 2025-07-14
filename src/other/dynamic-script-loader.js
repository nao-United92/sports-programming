
const loadedScripts = new Map();

/**
 * Dynamically loads a script from a given URL.
 * Caches the script to prevent reloading.
 * @param {string} url The URL of the script to load.
 * @param {object} [options] - Optional attributes for the script tag.
 * @param {boolean} [options.async=true] - Sets the async attribute.
 * @param {boolean} [options.defer=false] - Sets the defer attribute.
 * @param {string} [options.id] - An ID for the script element.
 * @param {object} [options.attributes] - Other custom attributes (e.g., data-*).
 * @returns {Promise<HTMLScriptElement>} A promise that resolves with the script element on success, or rejects on error.
 */
export function loadScript(url, options = {}) {
  if (loadedScripts.has(url)) {
    return loadedScripts.get(url);
  }

  const promise = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = url;

    // Set attributes from options
    script.async = options.async !== false; // default to true
    script.defer = !!options.defer;
    if (options.id) {
      script.id = options.id;
    }
    if (options.attributes) {
      for (const [key, value] of Object.entries(options.attributes)) {
        script.setAttribute(key, value);
      }
    }

    script.onload = () => {
      resolve(script);
    };

    script.onerror = () => {
      // Clean up on error
      loadedScripts.delete(url);
      script.remove();
      reject(new Error(`Failed to load script: ${url}`));
    };

    (document.head || document.getElementsByTagName('head')[0]).appendChild(script);
  });

  loadedScripts.set(url, promise);
  return promise;
}
