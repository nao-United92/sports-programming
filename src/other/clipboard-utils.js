
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
