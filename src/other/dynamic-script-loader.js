/**
 * Dynamically loads a script by creating and appending a <script> tag to the document.
 * It returns a Promise that resolves on successful load and rejects on error.
 *
 * @param {string} url The URL of the script to load.
 * @param {object} [options={}] Optional configuration for the script tag.
 * @param {boolean} [options.async=true] Sets the async attribute.
 * @param {boolean} [options.defer=false] Sets the defer attribute.
 * @param {string|null} [options.id=null] The ID to set for the script element.
 * @param {HTMLElement} [options.parent=document.body] The parent element to append the script to.
 * @returns {Promise<void>} A promise that resolves when the script is loaded, or rejects on failure.
 */
function loadScript(url, options = {}) {
  return new Promise((resolve, reject) => {
    // If a script with the same URL already exists, assume it's loaded or loading.
    if (document.querySelector(`script[src="${url}"]`)) {
      // A more robust implementation might check the loading state, but this is a common approach.
      resolve();
      return;
    }

    const script = document.createElement('script');
    const { async = true, defer = false, id = null, parent = document.body } = options;

    script.src = url;
    script.async = async;
    script.defer = defer;
    if (id) {
      script.id = id;
    }

    script.onload = () => {
      resolve();
    };

    script.onerror = () => {
      // Clean up the failed script tag
      parent.removeChild(script);
      reject(new Error(`Failed to load script: ${url}`));
    };

    parent.appendChild(script);
  });
}

module.exports = { loadScript };