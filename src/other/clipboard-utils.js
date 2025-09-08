/**
 * Copies a string to the clipboard.
 * Uses the modern Clipboard API if available, with a fallback to the legacy execCommand method.
 * @param {string} str The string to copy.
 * @returns {Promise<void>} A promise that resolves when the copy operation is complete, or rejects if it fails.
 */
const copyToClipboard = (str) => {
  if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
    return navigator.clipboard.writeText(str);
  }

  return new Promise((resolve, reject) => {
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    const selected =
      document.getSelection().rangeCount > 0
        ? document.getSelection().getRangeAt(0)
        : false;
    try {
        el.select();
        const success = document.execCommand('copy');
        if (success) {
            resolve();
        } else {
            reject(new Error('Copy command was unsuccessful'));
        }
    } catch (err) {
        reject(err);
    } finally {
        document.body.removeChild(el);
        if (selected) {
            document.getSelection().removeAllRanges();
            document.getSelection().addRange(selected);
        }
    }
  });
};

module.exports = { copyToClipboard };