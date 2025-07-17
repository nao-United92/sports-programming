
/**
 * Copies the given text to the clipboard.
 * Requires the user to have interacted with the page (e.g., a click event) for security reasons.
 * @param {string} text The text to copy to the clipboard.
 * @returns {Promise<void>} A Promise that resolves if the text was successfully copied, or rejects otherwise.
 */
export async function copyToClipboard(text) {
  if (!navigator.clipboard) {
    // Fallback for older browsers or non-secure contexts
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed'; // Avoid scrolling to bottom
    textarea.style.opacity = 0; // Hide element
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    try {
      document.execCommand('copy');
      textarea.remove();
      return Promise.resolve();
    } catch (err) {
      textarea.remove();
      return Promise.reject(new Error('Failed to copy text to clipboard using execCommand.'));
    }
  }
  try {
    await navigator.clipboard.writeText(text);
    return Promise.resolve();
  } catch (err) {
    return Promise.reject(new Error('Failed to copy text to clipboard using Clipboard API.'));
  }
}

/**
 * Reads text from the clipboard.
 * Requires user permission and a secure context (HTTPS).
 * @returns {Promise<string>} A Promise that resolves with the text from the clipboard.
 */
export async function readTextFromClipboard() {
  if (!navigator.clipboard || !navigator.clipboard.readText) {
    return Promise.reject(new Error('Clipboard API readText not supported.'));
  }
  try {
    const text = await navigator.clipboard.readText();
    return Promise.resolve(text);
  } catch (err) {
    return Promise.reject(new Error('Failed to read text from clipboard.' + err.message));
  }
}

/**
 * Writes text to the clipboard.
 * Requires user permission and a secure context (HTTPS).
 * @param {string} text The text to write to the clipboard.
 * @returns {Promise<void>} A Promise that resolves when the text is written.
 */
export async function writeTextToClipboard(text) {
  if (!navigator.clipboard || !navigator.clipboard.writeText) {
    return Promise.reject(new Error('Clipboard API writeText not supported.'));
  }
  try {
    await navigator.clipboard.writeText(text);
    return Promise.resolve();
  } catch (err) {
    return Promise.reject(new Error('Failed to write text to clipboard.' + err.message));
  }
}
